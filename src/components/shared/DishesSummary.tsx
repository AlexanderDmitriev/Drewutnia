import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DishesItem } from './DishesItem';
import { IDishesArray } from '../Interfaces/IDishesType';
import styled from '@emotion/styled';

const MenuList = styled(Accordion)`
  margin-top: 100px;
  @media screen and (min-width: 468px) {
    margin-top: 150px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 170px;
  }
  @media screen and (min-width: 968px) {
    margin-top: 210px;
  }
  @media screen and (min-width: 1400px) {
    margin-top: 260px;
  }
`;

export const DishesSummary = (props: any) => {
  const { dishesList }: IDishesArray = props;
  //const {title} = props;
  return (
    <MenuList>
      <AccordionDetails>
        <ul>
          {dishesList.map(dish => (
            <DishesItem
              key={dish.id}
              image={dish.image}
              name={dish.name}
              about={dish.about}
              price={dish.price}
            />
          ))}
        </ul>
      </AccordionDetails>
    </MenuList>
  );
};
