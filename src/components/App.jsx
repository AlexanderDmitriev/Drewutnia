import Header from './Head/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Container } from './shared/Container';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
