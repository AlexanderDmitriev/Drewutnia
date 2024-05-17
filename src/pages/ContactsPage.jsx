import { LabelLarge } from '../components/shared';
import {GoogleMaps} from '../components/widgets';

export const ContactsPage = () => {
  return (
    <>
      <LabelLarge><span>Pub Drewutnia - </span> ul. Władysława Łokietka 43 Kraków</LabelLarge>
      <LabelLarge><span>Tel. - </span> (+48) 603-956-037</LabelLarge>
      <LabelLarge><span>E-mail - </span> pubdrewutnia@gmail.com</LabelLarge>
      <GoogleMaps/>
    </>
  );
};
