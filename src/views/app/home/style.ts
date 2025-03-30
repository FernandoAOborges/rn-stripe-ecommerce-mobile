import styled from 'styled-components/native';

export const Center = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FlatList = styled.FlatList.attrs(({ theme }) => ({
  numColumns: 2,
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  columnWrapperStyle: {
    justifyContent: 'center',
  },
}))``;
