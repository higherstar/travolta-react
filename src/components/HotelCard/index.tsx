import React, { FC } from 'react';

import * as S from './styles';
import { Typography } from '../Common';

export const HotelCard: FC = () => {
  return (
    <S.HotelCardWrapper>
      <S.HotelImage src="" sx={{ mr: 16 }}/>

      <Typography variant="h3">Hotel Name</Typography>
    </S.HotelCardWrapper>
  )
};