<?php

declare(strict_types=1);

namespace App\Controller;

use App\Form\UseCaseFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

use function in_array;

use const JSON_THROW_ON_ERROR;

final class DemoController extends AbstractController
{
    /** @var list<string> */
    private const USE_CASES = [
        'contact',
        'low',
        'high',
        'invisible',
        'newsletter',
        'memory_hard',
    ];

    #[Route('/', name: 'demo_index_default', methods: ['GET'])]
    public function indexDefault(): Response
    {
        return $this->redirectToRoute('demo_case', ['_locale' => 'en', 'case' => 'contact'], Response::HTTP_FOUND);
    }

    /** The old `/{_locale}?case=<case>` URLs move permanently to the case path; without a case the contact case opens. */
    #[Route('/{_locale}', name: 'demo_index', requirements: ['_locale' => 'en|es|it|fr|pt|de|nl'], methods: ['GET'])]
    public function index(Request $request): Response
    {
        $case  = (string) $request->query->get('case', '');
        $valid = in_array($case, self::USE_CASES, true);

        return $this->redirectToRoute(
            'demo_case',
            ['_locale' => $request->getLocale(), 'case' => $valid ? $case : 'contact'],
            $valid ? Response::HTTP_MOVED_PERMANENTLY : Response::HTTP_FOUND,
        );
    }

    #[Route('/{_locale}/{case}', name: 'demo_case', requirements: ['_locale' => 'en|es|it|fr|pt|de|nl', 'case' => 'contact|low|high|invisible|newsletter|memory_hard'], methods: ['GET', 'POST'])]
    public function case(Request $request, TranslatorInterface $translator, string $case): Response
    {
        $form = $this->createForm(UseCaseFormType::class, null, [
            'use_case' => $case,
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = json_encode($form->getData(), JSON_THROW_ON_ERROR);
            $this->addFlash('success', $translator->trans('demo.form_submitted', ['%data%' => $data]));

            return $this->redirectToRoute('demo_case', [
                '_locale' => $request->getLocale(),
                'case'    => $case,
            ]);
        }

        return $this->render('demo/index.html.twig', [
            'form'      => $form,
            'use_cases' => self::USE_CASES,
            'current'   => $case,
        ]);
    }
}
