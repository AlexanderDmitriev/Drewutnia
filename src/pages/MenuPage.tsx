import { DishesSummary } from '../components/shared';
import {
  dishesSomethingToEat,
  dishesSneck,
} from '../components/testData/dishes';
import { napoje } from '../components/testData/napoje';

export const MenuPage = () => {
  return (
    <div>
      <DishesSummary title={`Napoje`} dishesList={napoje}></DishesSummary>
      <DishesSummary
        title={'Dania gotowe'}
        dishesList={dishesSomethingToEat}
      ></DishesSummary>
      <DishesSummary title={'Sneki'} dishesList={dishesSneck}></DishesSummary>
    </div>
  );
};
