import { EventItem, EventItemAboutContainer,EventImage } from './Event.styled';
import {  LabelLarge, LabelSmall } from '../../shared';

export const Event = ({ image, name, date, about }) => {
  return (
    <>
      <EventItem>
        <EventImage src={image} alt="event" />
        <EventItemAboutContainer>
          <LabelLarge>
            {name}{' '}
            <span>
              <LabelSmall>{date}</LabelSmall>
            </span>
          </LabelLarge>
          <LabelSmall>{about}</LabelSmall>
        </EventItemAboutContainer>
      </EventItem>
    </>
  );
};
