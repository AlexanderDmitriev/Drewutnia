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
  position: fixed;
  top: 85px;
  left: 0;
  width: 100%;
  padding-top: 10px;
  z-index: 1000;
  background-color: #fff;
  @media screen and (min-width: 468px) {
    top: 90px;
    
  }
  @media screen and (min-width: 768px) {
    width: 66.6%;
    top: 150px;
  }
  @media screen and (min-width: 1200px) {
    top: 150px;
    left: 10px;
    padding-left: 10px;
  }
  @media screen and (min-width: 1400px) {
    top: 135px;
  }
`;
let lastItem: Number = 0;

const MenuPage = () => {
  const [openNapoje, setOpenNapoje] = useState(false);
  const [openEat, setOpenEat] = useState(false);
  const [openSnek, setOpenSnek] = useState(false);

  const clickOnFolderHandler = () => {
    setOpenNapoje(!openNapoje);
    lastItem = 1;
    console.log(lastItem);
  };
  const clickOnFolderHandlerEat = () => {
    setOpenEat(!openEat);
    lastItem = 2;
  };
  const clickOnFolderHandlerSnek = () => {
    setOpenSnek(!openSnek);
    lastItem = 3;
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
      {openNapoje && lastItem === 1 && (
        <DishesSummary title={`Napoje`} dishesList={napoje}></DishesSummary>
      )}
      {openEat && lastItem === 2 && (
        <DishesSummary
          title={'Jedzenie'}
          dishesList={dishesSomethingToEat}
        ></DishesSummary>
      )}
      {openSnek && lastItem === 3 && (
        <DishesSummary title={'Przegryzki'} dishesList={sneki}></DishesSummary>
      )}
    </section>
  );
};

export default MenuPage;
