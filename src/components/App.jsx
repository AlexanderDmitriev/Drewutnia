import Header from './Head/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Container } from './shared/Container';
import {Sidebar} from './Sidebar';
import {Footer} from './Footer';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Sidebar/>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};
