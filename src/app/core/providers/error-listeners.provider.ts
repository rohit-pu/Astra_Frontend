import {
  EnvironmentProviders,
  ErrorHandler,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer
} from '@angular/core';

/**
 * Captures global unhandled errors and unhandled promise rejections from the window object
 * and forwards them to Angular's configured ErrorHandler.
 */
export function provideBrowserGlobalErrorListeners(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideEnvironmentInitializer(() => {
      const errorHandler = inject(ErrorHandler);
      if (typeof window !== 'undefined') {
        window.addEventListener('error', (event) => {
          errorHandler.handleError(event.error || event.message);
        });
        window.addEventListener('unhandledrejection', (event) => {
          errorHandler.handleError(event.reason);
        });
      }
    })
  ]);
}

