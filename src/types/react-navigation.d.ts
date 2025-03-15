import type { TAuthenticatedRoutesParamList } from '@/navigation/AuthenticatedRoutes';
import type { TUnauthenticatedRoutesParamList } from '@/navigation/UnauthenticatedRoutes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends TUnauthenticatedRoutesParamList,
        TAuthenticatedRoutesParamList {}
  }
}
