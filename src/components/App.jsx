import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Route, Routes } from 'react-router-dom';
import { Container, ContentContainer } from './shared';
import { Header, Sidebar, Footer } from './widgets';
import { ContactsPage } from '../pages/ContactsPage';
import { GalleryPage } from '../pages/GalleryPage';
import {
  HomePage,
  MenuPage,
  EventsPage,
  ReservePage,
  FeedbacksPage,
  GalleryDetailsPage,
  NotFoundPage,
} from '../pages';
import { useState, useEffect } from 'react';

export const App = () => {
  const [lastGallery, setLastGallery] = useState(
    JSON.parse(window.localStorage.getItem('lastGallery')) ?? null
  );
  useEffect(() => {
    window.localStorage.setItem('lastGallery', JSON.stringify(lastGallery));
  }, [lastGallery]);

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
            <Route
              path="/gallery"
              element={<GalleryPage setLastGallery={setLastGallery} />}
            />
            <Route
              path="/gallery/:galleryId"
              element={<GalleryDetailsPage lastGallery={lastGallery} />}
            />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/feedback" element={<FeedbacksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContentContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
