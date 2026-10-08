<?php

declare(strict_types=1);

use Nowo\AltchaTypeBundle\NowoAltchaTypeBundle;
use Nowo\HotReloadBundle\NowoHotReloadBundle;
use Nowo\TwigInspectorBundle\NowoTwigInspectorBundle;
use Pentatrion\ViteBundle\PentatrionViteBundle;
use Symfony\Bundle\DebugBundle\DebugBundle;
use Symfony\Bundle\FrameworkBundle\FrameworkBundle;
use Symfony\Bundle\TwigBundle\TwigBundle;
use Symfony\Bundle\WebProfilerBundle\WebProfilerBundle;
use Symfony\UX\StimulusBundle\StimulusBundle;
use Twig\Extra\TwigExtraBundle\TwigExtraBundle;

return [
    FrameworkBundle::class         => ['all' => true],
    TwigBundle::class              => ['all' => true],
    PentatrionViteBundle::class    => ['all' => true],
    DebugBundle::class             => ['dev' => true, 'test' => true],
    WebProfilerBundle::class       => ['dev' => true, 'test' => true],
    StimulusBundle::class          => ['all' => true],
    NowoAltchaTypeBundle::class    => ['all' => true],
    NowoHotReloadBundle::class     => ['dev' => true, 'test' => true],
    NowoTwigInspectorBundle::class => ['dev' => true, 'test' => true],
    TwigExtraBundle::class         => ['all' => true],
];
