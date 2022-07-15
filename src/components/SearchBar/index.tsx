// Dependencies
import React, { FC } from 'react';

import { Button, Input } from '../Common';
import * as S from './styles';

// Export Searchbar component
export const SearchBar: FC = () => {
  return (
    <S.SearchBarWrapper direction="row" spacing={12}>
      <S.DestinationInput placeholder="What is your destination?" />
      <Input size="large" type="date" />
      <Input size="large" type="date" />
      <Button size="large" color="primary">Search</Button>
    </S.SearchBarWrapper>
  )
};