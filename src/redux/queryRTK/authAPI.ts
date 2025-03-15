/* eslint-disable object-curly-newline */
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';
import { loggerDebug } from '@/services/monitoring/logger';
import { callFirebaseFunction } from '@/utils';

import type {
  IRegisterRequestProps,
  IRegisterResponseProps,
  FirebaseFunctionsTypes,
} from './typesRTK/authAPITypes';

const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterResponseProps, IRegisterRequestProps>({
      async queryFn({ email, password }) {
        try {
          const result = await callFirebaseFunction<IRegisterResponseProps>('registerUser', {
            email,
            password,
          });
          return { data: result };
        } catch (error) {
          loggerDebug('registerUser', error);

          const firebaseError = error as FirebaseFunctionsTypes.HttpsError;

          return {
            error: {
              status: firebaseError.code || 'UNKNOWN_ERROR',
              message: firebaseError.message || 'An unknown error occurred',
              details: firebaseError.details || null,
            },
          };
        }
      },
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
        } catch (error) {
          logErrorToCrashlytics(error, 'registerUser');
        }
      },
    }),
  }),

  // end
});

export const { useRegisterUserMutation } = authAPI;

export default authAPI;
