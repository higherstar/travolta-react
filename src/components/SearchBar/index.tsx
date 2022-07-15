// Dependencies
import React, { FC } from 'react';
import { MenuItem } from '@mui/material';

import { Button, Icon, Input, Select } from '../Common';
import * as S from './styles';

// Export Searchbar component
export const SearchBar: FC = () => {
  return (
    <S.SearchBarWrapper direction="row" spacing={12}>
      <S.DestinationInput
        endAdornment={<Icon name="search" size={23} />}
        placeholder="What is your destination?"
      />
      <Input size="large" type="date" />
      <Input size="large" type="date" />
      <Select value="2 Adults - 1 room">
        <MenuItem value="1 Adults - 1 room">1 Adults - 1 room</MenuItem>
        <MenuItem value="2 Adults - 1 room">2 Adults - 1 room</MenuItem>
        <MenuItem value="3 Adults - 1 room">3 Adults - 1 room</MenuItem>
      </Select>
      <Button size="large" color="primary">Search</Button>
    </S.SearchBarWrapper>
  )
};