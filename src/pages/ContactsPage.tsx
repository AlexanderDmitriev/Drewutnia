import { LabelLarge,Picture } from '../components/shared';
import {GoogleMaps} from '../components/widgets';
import front from '../images/front.jpg';

export const ContactsPage = () => {
  return (
    <>
      <LabelLarge><span>Pub Drewutnia - </span> ul. Władysława Łokietka 43 Kraków</LabelLarge>
      <LabelLarge><span>Tel. - </span> (+48) 603-956-037</LabelLarge>
      <LabelLarge><span>E-mail - </span> pubdrewutnia@gmail.com</LabelLarge>
      <Picture src={front} alt=''/>
      <GoogleMaps/>
    </>
  );
};
