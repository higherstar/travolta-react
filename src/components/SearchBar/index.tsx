// Dependencies
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { MenuItem, SelectChangeEvent, Stack } from '@mui/material';
import { useSelector } from 'react-redux';

import { Icon, Input, Typography } from '../Common';
import { ISearchParam } from '../../interfaces';
import { RootState } from '../../redux/reducers';
import * as S from './styles';

interface ISearchBar {
  fullWidth?: boolean;
  onSearch: (searchParams: ISearchParam) => void;
}

// Export Searchbar component
export const SearchBar: FC<ISearchBar> = ({ fullWidth, onSearch }) => {
  const searchParams = useSelector(
    ({ hotelReducer: { searchParams } }: RootState) => searchParams
  );

  const [destination, setDestination] = useState<string>('');
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const [roomType, setRoomType] = useState<string>('');

  useEffect(() => {
    setDestination(searchParams.destination || '');
    setFromDate(searchParams.fromDate || '');
    setToDate(searchParams.toDate || '');
    setRoomType(searchParams.roomType || '');
  }, []);

  const handleChangeDestination = (e: ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  }

  const handleChangeFromDate = (e: ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
  }

  const handleChangeToDate = (e: ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
  }

  const handleChangeRoom = (e: SelectChangeEvent<any>) => {
    setRoomType(e.target.value);
  }

  const handleSearchClick = () => {
    onSearch({
      destination,
      fromDate,
      toDate,
      roomType,
    })
  }

  return (
    <S.SearchBarWrapper direction="row" spacing={16} fullWidth={fullWidth}>
      <S.DestinationInput
        endAdornment={<Icon name="search" size={23} />}
        placeholder="What is your destination?"
        value={destination}
        onChange={handleChangeDestination}
      />
      <Stack direction="row" alignItems="center" spacing={4}>
        <Input value={fromDate} size="large" type="date" onChange={handleChangeFromDate} />
        <Typography>-</Typography>
        <Input value={toDate} size="large" type="date" onChange={handleChangeToDate} />
      </Stack>
      <S.RoomSelect value="1" onChange={handleChangeRoom}>
        <MenuItem value="1">1 Adults - 1 room</MenuItem>
      </S.RoomSelect>
      <S.SearchButton size="large" color="primary" onClick={handleSearchClick}>
        Search
      </S.SearchButton>
    </S.SearchBarWrapper>
  )
};