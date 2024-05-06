import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Route, Routes } from 'react-router-dom';
import { Container, ContentContainer } from './shared';
import Header from './Head/Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { HomePage } from '../pages/HomePage';
import {MenuPage} from '../pages/MenuPage';
import {EventsPage} from '../pages/EventsPage';
import {ContactsPage} from '../pages/ContactsPage';
import {GalleryPage} from '../pages/GalleryPage';
import {GalleryDetailsPage} from '../pages/GalleryDetailsPage';
import {ReservePage} from '../pages/ReservePage';

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
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:galleryId" element={<GalleryDetailsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </ContentContainer>
        <Footer />  
      </Container>
    </ThemeProvider>
  );
};
