import { Keyboard } from 'react-native';

jest.spyOn(Keyboard, 'dismiss').mockImplementation(() => {});

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios',
  select: jest.fn().mockImplementation((spec) => spec.ios),
}));
