import dish from '../images/dish.png';
import { LabelLarge, LabelSmall } from './shared';
import styled from '@emotion/styled';

const Item = styled.li`
  list-style: none;
  display: flex;
  :not(:last-child) {
    padding-bottom: 15px;
  }
`;

const Image = styled.img`
  width: 33%;
`;

export const DishesItem = () => {
  return (
    <Item>
      <Image src={dish} alt="" />
      <div>
        <LabelLarge>Name</LabelLarge>
        <LabelSmall>About</LabelSmall>
        <LabelLarge>
          <span>Price:</span> 10 zł
        </LabelLarge>
      </div>
    </Item>
  );
};
