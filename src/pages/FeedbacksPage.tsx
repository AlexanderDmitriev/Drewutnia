import styled from '@emotion/styled';
import { feedbacks } from '../components/testData/feedbacks';
import {FeedbackItem} from '../components/shared/FeedbackItem';
import {HiddenTitle} from '../components/shared';

const Item = styled.ul`
  display: block;
  margin: 0 auto;
  :not(:last-child) {
    padding-bottom: 15px;
  }
`;

export const FeedbacksPage = () => {
  return (
    <section>
      <HiddenTitle>Feedback</HiddenTitle>
      <Item>
      {feedbacks.map(feed => (
        <FeedbackItem
          key={feed.id}
          name={feed.name}
          date={feed.date}
          about={feed.about}
          rating={feed.rating}
        />
      ))}
      {/* <FeedbackItem loading /> */}
    </Item>
    </section>
    
  );
};
