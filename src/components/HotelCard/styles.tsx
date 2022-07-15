// Dependencies
import styled from 'styled-components';
import { Avatar, Card } from '@mui/material';

import { Typography } from '../Common';

// Export styled components
export const HotelCardWrapper = styled(Card)`
  padding: 16px;
  display: flex;
`;

export const HotelImage = styled(Avatar)`
  height: 200px !important;
  width: 200px !important;
`

export const Price = styled(Typography)`
  font-size: 54px !important;
  line-height: 80px !important;
  font-weight: 700 !important;
  color: ${(props) => props.theme.palette.success.main};
`