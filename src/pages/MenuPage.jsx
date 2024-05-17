import { DishesSummary } from '../components/shared';
import {
  dishesAlcochol,
  dishesSomethingToEat,
  dishesSneck,
} from '../components/testData/dishes';

export const MenuPage = () => {
  return (
    <div>
      <DishesSummary
        title={'Napoje'}
        dishesList={dishesAlcochol}
      ></DishesSummary>
      <DishesSummary
        title={'Dania gotowe'}
        dishesList={dishesSomethingToEat}
      ></DishesSummary>
      <DishesSummary title={'Sneki'} dishesList={dishesSneck}></DishesSummary>
    </div>
  );
};
