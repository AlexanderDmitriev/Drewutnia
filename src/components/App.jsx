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
import { useTranslation } from 'react-i18next';
import './utils/i18next';
import { useSelector } from 'react-redux';

export const App = () => {
  const [lastGallery, setLastGallery] = useState(
    JSON.parse(window.localStorage.getItem('lastGallery')) ?? null
  );
  useEffect(() => {
    window.localStorage.setItem('lastGallery', JSON.stringify(lastGallery));
  }, [lastGallery]);

  const { t, i18n } = useTranslation();
  const getLocale = state => state.locale.currentLocale;
  const currentLocale = useSelector(getLocale);
  useEffect(() => {
    window.localStorage.setItem('locale', JSON.stringify(currentLocale));
  }, [currentLocale]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header t={t} i18n={i18n} />
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
