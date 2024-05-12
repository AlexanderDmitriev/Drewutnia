import { LabelLarge, LabelSmall } from '.';
import styled from '@emotion/styled';
import { IDishesType } from '../Interfaces/IDishesType';

const Item = styled.li`
  list-style: none;
  display: flex;
  :not(:last-child) {
    padding-bottom: 15px;
  }
`;

const Image = styled.img`
  width: 33%;
  height: 33%;
`;

export const DishesItem = ({ image, name, about, price }: IDishesType) => {
  return (
    <Item>
      <Image src={image} alt="" />
      <div>
        <LabelLarge>{name}</LabelLarge>
        <LabelSmall>{about}</LabelSmall>
        <LabelLarge>
          <span>Price:</span> {price}
        </LabelLarge>
      </div>
    </Item>
  );
};
