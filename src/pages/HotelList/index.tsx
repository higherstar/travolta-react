// Dependencies
import React, { FC, useEffect } from 'react';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar, Typography, HotelCard } from '../../components';
import { getHotels, updateSearchParams } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ISearchParam } from '../../interfaces';
import * as S from './styles';

// Export Hotel list page
export const HotelList: FC = () => {
  const dispatch = useDispatch();
  const { hotels, searchParams } = useSelector(
    ({ hotelReducer: { hotels, searchParams } }: RootState) => ({
      hotels,
      searchParams,
    })
  );

  useEffect(() => {
    dispatch(getHotels(searchParams));
  }, [searchParams]);

  const handleSearch = async (params: ISearchParam) => {
    dispatch(updateSearchParams(params));
  }

  // Return Hotel list page
  return (
    <S.HotelList>
      <SearchBar onSearch={handleSearch} fullWidth />

      <S.ContentWrapper maxWidth="lg">
        <Typography
          variant="h1"
          color={!!searchParams.destination ? 'primary' : 'secondary'}
        >
          { searchParams.destination || 'No destination' }
        </Typography>
        <Divider />
        {
          hotels.map((hotelData, index) => (
            <HotelCard key={index} data={hotelData} />
          ))
        }
      </S.ContentWrapper>
    </S.HotelList>
  );
};
