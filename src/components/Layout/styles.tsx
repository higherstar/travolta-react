// Dependencies
import styled from 'styled-components';

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
export const Content = styled.div`
  height: calc(100vh - 92px);
`;
