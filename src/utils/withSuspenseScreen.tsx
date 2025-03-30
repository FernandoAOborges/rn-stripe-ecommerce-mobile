/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { ComponentType, LazyExoticComponent, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { MainLoading } from '@/components/molecules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

const withSuspenseScreen =
  (
    Component: LazyExoticComponent<ComponentType<any>>,
    fallback: ReactNode = (
      <View style={styles.container}>
        <MainLoading title="Carregando..." />
      </View>
    ),
  ) =>
  (props: any) => (
    <React.Suspense fallback={fallback}>
      <Component {...props} />
    </React.Suspense>
  );

export default withSuspenseScreen;
