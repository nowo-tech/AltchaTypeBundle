# Release process

This document describes how to cut a new release of AltchaTypeBundle.

Packagist uses the **git tag** (this project does not store a version in `composer.json`).

## Table of contents

- [Pre-release (every release)](#pre-release-every-release)
- [Tag and GitHub Release](#tag-and-github-release)
- [Post-release](#post-release)

## Pre-release (every release)

1. Run full QA: `make release-check` (open PRs, CS, PHPStan, coverage, assets tests, demos).
2. Update [CHANGELOG.md](CHANGELOG.md): move `[Unreleased]` into a new `[X.Y.Z] - YYYY-MM-DD` section and add the version link at the bottom.
3. Update [UPGRADING.md](UPGRADING.md) when the change is user-facing (BC, config, assets, Twig).
4. Do **not** bump a version key in `composer.json` (none is stored).

## Tag and GitHub Release

1. Commit the changelog and related files.
2. Create an annotated tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`.
3. Push the branch and the tag. `.github/workflows/release.yml` creates the GitHub Release from the tag and CHANGELOG.

**From the bundle repo root:**

```bash
git add -A
git commit -m "chore(release): vX.Y.Z"
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main
git push origin vX.Y.Z
```

After the release commit and tag, run `make check-no-cursor-coauthor` again **before** `git push` (REQ-GIT-001). An earlier `release-check` does not cover the release commit itself.

## Post-release

1. Keep an empty `## [Unreleased]` section at the top of CHANGELOG.md for the next cycle.
2. Submit / update the package on [Packagist](https://packagist.org/packages/nowo-tech/altcha-type-bundle) if this is the first tag (`nowo-tech/altcha-type-bundle`).
