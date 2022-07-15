// Dependencies
import React, { FC, useEffect } from 'react';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar, Typography, HotelCard } from '../../components';
import { searchHotels, updateSearchParams } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ISearchParam } from '../../interfaces';
import * as S from './styles';

// Export Hotel list page
export const HotelList: FC = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector(
    ({ hotelReducer: { searchParams } }: RootState) => searchParams
  );

  useEffect(() => {
    dispatch(searchHotels(searchParams));
  }, [searchParams]);

  const handleSearch = async (params: ISearchParam) => {
    dispatch(updateSearchParams(params));
  }

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
