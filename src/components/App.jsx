import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Container, ContentContainer } from './shared';
import { Header, Sidebar, Footer } from './widgets';
import {
  HomePage,
  MenuPage,
  EventsPage,
  ReservePage,
  FeedbacksPage,
  GalleryPage,
  GalleryDetailsPage,
  ContactsPage,
  NotFoundPage,
} from '../pages';

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
        <main>
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
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
