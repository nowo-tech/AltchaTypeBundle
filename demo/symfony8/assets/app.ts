/**
 * Demo app entry (Pentatrion Vite + TypeScript).
 * Starts Stimulus and registers the bundle's altcha-type controller (use_stimulus: true).
 */
import { Application } from '@hotwired/stimulus';
import AltchaTypeController from '@bundle/controllers/altcha_type_controller.ts';
import '@bundle/css/altcha-type.css';

declare const __ALTCHA_TYPE_BUILD_TIME__: string;

const application = Application.start();
application.register('altcha-type', AltchaTypeController);

if (typeof __ALTCHA_TYPE_BUILD_TIME__ !== 'undefined') {
  document.documentElement.dataset.altchaTypeBuild = __ALTCHA_TYPE_BUILD_TIME__;
}
