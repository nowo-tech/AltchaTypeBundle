<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Form\Type;

use Nowo\AltchaTypeBundle\Controller\AltchaChallengeController;
use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Validator\Constraints\AltchaValid;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

use function is_string;

/**
 * Hidden text field that renders the ALTCHA widget and validates the submitted PoW payload.
 *
 * @extends AbstractType<string|null>
 */
final class AltchaType extends AbstractType
{
    /**
     * @param AltchaTypeProfileRegistry $registry Named profiles
     * @param UrlGeneratorInterface $urlGenerator Builds the challenge URL
     * @param bool $enable When false the widget is not rendered and validation passes
     * @param bool $includeScript Emit the bundle CSS/JS tags from the widget template
     * @param bool $useStimulus Emit `data-controller="altcha-type"` (host registers the controller)
     * @param bool $debug Enable frontend debug logging
     */
    public function __construct(
        private readonly AltchaTypeProfileRegistry $registry,
        private readonly UrlGeneratorInterface $urlGenerator,
        private readonly bool $enable,
        private readonly bool $includeScript,
        private readonly bool $useStimulus,
        private readonly bool $debug = false,
    ) {
    }

    /**
     * Declares field options (`profile`, `floating`, `hide_logo`, `hide_footer`, `challenge_url`) and
     * appends an {@see AltchaValid} bound to the field profile when the field is required.
     *
     * @param OptionsResolver $resolver Options resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'mapped'         => false,
            'required'       => true,
            'label'          => false,
            'profile'        => null,
            'floating'       => null,
            'hide_logo'      => null,
            'hide_footer'    => null,
            'challenge_url'  => null,
            'constraints'    => [],
            'error_bubbling' => false,
            'attr'           => ['hidden' => true],
        ]);

        $resolver->setAllowedTypes('profile', ['null', 'string']);
        $resolver->setAllowedTypes('floating', ['null', 'bool']);
        $resolver->setAllowedTypes('hide_logo', ['null', 'bool']);
        $resolver->setAllowedTypes('hide_footer', ['null', 'bool']);
        $resolver->setAllowedTypes('challenge_url', ['null', 'string']);
        $resolver->setAllowedTypes('constraints', 'array');

        $resolver->setNormalizer('constraints', function (Options $options, array $value): array {
            if ($options['required'] !== true) {
                return $value;
            }

            foreach ($value as $constraint) {
                if ($constraint instanceof AltchaValid) {
                    return $value;
                }
            }

            $profile = is_string($options['profile']) ? $options['profile'] : $this->registry->getDefaultProfileName();
            $value[] = new AltchaValid(profile: $profile);

            return $value;
        });
    }

    /**
     * Exposes `altcha_*` view variables consumed by the widget template.
     *
     * @param FormView $view Field view
     * @param FormInterface<mixed> $form Field form
     * @param array<string, mixed> $options Resolved options
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $profileName = is_string($options['profile']) ? $options['profile'] : null;
        $profile     = $this->registry->get($profileName);

        $view->vars['altcha_enable']         = $this->enable;
        $view->vars['altcha_profile']        = $profileName ?? $this->registry->getDefaultProfileName();
        $view->vars['altcha_floating']       = $options['floating'] ?? $profile['floating'];
        $view->vars['altcha_hide_logo']      = $options['hide_logo'] ?? $profile['hide_logo'];
        $view->vars['altcha_hide_footer']    = $options['hide_footer'] ?? $profile['hide_footer'];
        $view->vars['altcha_include_script'] = $this->includeScript;
        $view->vars['altcha_use_stimulus']   = $this->useStimulus;
        $view->vars['altcha_debug']          = $this->debug;
        $view->vars['altcha_challenge_url']  = $this->resolveChallengeUrl(
            is_string($options['challenge_url']) ? $options['challenge_url'] : null,
            $view->vars['altcha_profile'],
        );
    }

    /**
     * @return string Parent type (hidden text input)
     */
    public function getParent(): string
    {
        return TextType::class;
    }

    /**
     * @return string Twig block prefix (`nowo_altcha_type_widget`)
     */
    public function getBlockPrefix(): string
    {
        return 'nowo_altcha_type';
    }

    /**
     * Resolves the challenge URL (explicit override or bundle route with `?profile=`).
     *
     * @param string|null $override Explicit URL from the `challenge_url` option
     * @param string $profile Profile name
     *
     * @return string Challenge URL
     */
    private function resolveChallengeUrl(?string $override, string $profile): string
    {
        if ($override !== null && $override !== '') {
            return $override;
        }

        try {
            return $this->urlGenerator->generate(AltchaChallengeController::ROUTE_NAME, [
                'profile' => $profile,
            ]);
        } catch (RouteNotFoundException $e) {
            throw new RouteNotFoundException('The route "nowo_altcha_type_challenge" is not defined. Import the bundle controllers: resource "@NowoAltchaTypeBundle/Controller/" with type "attribute" (see docs/INSTALLATION.md).', 0, $e);
        }
    }
}
