<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Form\Type;

use InvalidArgumentException;
use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Form\Type\AltchaType;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValid;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\Forms;
use Symfony\Component\Form\PreloadedExtension;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Validator\Validation;

#[CoversClass(AltchaType::class)]
final class AltchaTypeTest extends TestCase
{
    /**
     * @param array<string, mixed> $options
     *
     * @return FormInterface<mixed>
     */
    private function createField(array $options = [], bool $enable = true, bool $debug = false): FormInterface
    {
        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());
        $urlGen   = $this->createMock(UrlGeneratorInterface::class);
        $urlGen->method('generate')
            ->with('nowo_altcha_type_challenge', self::anything())
            ->willReturn('/altcha/challenge');

        $factory = Forms::createFormFactoryBuilder()
            ->addExtensions([
                new PreloadedExtension([
                    new AltchaType($registry, $urlGen, $enable, true, false, $debug),
                ], []),
                new ValidatorExtension(Validation::createValidator()),
            ])
            ->getFormFactory();

        return $factory->create(AltchaType::class, null, $options);
    }

    #[Test]
    public function parentIsTextTypeAndBlockPrefixIsNowoAltchaType(): void
    {
        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());
        $urlGen   = $this->createMock(UrlGeneratorInterface::class);
        $type     = new AltchaType($registry, $urlGen, true, true, false);

        self::assertSame(TextType::class, $type->getParent());
        self::assertSame('nowo_altcha_type', $type->getBlockPrefix());
    }

    #[Test]
    public function buildViewUsesDefaultProfileAndChallengeUrl(): void
    {
        $view = $this->createField()->createView();

        self::assertSame('default', $view->vars['altcha_profile']);
        self::assertTrue($view->vars['altcha_enable']);
        self::assertFalse($view->vars['altcha_floating']);
        self::assertSame('/altcha/challenge', $view->vars['altcha_challenge_url']);
        self::assertFalse($view->vars['altcha_debug']);
    }

    #[Test]
    public function buildViewResolvesNamedProfileAndOverrides(): void
    {
        $view = $this->createField([
            'profile'       => 'invisible',
            'floating'      => false,
            'challenge_url' => 'https://example.test/challenge',
        ], true, true)->createView();

        self::assertSame('invisible', $view->vars['altcha_profile']);
        self::assertFalse($view->vars['altcha_floating']);
        self::assertTrue($view->vars['altcha_hide_logo']);
        self::assertSame('https://example.test/challenge', $view->vars['altcha_challenge_url']);
        self::assertTrue($view->vars['altcha_debug']);
    }

    #[Test]
    public function unknownProfileThrowsWhenBuildingTheView(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->createField(['profile' => 'missing'])->createView();
    }

    #[Test]
    public function requiredAddsAltchaValidConstraintOnce(): void
    {
        $form        = $this->createField(['constraints' => [new AltchaValid('custom.invalid')]]);
        $constraints = $form->getConfig()->getOption('constraints');
        $altchaCount = 0;
        foreach ($constraints as $constraint) {
            if ($constraint instanceof AltchaValid) {
                ++$altchaCount;
                self::assertSame('custom.invalid', $constraint->message);
            }
        }
        self::assertSame(1, $altchaCount);
    }

    #[Test]
    public function requiredUsesAltchaValidWithBundleMessage(): void
    {
        $form        = $this->createField();
        $constraints = $form->getConfig()->getOption('constraints');
        self::assertCount(1, $constraints);
        self::assertInstanceOf(AltchaValid::class, $constraints[0]);
        self::assertSame('form.error.invalid', $constraints[0]->message);
        self::assertSame('default', $constraints[0]->profile);
    }

    #[Test]
    public function requiredBindsConstraintToFieldProfile(): void
    {
        $constraints = $this->createField(['profile' => 'high'])->getConfig()->getOption('constraints');
        self::assertInstanceOf(AltchaValid::class, $constraints[0]);
        self::assertSame('high', $constraints[0]->profile);
    }

    #[Test]
    public function optionalFieldDoesNotAddAltchaValid(): void
    {
        $form = $this->createField(['required' => false]);
        self::assertSame([], $form->getConfig()->getOption('constraints'));
    }

    #[Test]
    public function missingChallengeRouteThrowsHelpfulException(): void
    {
        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());
        $urlGen   = $this->createMock(UrlGeneratorInterface::class);
        $urlGen->method('generate')->willThrowException(new RouteNotFoundException('missing'));

        $form = Forms::createFormFactoryBuilder()
            ->addExtension(new PreloadedExtension([new AltchaType($registry, $urlGen, true, true, false)], []))
            ->getFormFactory()
            ->create(AltchaType::class);

        $this->expectException(RouteNotFoundException::class);
        $this->expectExceptionMessage('nowo_altcha_type_challenge');
        $form->createView();
    }
}
