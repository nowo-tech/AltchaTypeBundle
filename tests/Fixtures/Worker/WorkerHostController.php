<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Fixtures\Worker;

use Nowo\AltchaTypeBundle\Form\Type\AltchaType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

/**
 * Host controller that owns the form: renders it and reads the submission.
 */
final readonly class WorkerHostController
{
    public function __construct(
        private FormFactoryInterface $forms,
        private Environment $twig,
    ) {
    }

    public function __invoke(Request $request, string $who): Response
    {
        $form = $this->forms->createNamedBuilder('f', FormType::class)
            ->add('captcha', AltchaType::class, ['profile' => $who])
            ->getForm();
        $form->handleRequest($request);

        $html = $this->twig->render('host_form.html.twig', ['form' => $form->createView()]);
        $sent = $form->isSubmitted() ? ($form->isValid() ? 'valid' : 'invalid') : 'none';

        return new Response('who=' . $who . ';submitted=[' . $sent . '];locale=' . $request->getLocale() . ';' . $html);
    }
}
