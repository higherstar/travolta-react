// Dependencies
import styled from 'styled-components';

// Export styled components
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 92px;
  border-bottom: 1px solid ${(props) => props.theme.palette.cyan};
  background: white;
  z-index: 1;
`;

// @ts-ignore
export const Content = styled.div``;
