// Dependencies
import styled from 'styled-components';
import { Stack } from '@mui/material';

import { Button, Input, Select } from '../Common';

// Export styled components
export const SearchBarWrapper = styled(Stack)<{ fullWidth?: boolean }>`
  width: ${(props) => props.fullWidth ? '100%' : 'calc(100% - 64px)'};
  padding: ${(props) => props.fullWidth ? '16px 32px' : '16px'};
  border-radius: ${(props) => props.fullWidth ? '0' : '12px'};
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