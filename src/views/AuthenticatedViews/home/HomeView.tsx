import React from 'react';

import { Button, Text, View } from '@/components/atoms';
import { firebaseLogout } from '@/utils';

const HomeView = () => (
  <View>
    <Text>HomeView</Text>
    <Button onPress={firebaseLogout}>
      <Text>Logout</Text>
    </Button>
  </View>
);

export default HomeView;
