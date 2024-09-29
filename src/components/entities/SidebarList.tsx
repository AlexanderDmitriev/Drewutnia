import List from '@mui/material/List';
import { PartyItem } from '../shared';
import styled from '@emotion/styled';

const CustomList = styled(List)`
  list-style: none;
  margin: 0;
  padding: 0 15px;
  background-color: rgba(240, 231, 231, 0.5);
  border-radius: 15px;
`;

export const SidebarList = () => {
  return (
    <CustomList>
      <PartyItem
        partyType="eating"
        nameParty="Grille copiątka i soboty"
        dateParty="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, possimus dolor. Quos cum velit impedit atque dignissimos in deleniti error?"
      />
      <PartyItem
        partyType="music"
        nameParty="Taneczna sobota"
        dateParty="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, possimus dolor. Quos cum velit impedit atque dignissimos in deleniti error?"
      />
    </CustomList>
  );
};
