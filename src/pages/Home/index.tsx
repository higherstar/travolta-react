// Dependencies
import React, { FC } from 'react';

import { SearchBar, Typography } from '../../components';
import * as S from './styles';

// Export home page
export const Home: FC = () => {
  // Return home page
  return (
    <S.Home>
      <S.IntroLabel>We love to travel as much as you do</S.IntroLabel>
      <Typography>
        We create unbeatable deals you will not get anywhere else - so you can save your money for an unforgettable
        travel experience
      </Typography>

      <SearchBar />
    </S.Home>
  );
};
