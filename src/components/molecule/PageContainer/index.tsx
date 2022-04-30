import { Container, Stack } from '@mui/material';
import { env } from 'config';
import { ReactElement } from 'react';
import { Header } from '../Header';
import ScrollToTop from '../Scroll';
import { classes } from './styles';

interface Props {
    children: ReactElement,
    showBackBtn?: boolean;
}

export const PageContainer = ({ children, showBackBtn }: Props) => (
  <Stack sx={{
    ...classes.container,
  }}
  >
    <Header name={`${env.ARTIST}`} showBackBtn={showBackBtn} />
    <Stack
      sx={{
        ...classes.childrenWrapper,
      }}
    >
      <ScrollToTop>
        <Container maxWidth="xl">
          {children}
        </Container>
      </ScrollToTop>
    </Stack>
  </Stack>

);
