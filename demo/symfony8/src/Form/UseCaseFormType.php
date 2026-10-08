<?php

declare(strict_types=1);

namespace App\Form;

use Nowo\AltchaTypeBundle\Form\Type\AltchaType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

final class UseCaseFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $case = $options['use_case'];

        match ($case) {
            'low'        => $this->buildWithProfile($builder, 'low'),
            'high'       => $this->buildWithProfile($builder, 'high'),
            'invisible'  => $this->buildWithProfile($builder, 'invisible'),
            'newsletter' => $this->buildNewsletter($builder),
            default      => $this->buildWithProfile($builder, 'contact'),
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
        ]);
    }

    /**
     * @param FormBuilderInterface<mixed> $builder
     */
    private function buildWithProfile(FormBuilderInterface $builder, string $profile): void
    {
        $builder
            ->add('name', TextType::class, [
                'label'    => 'demo.fields.name',
                'required' => true,
            ])
            ->add('email', EmailType::class, [
                'label'    => 'demo.fields.email',
                'required' => true,
            ])
            ->add('message', TextareaType::class, [
                'label'    => 'demo.fields.message',
                'required' => true,
            ])
            ->add('security', AltchaType::class, [
                'profile' => $profile,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'demo.fields.submit',
            ]);
    }

    /**
     * @param FormBuilderInterface<mixed> $builder
     */
    private function buildNewsletter(FormBuilderInterface $builder): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label'    => 'demo.fields.email',
                'required' => true,
            ])
            ->add('security', AltchaType::class, [
                'profile'     => 'low',
                'floating'    => true,
                'hide_logo'   => true,
                'hide_footer' => true,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'demo.fields.subscribe',
            ]);
    }
}
