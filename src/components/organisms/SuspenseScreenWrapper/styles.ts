import styled from 'styled-components/native';

// eslint-disable-next-line import/prefer-default-export
export const WrapperLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;
