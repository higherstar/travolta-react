// Dependencies
import React, { FC, useEffect } from 'react';
import { Box, CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { SearchBar, Typography, HotelCard } from '../../components';
import { getHotels, updateSearchParams } from '../../redux/actions';
import { RootState } from '../../redux/reducers';
import { ISearchParam } from '../../interfaces';
import * as S from './styles';

// Export Hotel list page
export const HotelList: FC = () => {
  const dispatch = useDispatch();
  const { hotels, searchParams, loading } = useSelector(
    ({ hotelReducer: { hotels, searchParams, loading } }: RootState) => ({
      hotels,
      searchParams,
      loading,
    })
  );

  useEffect(() => {
    dispatch(getHotels(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          loading && (
            <Box width="100%" height={100} display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          )
        }
        {
          !loading && hotels && hotels.map((hotelData, index) => (
            <HotelCard key={index} data={hotelData} />
          ))
        }
      </S.ContentWrapper>
    </S.HotelList>
  );
};
