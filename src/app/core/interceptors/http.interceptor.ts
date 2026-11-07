import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Ensures all HTTP requests include credentials (cookies)
 * for session-based authentication.
 */
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    withCredentials: true
  });
  return next(authReq);
};

