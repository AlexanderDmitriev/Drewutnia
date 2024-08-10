import Accordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DishesItem } from './DishesItem';
import {IDishesArray} from '../Interfaces/IDishesType';

export const DishesSummary = (props:any ) => {
    const {dishesList}:IDishesArray = props;
    //const {title} = props;
  return (
    <Accordion>
      {/* <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary> */}

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
    </Accordion>
  );
};
