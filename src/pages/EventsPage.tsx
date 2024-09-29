import { LabelSmall, HiddenTitle, TextContainer } from '../components/shared';

const EventsPage = () => {
  return (
    <section>
      <HiddenTitle>Events</HiddenTitle>
      <TextContainer>
        <LabelSmall>
          Obserwuj nasz profil na{' '}
          <a
            href="https://www.facebook.com/Pub.Drewutnia"
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebooku
          </a>{' '}
          lub w{' '}
          <a
            href="https://www.instagram.com/explore/locations/747190841/pub-drewutnia/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagramie,
          </a>{' '}
          aby być zawsze na bieżąco.
        </LabelSmall>
      </TextContainer>
    </section>
  );
};

export default EventsPage;
