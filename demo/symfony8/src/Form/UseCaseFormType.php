<?php

declare(strict_types=1);

namespace App\Form;

use Nowo\FormKitBundle\Attribute\FormKitConfig;
use Nowo\FormKitBundle\Form\FormOptionsTrait;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * REQ-DEMO-015: a FormKit form (profile `demo`); the bundle's AltchaType is added through FormKit's addAltcha().
 *
 * @extends AbstractType<mixed>
 */
#[FormKitConfig('demo')]
final class UseCaseFormType extends AbstractType
{
    use FormOptionsTrait;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $case = $options['use_case'];

        match ($case) {
            'low'         => $this->buildWithProfile($builder, 'low'),
            'high'        => $this->buildWithProfile($builder, 'high'),
            'invisible'   => $this->buildWithProfile($builder, 'invisible'),
            'newsletter'  => $this->buildNewsletter($builder),
            'memory_hard' => $this->buildWithProfile($builder, 'memory_hard'),
            default       => $this->buildWithProfile($builder, 'contact'),
        };
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'use_case' => 'contact',
        ]);
        $resolver->setAllowedTypes('use_case', 'string');
        $resolver->setAllowedValues('use_case', [
            'contact',
            'low',
            'high',
            'invisible',
            'newsletter',
            'memory_hard',
        ]);
    }

    /**
     * @param FormBuilderInterface<mixed> $builder
     */
    private function buildWithProfile(FormBuilderInterface $builder, string $profile): void
    {
        $this->addText($builder, 'name', [
            'label'    => 'demo.fields.name',
            'required' => true,
            'placeholder' => false,
            'help'     => false,
        ]);
        $this->addEmail($builder, 'email', [
            'label'    => 'demo.fields.email',
            'required' => true,
            'placeholder' => false,
            'help'     => false,
        ]);
        $this->addTextarea($builder, 'message', [
            'label'    => 'demo.fields.message',
            'required' => true,
            'placeholder' => false,
            'help'     => false,
        ]);
        $this->addAltcha($builder, 'security', [
            'profile' => $profile,
            'label'   => false,
            'help'    => false,
            'placeholder' => false,
        ]);
        $this->addSubmit($builder, 'demo.fields.submit');
    }

    /**
     * @param FormBuilderInterface<mixed> $builder
     */
    private function buildNewsletter(FormBuilderInterface $builder): void
    {
        $this->addEmail($builder, 'email', [
            'label'    => 'demo.fields.email',
            'required' => true,
            'placeholder' => false,
            'help'     => false,
        ]);
        $this->addAltcha($builder, 'security', [
            'profile'     => 'low',
            'floating'    => true,
            'hide_logo'   => true,
            'hide_footer' => true,
            'label'       => false,
            'help'        => false,
            'placeholder' => false,
        ]);
        $this->addSubmit($builder, 'demo.fields.subscribe');
    }

    /**
     * @param FormBuilderInterface<mixed> $builder
     */
    private function addSubmit(FormBuilderInterface $builder, string $label): void
    {
        $this->addWithDefaults($builder, 'submit', SubmitType::class, [
            'label' => $label,
            'attr'  => ['class' => 'nowo-ui-btn nowo-ui-btn--primary'],
        ]);
    }
}
