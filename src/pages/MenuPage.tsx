import { useState } from 'react';
import { DishesSummary, HiddenTitle, MenuFolder } from '../components/shared';
import { dishesSomethingToEat } from '../components/testData/dishes';
import { napoje } from '../components/testData/napoje';
import { sneki } from '../components/testData/sneki';
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
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  position: sticky;
  background-color: #fff;
`;

export const MenuPage = () => {
  const [openNapoje, setOpenNapoje] = useState(false);
  const [openEat, setOpenEat] = useState(false);
  const [openSnek, setOpenSnek] = useState(false);

  const clickOnFolderHandler = () => {
    setOpenNapoje(!openNapoje);
  };
  const clickOnFolderHandlerEat = () => {
    setOpenEat(!openEat);
  };
  const clickOnFolderHandlerSnek = () => {
    setOpenSnek(!openSnek);
  };

  return (
    <section>
      <HiddenTitle>Menu</HiddenTitle>
      <GalleryList>
        <GalleryListItem
          key={napoje[0].id}
          onClick={() => clickOnFolderHandler()}
        >
          <MenuFolder title="Napoje" message="" gallery={napojeIcon} />
        </GalleryListItem>
        <GalleryListItem
          key={dishesSomethingToEat[0].id}
          onClick={() => clickOnFolderHandlerEat()}
        >
          <MenuFolder title="Jedzenie" message="" gallery={dishesIcon} />
        </GalleryListItem>
        <GalleryListItem
          key={sneki[0].id}
          onClick={() => clickOnFolderHandlerSnek()}
        >
          <MenuFolder title="Przegryzki" message="" gallery={snekiIcon} />
        </GalleryListItem>
      </GalleryList>
      {openNapoje && (
        <DishesSummary title={`Napoje`} dishesList={napoje}></DishesSummary>
      )}
      {openEat && (
        <DishesSummary
          title={'Jedzenie'}
          dishesList={dishesSomethingToEat}
        ></DishesSummary>
      )}
      {openSnek && (
        <DishesSummary title={'Przegryzki'} dishesList={sneki}></DishesSummary>
      )}
    </section>
  );
};
