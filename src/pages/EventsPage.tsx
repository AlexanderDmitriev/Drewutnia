import { LabelSmall, HiddenTitle, TextContainer } from '../components/shared';
import { Event } from '../components/entities';
import { events } from '../components/testData/events';

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
        <ul>
          {events.map(event => (
            <Event
              key={event.id}
              image={event.image}
              name={event.name}
              date={event.date}
              about={event.about}
            />
          ))}
        </ul>
      </TextContainer>
    </section>
  );
};

export default EventsPage;
