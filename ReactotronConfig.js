/* eslint-disable import/no-extraneous-dependencies */
import Reactotron, { networking, trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .use(reactotronRedux())
  .use(networking())
  .use(trackGlobalErrors())

  .connect();

export default reactotron;
