import React, { FC } from 'react';
import { Box, Chip, Divider } from '@mui/material';

import * as S from './styles';
import { Typography } from '../Common';

export const HotelCard: FC = () => {
  return (
    <S.HotelCardWrapper>
      <S.HotelImage src="" sx={{ mr: 16 }}/>

      <Box>
        <Typography variant="h2">Hotel Name</Typography>
        <Typography variant="h3">Berlin, Germany</Typography>
        <S.Price>1200.00$</S.Price>
        <Chip label="Available" color="success" />
      </Box>

      <Divider />
    </S.HotelCardWrapper>
  )
};