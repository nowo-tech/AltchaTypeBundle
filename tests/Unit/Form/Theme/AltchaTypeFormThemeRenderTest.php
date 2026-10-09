<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Form\Theme;

use Nowo\AltchaTypeBundle\DependencyInjection\Configuration;
use Nowo\AltchaTypeBundle\Form\Type\AltchaType;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Twig\NowoAltchaTypeTwigExtension;
use PHPUnit\Framework\Attributes\CoversNothing;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Symfony\Bridge\Twig\AppVariable;
use Symfony\Bridge\Twig\Extension\AssetExtension;
use Symfony\Bridge\Twig\Extension\FormExtension;
use Symfony\Bridge\Twig\Extension\TranslationExtension;
use Symfony\Bridge\Twig\Form\TwigRendererEngine;
use Symfony\Component\Asset\Packages;
use Symfony\Component\Asset\PathPackage;
use Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\FormRenderer;
use Symfony\Component\Form\Forms;
use Symfony\Component\Form\PreloadedExtension;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Translation\IdentityTranslator;
use Symfony\Component\Validator\Validation;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Twig\RuntimeLoader\FactoryRuntimeLoader;

use function dirname;

/**
 * Renders form_row with Symfony layout + bundle ALTCHA theme (same stack as the demo).
 */
#[CoversNothing]
final class AltchaTypeFormThemeRenderTest extends TestCase
{
    #[Test]
    public function formRowWithBootstrap5LayoutDoesNotThrow(): void
    {
        $html = $this->renderContactRows([
            'form_div_layout.html.twig',
            'bootstrap_5_layout.html.twig',
            'altcha_type_theme_bootstrap5.html.twig',
        ], includeScript: false, useStimulus: true);

        self::assertStringContainsString('name="contact[email]"', $html);
        self::assertStringContainsString('<altcha-widget', $html);
        self::assertStringContainsString('name="contact[altcha]"', $html);
        self::assertStringContainsString('data-controller="altcha-type"', $html);
        self::assertStringNotContainsString('<script', $html);
        self::assertStringContainsString('challenge="&#x2F;altcha&#x2F;challenge"', $html);
        self::assertStringContainsString('display="floating"', $html);
        self::assertMatchesRegularExpression('/configuration="[^"]*hideLogo[^"]*false[^"]*hideFooter[^"]*false[^"]*"/', $html);
    }

    #[Test]
    public function includeScriptEmitsAssetTagsFromNamedPackage(): void
    {
        $html = $this->renderContactRows([
            'form_div_layout.html.twig',
            'altcha_type_theme.html.twig',
        ], includeScript: true, useStimulus: false);

        self::assertStringContainsString('src="/bundles/nowoaltchatype/altcha-type.js"', $html);
        self::assertStringContainsString('href="/bundles/nowoaltchatype/altcha-type.css"', $html);
        self::assertStringNotContainsString('data-controller', $html);
    }

    #[Test]
    public function includeScriptCarriesTheCspNonceFromTheRequestAttribute(): void
    {
        $html = $this->renderContactRows([
            'form_div_layout.html.twig',
            'altcha_type_theme.html.twig',
        ], includeScript: true, useStimulus: false, cspNonce: 'n0nce');

        self::assertStringContainsString('src="/bundles/nowoaltchatype/altcha-type.js" defer nonce="n0nce"', $html);
    }

    #[Test]
    public function includeScriptOmitsTheNonceWithoutTheRequestAttribute(): void
    {
        $html = $this->renderContactRows([
            'form_div_layout.html.twig',
            'altcha_type_theme.html.twig',
        ], includeScript: true, useStimulus: false, cspNonce: '');

        self::assertStringContainsString('src="/bundles/nowoaltchatype/altcha-type.js"', $html);
        self::assertStringNotContainsString('nonce=', $html);
    }

    #[Test]
    public function disabledFieldRendersPlaceholderInput(): void
    {
        $html = $this->renderContactRows(['form_div_layout.html.twig', 'altcha_type_theme.html.twig'], enable: false);

        self::assertStringNotContainsString('<altcha-widget', $html);
        self::assertStringContainsString('value="disabled"', $html);
    }

    #[Test]
    public function formRowWithDivLayoutDoesNotThrow(): void
    {
        $html = $this->renderContactRows([
            'form_div_layout.html.twig',
            'altcha_type_theme.html.twig',
        ]);

        self::assertStringContainsString('<altcha-widget', $html);
        self::assertStringContainsString('name="contact[altcha]"', $html);
    }

    /**
     * @param list<string> $themes
     */
    private function renderContactRows(array $themes, bool $includeScript = true, bool $useStimulus = false, bool $enable = true, ?string $cspNonce = null): string
    {
        $bundleRoot = dirname(__DIR__, 4);
        $loader     = new FilesystemLoader([
            $bundleRoot . '/vendor/symfony/twig-bridge/Resources/views/Form',
            $bundleRoot . '/src/Resources/views/Form',
        ]);
        $loader->addPath($bundleRoot . '/src/Resources/views', 'NowoAltchaTypeBundle');

        $twig = new Environment($loader);
        if ($cspNonce !== null) {
            $request = new Request();
            if ($cspNonce !== '') {
                $request->attributes->set('csp_nonce', $cspNonce);
            }
            $requestStack = new RequestStack();
            $requestStack->push($request);
            $app = new AppVariable();
            $app->setRequestStack($requestStack);
            $twig->addGlobal('app', $app);
        }
        $engine   = new TwigRendererEngine($themes, $twig);
        $renderer = new FormRenderer($engine);
        $twig->addRuntimeLoader(new FactoryRuntimeLoader([
            FormRenderer::class => static fn (): FormRenderer => $renderer,
        ]));
        $twig->addExtension(new FormExtension());
        $twig->addExtension(new TranslationExtension(new IdentityTranslator()));
        $twig->addExtension(new NowoAltchaTypeTwigExtension());
        $twig->addExtension(new AssetExtension(new Packages(null, [
            'nowo_altcha_type' => new PathPackage('/bundles/nowoaltchatype', new EmptyVersionStrategy()),
        ])));

        $urlGen = $this->createMock(UrlGeneratorInterface::class);
        $urlGen->method('generate')->willReturn('/altcha/challenge');

        $registry = new AltchaTypeProfileRegistry('default', Configuration::builtinProfiles());
        $factory  = Forms::createFormFactoryBuilder()
            ->addExtensions([
                new PreloadedExtension([
                    new AltchaType($registry, $urlGen, $enable, $includeScript, $useStimulus),
                ], []),
                new ValidatorExtension(Validation::createValidator()),
            ])
            ->getFormFactory();

        $form = $factory->createNamedBuilder('contact', FormType::class)
            ->add('email', TextType::class)
            ->add('altcha', AltchaType::class, ['profile' => 'contact'])
            ->getForm();

        $view = $form->createView();

        return $renderer->searchAndRenderBlock($view['email'], 'row')
            . $renderer->searchAndRenderBlock($view['altcha'], 'row');
    }
}
