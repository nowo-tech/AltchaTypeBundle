# PHP 8.2 for AltchaTypeBundle (Symfony 6/7/8)
FROM php:8.2-cli-alpine

RUN apk add --no-cache \
    git \
    unzip \
    bash \
    libzip-dev \
    icu-dev \
    curl

RUN docker-php-ext-install -j$(nproc) \
    zip \
    intl

# Install pcov from GitHub (pecl.php.net is often unreachable in CI/build sandboxes).
RUN apk add --no-cache $PHPIZE_DEPS \
    && curl -fsSL https://github.com/krakjoe/pcov/archive/refs/tags/v1.0.12.tar.gz -o /tmp/pcov.tgz \
    && mkdir -p /tmp/pcov \
    && tar -xzf /tmp/pcov.tgz -C /tmp/pcov --strip-components=1 \
    && cd /tmp/pcov \
    && phpize \
    && ./configure \
    && make -j$(nproc) \
    && make install \
    && docker-php-ext-enable pcov \
    && apk del $PHPIZE_DEPS \
    && rm -rf /tmp/pcov /tmp/pcov.tgz

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Node + pnpm (TypeScript / Vite / Vitest). Pin matches packageManager in package.json.
RUN apk add --no-cache nodejs npm \
    && npm install -g pnpm@10.15.0 \
    && pnpm --version

RUN git config --global --add safe.directory /app

WORKDIR /app

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="/app/vendor/bin:${PATH}"
