// Dependencies
import styled from 'styled-components';
import { Stack } from '@mui/material';

import { Button, Input, Select } from '../Common';

// Export styled components
export const SearchBarWrapper = styled(Stack)<{ fullWidth?: boolean }>`
  position: ${(props) => props.fullWidth ? 'fixed' : 'static'};
  top: ${(props) => props.fullWidth ? '92px' : '0'};
  width: ${(props) => props.fullWidth ? '100%' : 'calc(100% - 64px)'};
  padding: ${(props) => props.fullWidth ? '16px 32px' : '16px'};
  border-radius: ${(props) => props.fullWidth ? '0' : '12px'};
  border-bottom: ${(props) => props.fullWidth ? `1px solid` : 'none'};
  border-bottom-color: ${(props) => props.theme.palette.cyan};
  background: ${(props) => props.theme.palette.lightCyan};
  display: flex;
  justify-content: center;
  z-index: 1;
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