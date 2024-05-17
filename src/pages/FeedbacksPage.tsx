import styled from '@emotion/styled';
import { feedbacks } from '../components/testData/feedbacks';
import {FeedbackItem} from '../components/shared/FeedbackItem';

const Item = styled.ul`
  display: block;
  margin: 0 auto;
  :not(:last-child) {
    padding-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const FeedbacksPage = () => {
  return (
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
  );
};
