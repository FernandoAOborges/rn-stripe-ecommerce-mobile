/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  flex-grow: 1;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;
