import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Container, ContentContainer } from './shared';
import { Footer } from './widgets';
import { useTranslation } from 'react-i18next';
import './utils/i18next';
//import { useSelector } from 'react-redux';
import CircleLoader from 'react-spinners/ClipLoader';

const Header = lazy(() => import('./widgets/Header/Header'));
const Sidebar = lazy(() => import('./widgets/Sidebar/Sidebar'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const ReservePage = lazy(() => import('../pages/Reservation/ReservePage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const GalleryDetailsPage = lazy(() => import('../pages/GalleryDetailsPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const FeedbacksPage = lazy(() => import('../pages/FeedbacksPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const [lastGallery, setLastGallery] = useState(
    JSON.parse(window.localStorage.getItem('lastGallery')) ?? null
  );
  useEffect(() => {
    window.localStorage.setItem('lastGallery', JSON.stringify(lastGallery));
  }, [lastGallery]);

  const { t, i18n } = useTranslation();
  /* const getLocale = state => state.locale.currentLocale;
  const currentLocale = useSelector(getLocale); */

  /* useEffect(() => {
    window.localStorage.setItem('locale', JSON.stringify(currentLocale.value));
  }, [currentLocale]); */

  const override = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense
        fallback={
          <CircleLoader
            color={'#fff'}
            loading={true}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
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
      </Suspense>
    </ThemeProvider>
  );
};
