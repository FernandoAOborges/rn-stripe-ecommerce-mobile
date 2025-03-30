import type { TAuthenticatedRoutesParamList } from '@/navigation/app/app.types';
import type { TUnauthenticatedRoutesParamList } from '@/navigation/auth/auth.types';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends TUnauthenticatedRoutesParamList,
        TAuthenticatedRoutesParamList {}
  }
}
