import React from 'react';
import {
  ListContainer,
  Header,
  Title,
  DeleteAll,
  RecentList,
  EmptyList,
  TextWrapper,
  Icon,
  Keyword,
  RemoveBtn,
} from './Search.elements';

function History({ keywords }) {
  if (keywords.length === 0) {
    return (
      <ListContainer>
        <EmptyList>최근 검색어 내역이 없습니다.</EmptyList>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <Header>
        <Title>최근 검색어</Title>
        <DeleteAll>Clear</DeleteAll>
      </Header>
      <RecentList>
        {keywords.map(({ id, text }) => {
          return (
            <TextWrapper key={id}>
              <Icon />
              <Keyword>{text}</Keyword>
              <RemoveBtn>삭제</RemoveBtn>
            </TextWrapper>
          );
        })}
      </RecentList>
    </ListContainer>
  );
}

export default History;