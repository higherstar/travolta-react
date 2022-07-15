// Dependencies
import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Export styled components
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 92px;
  border-bottom: 1px solid ${(props) => props.theme.palette.cyan}
`;

// @ts-ignore
export const Content = styled(PerfectScrollbar)`
  height: calc(100vh - 92px);
  padding: 36px 64px;
`;
