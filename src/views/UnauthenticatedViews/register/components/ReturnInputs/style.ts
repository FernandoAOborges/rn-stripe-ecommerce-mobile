import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput as Input } from 'react-native';
import { MainText } from '@/components';

export const Container = styled.View`
  padding: 20px;
  border-radius: 10px;
  gap: 10px;
`;

export const CardInputs = styled.View``;

export const Title = styled(MainText)`
  font-family: ${({ theme }) => theme.fonts.ROBOTO_BOLD};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: 16px;
`;

type TTypeWrapperInputIconProps = {
  error?: boolean | string;
};

export const WrapperInputIcon = styled.View<TTypeWrapperInputIconProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: 0 10px;
  gap: 5px;
  border-width: 1px;
  border: ${({ error, theme }) => (error ? theme.colors.error : theme.colors.border)};
`;

type TTypeIconProps = {
  name?: string;
};

export const IconEmail = styled(MaterialIcons).attrs<TTypeIconProps>({
  name: 'email',
  size: 20,
})`
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const IconLock = styled(Ionicons).attrs<TTypeIconProps>({
  name: 'lock-closed',
  size: 20,
})`
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const IconPassword = styled(Ionicons).attrs({
  size: 20,
})`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.colors.onBackground};
`;

type TTypeTextInputProps = {
  error?: boolean | '';
  ref?: React.RefObject<Input>;
};

export const TextInput = styled.TextInput<TTypeTextInputProps>`
  width: 85%;
  border-radius: 5px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.colors.onBackground};
`;

type TTypeIconCloseProps = {
  right?: number;
  name?: string;
};

export const IconClose = styled(Ionicons).attrs<TTypeIconCloseProps>({
  name: 'close',
  size: 20,
})`
  right: ${({ right }) => right}px;
  color: ${({ theme }) => theme.colors.error};
`;

export const TextError = styled(MainText)`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
  margin: 1px 0 0 1px;
`;
