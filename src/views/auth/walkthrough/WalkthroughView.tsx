import React, { useCallback } from 'react';

import { MainEmptyCard } from '@/components/molecules';

import CardWalkthrough from './components/CardWalkthrough';
import NextButton from './components/NextButton';
import Paginator from './components/Paginator';
import useWalkthroughScroll from './hooks/useWalkthroughScroll';
import { Container, StyledFlatList, WrapperButtonAndPaginator } from './styles';
import type { IWelcomeContents, ListRenderItem } from './types';

const WalkthroughView = () => {
  const { WalkthroughData, handleScroll, scrollTo, percentage, flatlistRef, scrollX } =
    useWalkthroughScroll();

  const keyExtractor = useCallback((item: IWelcomeContents) => item.id.toString(), []);

  const renderItem: ListRenderItem<IWelcomeContents> = useCallback(
    ({ item }) => <CardWalkthrough item={item} />,
    [],
  );

  return (
    <Container>
      <StyledFlatList
        ref={flatlistRef}
        data={WalkthroughData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onScroll={handleScroll}
        ListEmptyComponent={<MainEmptyCard />}
      />

      <WrapperButtonAndPaginator>
        <NextButton percentage={percentage} scrollTo={scrollTo} />
        <Paginator images={WalkthroughData} scrollX={scrollX} />
      </WrapperButtonAndPaginator>
    </Container>
  );
};
export default WalkthroughView;
