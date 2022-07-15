// Dependencies
import styled from 'styled-components';
import { Box, Stack } from '@mui/material';

import { Input } from '../Common';

// Export styled components
export const SearchBarWrapper = styled(Stack)`
  padding: 12px;
  border-radius: 12px;
  background: ${(props) => props.theme.palette.lightCyan};
  display: flex;
`;

export const DestinationInput = styled(Input)`
  width: 300px !important;
`