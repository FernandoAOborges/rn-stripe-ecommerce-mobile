import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { withSuspenseScreen } from '@/utils';

import * as Views from './app.views';

const BottomTab = createBottomTabNavigator({
  screens: {
    Home: withSuspenseScreen(Views.HomeView),
  },
});

export default BottomTab;
