import React from 'react';

export const WalkthroughView = React.lazy(() => import('@/views/auth/walkthrough/WalkthroughView'));
export const LoginView = React.lazy(() => import('@/views/auth/login/LoginView'));
export const ForgotPasswordView = React.lazy(
  () => import('@/views/auth/forgotPassword/ForgotPasswordView'),
);
export const RegisterView = React.lazy(() => import('@/views/auth/register/RegisterView'));
