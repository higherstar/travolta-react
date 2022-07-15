// Dependencies
import styled from 'styled-components';
import { Box } from '@mui/material';

// Export styled components
export const SearchBarWrapper = styled(Box)`
  padding: 12px;
  border-radius: 12px;
  background: ${(props) => props.theme.palette.lightCyan};
  display: flex;
`;
