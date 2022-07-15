// Dependencies
import { FC } from 'react';

import * as S from './styles';

// Export layout component
export const Layout: FC = ({ children }) => {
  return (
    <S.Layout>
      <S.Header />
      <S.Content maxWidth="xl">{children}</S.Content>
    </S.Layout>
  );
};
