import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Route, Routes } from 'react-router-dom';
import { Container } from './shared/Container';
import Header from './Head/Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
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
