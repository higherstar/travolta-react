// Dependencies
import React, { FC } from 'react';
import { Divider } from '@mui/material';

import { SearchBar, Typography, HotelCard } from '../../components';
import * as S from './styles';

// Export Hotel list page
export const HotelList: FC = () => {
  const handleSearch = () => {}

  // Return Hotel list page
  return (
    <S.HotelList>
      <SearchBar onSearch={handleSearch} fullWidth />

      <S.ContentWrapper maxWidth="lg">
        <Typography variant="h1">Berlin, Germany</Typography>
        <Divider />

        <HotelCard />
      </S.ContentWrapper>
    </S.HotelList>
  );
};
