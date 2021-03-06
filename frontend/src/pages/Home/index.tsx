// Dependencies
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SearchBar, Typography } from '../../components';
import { ROUTES } from '../../constants';
import { ISearchParam } from '../../interfaces';
import { updateSearchParams } from '../../redux/actions';
import * as S from './styles';

// Export Home page
export const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (params: ISearchParam) => {
    dispatch(updateSearchParams(params));
    navigate(ROUTES.List);
  }

  // Return Home page
  return (
    <S.Home>
      <S.IntroLabel>We love to travel as much as you do</S.IntroLabel>
      <Typography variant="h6" mb={16} textAlign="center">
        We create unbeatable deals you will not get anywhere else -
        <br />
        so you can save your money for an unforgettable
        travel experience
      </Typography>

      <SearchBar onSearch={handleSearch} />
    </S.Home>
  );
};
