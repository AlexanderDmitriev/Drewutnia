import { DishesSummary, HiddenTitle } from '../components/shared';
import { dishesSomethingToEat } from '../components/testData/dishes';
import { napoje } from '../components/testData/napoje';
import { sneki } from '../components/testData/sneki';

export const MenuPage = () => {
  return (
    <section>
      <HiddenTitle>Menu</HiddenTitle>
      <DishesSummary title={`Napoje`} dishesList={napoje}></DishesSummary>
      <DishesSummary
        title={'Jedzenie'}
        dishesList={dishesSomethingToEat}
      ></DishesSummary>
      <DishesSummary title={'Przegryzki'} dishesList={sneki}></DishesSummary>
    </section>
  );
};
