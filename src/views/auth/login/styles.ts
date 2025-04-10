import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  keyboardShouldPersistTaps: 'handled',
})`
  flex-grow: 1;
  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
