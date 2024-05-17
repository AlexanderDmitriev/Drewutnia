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
        partyType="beer"
        nameParty="Wieczór Piwny"
        dateParty="27-02-2014"
      />
      <PartyItem
        partyType="beer"
        nameParty="Wesołe godzinki !"
        dateParty="26-02-2014"
      />
      <PartyItem
        partyType="love"
        nameParty="Walentynkowa niespodzianka"
        dateParty="14-02-2014"
      />
      <PartyItem
        partyType="holiday"
        nameParty="Sylwester"
        dateParty="01-01-2014"
      />
      <PartyItem
        partyType="music"
        nameParty="Taneczny piątek"
        dateParty="18-10-2013"
      />
    </CustomList>
  );
};
