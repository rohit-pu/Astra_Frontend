import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { providePrimeNG, PrimeNGConfigType } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { routes } from './app.routes';
import { httpInterceptor } from './core/interceptors/http.interceptor';
import { provideBrowserGlobalErrorListeners } from './core/providers/error-listeners.provider';
import { environment } from '../environments/environment';

/**
 * Extended PrimeNG configuration interface supporting optional commercial license key.
 */
interface PrimeNGConfigWithLicense extends PrimeNGConfigType {
  license?: string;
}

const primeNgConfig: PrimeNGConfigWithLicense = {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false
    }
  },
  ...(environment.primeNgLicenseKey ? { license: environment.primeNgLicenseKey } : {})
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    ),
    provideHttpClient(withInterceptors([httpInterceptor])),
    providePrimeNG(primeNgConfig),
    MessageService
  ]
};
