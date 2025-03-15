import React from 'react';

import WrapperRoutes from '@/navigation/WrapperRoutes';
import '@/locales/config';
import { configureEmulators } from '@/utils';

configureEmulators();

const App = () => <WrapperRoutes />;

export default App;
