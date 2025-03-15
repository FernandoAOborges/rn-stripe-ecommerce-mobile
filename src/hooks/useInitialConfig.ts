import { getApp } from '@react-native-firebase/app';
import { getAuth, FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState, useMemo } from 'react';

import logoutUser from '@/redux/actions/logoutUser';
import { setUser } from '@/redux/slices/AuthenticationSlice';
import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';

import useAppDispatch from './useAppDispatch';

const useInitialConfig = () => {
  const app = getApp();
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth.currentUser);
  const [loading, setLoading] = useState<boolean>(!auth.currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(async (user: FirebaseAuthTypes.User | null) => {
      setIsAuthenticated(!!user);

      if (!user) {
        dispatch(logoutUser());
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        dispatch(
          setUser({
            email: user.email as string,
            uid: user.uid,
          }),
        );
      } catch (error) {
        logErrorToCrashlytics(error, 'useInitialConfig');
      } finally {
        setLoading(false);
      }
    });

    return subscriber;
  }, [auth, dispatch]);

  return useMemo(() => ({ isAuthenticated, loading }), [isAuthenticated, loading]);
};

export default useInitialConfig;
