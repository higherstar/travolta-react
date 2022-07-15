// Dependencies
import styled from 'styled-components';
import { Typography } from '../../components';

// Export styled components
export const Home = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroLabel = styled(Typography)`
  margin-bottom: 24px !important;
  font-size: 64px !important;
  font-weight: 700 !important;
  color: ${(props) => props.theme.palette.pink}
`;