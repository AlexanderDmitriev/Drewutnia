import { DishesSummary, HiddenTitle } from '../components/shared';
import { dishesSomethingToEat } from '../components/testData/dishes';
import { napoje } from '../components/testData/napoje';
import { sneki } from '../components/testData/sneki';
import { GalleryFolder } from '../components/shared/GalleryFolder';
import styled from '@emotion/styled';

const dishesIcon = [dishesSomethingToEat[0].image];
const napojeIcon = [napoje[2].image];
const snekiIcon = [sneki[1].image];

const GalleryListItem = styled.li`
  list-style: none;
  //:not(:last-child) {
  padding-right: 15px;
  //}
`;

const GalleryList = styled.ul`
  margin: 0 auto;
  display: block;
  @media screen and (min-width: 468px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const clickOnFolderHandler = () => {};

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

      <GalleryList>
        <GalleryListItem
          key={napoje[0].id}
          onClick={() => clickOnFolderHandler()}
        >
          <GalleryFolder title="napoje" message="" gallery={napojeIcon} />
        </GalleryListItem>
        <GalleryListItem
          key={dishesSomethingToEat[0].id}
          onClick={() => clickOnFolderHandler()}
        >
          <GalleryFolder title="jedzenie" message="" gallery={dishesIcon} />
        </GalleryListItem>
        <GalleryListItem
          key={sneki[0].id}
          onClick={() => clickOnFolderHandler()}
        >
          <GalleryFolder title="przegryzki" message="" gallery={snekiIcon} />
        </GalleryListItem>
      </GalleryList>
    </section>
  );
};
