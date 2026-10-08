/**
 * Stimulus controller for the Altcha Type widget.
 *
 * Register: application.register('altcha-type', AltchaTypeController);
 */

import { Controller } from '@hotwired/stimulus';
import { destroyAltchaContainer, initAltchaContainer } from '../src/altcha-type-lib';
import { getLogger, setAltchaTypeDebug } from '../src/logger';

import 'altcha';

export default class AltchaTypeController extends Controller {
  static targets = ['input', 'widget'];

  static values = {
    debug: Boolean,
    challengeUrl: String,
  };

  declare debugValue: boolean;
  declare challengeUrlValue: string;

  connect(): void {
    setAltchaTypeDebug(this.debugValue === true);
    getLogger().debug('altcha-type (controller): connect', {
      isHTMLElement: this.element instanceof HTMLElement,
      challengeUrl: this.challengeUrlValue,
    });
    if (this.element instanceof HTMLElement) {
      const ok = initAltchaContainer(this.element);
      getLogger().debug(ok ? 'altcha-type (controller): initialized' : 'altcha-type (controller): init skipped');
    }
  }

  disconnect(): void {
    if (this.element instanceof HTMLElement) {
      destroyAltchaContainer(this.element);
    }
  }
}
