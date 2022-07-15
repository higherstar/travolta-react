// Dependencies
import styled from 'styled-components';
import { Stack } from '@mui/material';

import { Button, Input, Select } from '../Common';

// Export styled components
export const SearchBarWrapper = styled(Stack)`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background: ${(props) => props.theme.palette.lightCyan};
  display: flex;
  justify-content: center;
`;

export const DestinationInput = styled(Input)`
  flex: 1;
`;

export const SearchButton = styled(Button)`
  width: 300px;
`;

export const RoomSelect = styled(Select)`
  width: 300px;
`;