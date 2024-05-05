import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Route, Routes } from 'react-router-dom';
import { Container, ContentContainer } from './shared';
import Header from './Head/Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { HomePage } from '../pages/HomePage';
import {ContactsPage} from '../pages/ContactsPage';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
         <Header />
          <Sidebar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </ContentContainer>
        <Footer />  
      </Container>
    </ThemeProvider>
  );
};
