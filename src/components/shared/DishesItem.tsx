import { LabelLarge, LabelSmall,TextContainer } from '.';
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

const Content = styled.div`
  width: 65%;
  padding-left: 10px;
`;

export const DishesItem = ({ image, name, about, price }: IDishesType) => {
  return (
    <Item>
      <Image src={image} alt="" />
      <Content>
        <TextContainer>
        <LabelLarge>{name}</LabelLarge>
        <LabelSmall>{about}</LabelSmall>
        <LabelLarge>
          <span>Price:</span> {price}
        </LabelLarge>
        </TextContainer>
        
      </Content>
    </Item>
  );
};
