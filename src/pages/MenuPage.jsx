import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DishesItem } from '../components/DishesItem';
import {
  dishesAlcochol,
  dishesAlcocholless,
  dishesSomethingToEat,
  dishesSneck,
  dishesOthers,
} from '../components/dishes';

export const MenuPage = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Napoje alkoholowe
        </AccordionSummary>

        <AccordionDetails>
          <ul>
            {dishesAlcochol.map(dish => (
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Napoje bezalkoholowe
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {dishesAlcocholless.map(dish => (
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Dania gotowe
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {dishesSomethingToEat.map(dish => (
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Sneki
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {dishesSneck.map(dish => (
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Różne
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {dishesOthers.map(dish => (
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
    </div>
  );
};
