// Dependencies
import React, { FC } from 'react';

import { Button, Input } from '../Common';
import * as S from './styles';

// Export Searchbar component
export const SearchBar: FC = () => {
  return (
    <S.SearchBarWrapper>
      <Input />
      <Button size="large">Search</Button>
    </S.SearchBarWrapper>
  )
};