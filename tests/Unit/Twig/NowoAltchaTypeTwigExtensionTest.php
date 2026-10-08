<?php

declare(strict_types=1);

namespace Nowo\AltchaTypeBundle\Tests\Unit\Twig;

use Nowo\AltchaTypeBundle\Twig\NowoAltchaTypeTwigExtension;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;
use Twig\TwigFunction;

#[CoversClass(NowoAltchaTypeTwigExtension::class)]
final class NowoAltchaTypeTwigExtensionTest extends TestCase
{
    private NowoAltchaTypeTwigExtension $extension;

    protected function setUp(): void
    {
        $this->extension = new NowoAltchaTypeTwigExtension();
    }

    #[Test]
    public function assetPathReturnsRelativeFilenameForValidFilename(): void
    {
        self::assertSame('altcha-type.js', $this->extension->assetPath('altcha-type.js'));
        self::assertSame('css/theme.css', $this->extension->assetPath('css/theme.css'));
    }

    #[Test]
    public function getFunctionsContainsExpectedTwigFunctions(): void
    {
        $functions = $this->extension->getFunctions();

        self::assertCount(2, $functions);
        self::assertInstanceOf(TwigFunction::class, $functions[0]);
        self::assertSame('nowo_altcha_type_asset_path', $functions[0]->getName());
        self::assertSame('nowo_altcha_type_asset_package', $functions[1]->getName());
    }

    #[Test]
    public function assetPackageReturnsConfigurationAlias(): void
    {
        self::assertSame('nowo_altcha_type', $this->extension->assetPackage());
    }

    #[Test]
    public function assetPathReturnsDefaultForEmptyFilename(): void
    {
        self::assertSame('altcha-type.js', $this->extension->assetPath(''));
    }

    #[Test]
    public function assetPathReturnsDefaultForPathTraversal(): void
    {
        self::assertSame('altcha-type.js', $this->extension->assetPath('../etc/passwd'));
        self::assertSame('altcha-type.js', $this->extension->assetPath('foo/../../bar'));
    }

    #[Test]
    public function assetPathReturnsDefaultForUnsafeCharacters(): void
    {
        self::assertSame('altcha-type.js', $this->extension->assetPath('file;.js'));
    }

    #[Test]
    public function assetPathTrimsLeadingSlash(): void
    {
        self::assertSame('altcha-type.js', $this->extension->assetPath('/altcha-type.js'));
    }
}
