import React, { FC } from 'react';
import { Box, Chip, Divider } from '@mui/material';

import { Typography } from '../Common';
import { IHotel } from '../../interfaces';
import * as S from './styles';

interface IHotelCardProps {
  data: IHotel;
}

export const HotelCard: FC<IHotelCardProps> = ({ data }) => {
  return (
    <S.HotelCardWrapper>
      <S.HotelImage src="" sx={{ mr: 16 }}/>

      <Box>
        <Typography variant="h2">{data.name}</Typography>
        <Typography variant="h3">{`${data.city}, ${data.country}`}</Typography>
        <S.Price>{`${data.price}$`}</S.Price>
        <Chip label="Available" color="success" />
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box>
        <Typography variant="h3">Intro</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </Box>
    </S.HotelCardWrapper>
  )
};