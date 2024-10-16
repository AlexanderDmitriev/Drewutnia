import {
  LabelLarge,
  Picture,
  HiddenTitle,
  TextContainer,
} from '../components/shared';
import { GoogleMaps,LeafletMaps } from '../components/widgets';
import front from '../images/front.jpg';

const ContactsPage = () => {
  return (
    <section>
      <HiddenTitle>Contacts</HiddenTitle>
      <TextContainer>
        <LabelLarge>
          <span>Pub Drewutnia - </span> ul. Władysława Łokietka 43 Kraków, 31-279
        </LabelLarge>
        <LabelLarge>
          <span>Tel. - </span> (+48) 603-956-037
        </LabelLarge>
        <LabelLarge>
          <span>E-mail - </span> pubdrewutnia@gmail.com
        </LabelLarge>
      </TextContainer>
      <Picture src={front} alt="" />
      <GoogleMaps />
      <LeafletMaps/>
    </section>
  );
};

export default ContactsPage;
