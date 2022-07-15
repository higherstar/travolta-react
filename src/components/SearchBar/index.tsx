// Dependencies
import React, { FC } from 'react';
import { MenuItem } from '@mui/material';

import { Icon, Input } from '../Common';
import * as S from './styles';

interface ISearchBar {
  fullWidth?: boolean;
  onSearch: () => void;
}

// Export Searchbar component
export const SearchBar: FC<ISearchBar> = ({ fullWidth, onSearch }) => {
  return (
    <S.SearchBarWrapper direction="row" spacing={16} fullWidth={fullWidth}>
      <S.DestinationInput
        endAdornment={<Icon name="search" size={23} />}
        placeholder="What is your destination?"
      />
      <Input size="large" type="date" />
      <Input size="large" type="date" />
      <S.RoomSelect value="2 Adults - 1 room">
        <MenuItem value="1 Adults - 1 room">1 Adults - 1 room</MenuItem>
        <MenuItem value="2 Adults - 1 room">2 Adults - 1 room</MenuItem>
        <MenuItem value="3 Adults - 1 room">3 Adults - 1 room</MenuItem>
      </S.RoomSelect>
      <S.SearchButton size="large" color="primary" onClick={onSearch}>
        Search
      </S.SearchButton>
    </S.SearchBarWrapper>
  )
};