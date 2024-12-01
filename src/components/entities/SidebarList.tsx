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
        nameParty="Grille w każdy piątek i sobotę"
        dateParty="Jeśli szukasz miejsca w Krakowie, gdzie można zrobić grilla, to dobrze trafiłeś. W każdy piątek i sobotę zapraszamy na pyszne kiełbaski przygotowywane na ognisku na waszych oczach. Idealnie pasują do piwa! Dodatkowo zawsze można tu spędzić wieczór w przyjemnym towarzystwie."
      />
      <PartyItem
        partyType="music"
        nameParty="Taneczna sobota"
        dateParty="U nas nie tylko możesz napić się zimnego piwa, ale także zatańczyć. Tańczymy w każdą sobotę przy najlepszych polskich i światowych hitach."
      />
    </CustomList>
  );
};
