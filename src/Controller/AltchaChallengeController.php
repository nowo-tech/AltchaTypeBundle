<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Controller;

use Nowo\AltchaTypeBundle\Profile\AltchaTypeProfileRegistry;
use Nowo\AltchaTypeBundle\Service\AltchaChallengeFactory;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Issues a fresh ALTCHA challenge for the widget (`challengeurl`).
 *
 * The path must be publicly reachable (PUBLIC_ACCESS) even when the rest of the
 * application requires authentication. Rate-limit it in the host app (see docs/SECURITY.md).
 */
#[AsController]
final class AltchaChallengeController
{
    /** @var string Route name used by AltchaType to build the widget challenge URL. */
    public const ROUTE_NAME = 'nowo_altcha_type_challenge';

    /**
     * @param AltchaChallengeFactory $challengeFactory Creates signed challenges
     * @param AltchaTypeProfileRegistry $profiles Validates the requested profile name
     */
    public function __construct(
        private readonly AltchaChallengeFactory $challengeFactory,
        private readonly AltchaTypeProfileRegistry $profiles,
    ) {
    }

    /**
     * Returns a signed challenge as JSON; unknown profiles yield HTTP 400.
     *
     * @param Request $request Current request (`?profile=` selects the difficulty profile)
     *
     * @return JsonResponse Challenge JSON, never cached
     */
    #[Route('/_nowo/altcha/challenge', name: self::ROUTE_NAME, methods: ['GET'])]
    public function __invoke(Request $request): JsonResponse
    {
        $profile = $request->query->getString('profile');
        $profile = $profile !== '' ? $profile : null;

        if ($profile !== null && !$this->profiles->has($profile)) {
            return new JsonResponse(['error' => 'unknown_profile'], Response::HTTP_BAD_REQUEST);
        }

        $response = new JsonResponse($this->challengeFactory->create($profile)->toArray());
        $response->headers->set('Cache-Control', 'no-store, private');

        return $response;
    }
}
