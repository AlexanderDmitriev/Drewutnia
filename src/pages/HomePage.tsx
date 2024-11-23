import { LabelLarge, HiddenTitle, TextContainer } from '../components/shared';
import { Gallery } from '../components/entities';
import { homeImagesArray } from '../images/homePageImages/home';

const HomePage = () => {
  return (
    <section>
      <HiddenTitle>Home</HiddenTitle>
      <TextContainer>
        <LabelLarge>
          Ciekawy wystrój, dobra muzyka, bogato wyposażony bar sprawiają, że PUB
          Drewutnia to miejsce o niezwykłym klimacie – doskonałe na chwilę
          relaksu i dobrej zabawy. U nas możesz napić się zimnego piwa w
          doborowym towarzystwie. Oferujemy również szeroki wybór innych
          alkoholi. Nasi barmani zadbają o Twoje dobre samopoczucie.
        </LabelLarge>
      </TextContainer>
      <Gallery pictures={homeImagesArray} />
      <TextContainer>
        <LabelLarge>
          Proponujemy miłe spędzanie czasu ze znajomymi lub rodziną w naszym
          ogródku. Możesz zaznać trochę zieleni i słońca w środku miasta.
          Zapraszamy na kiełbaskę z ogniska lub z grilla, którą możesz
          przyrządzić tak jak lubisz. Nie przejmuj się pogodą – ogródek jest
          zadaszony. Można się schronić przed deszczem oraz ogrzać przy ognisku
          w chłodniejsze dni.
        </LabelLarge>
        <LabelLarge>
          Pub Drewutnia to miejsce z wielką historią (pub istnieć od 30 lat),
          które pamięta szalone lata 90., wesołe czasy kibiców Cracovii i Wisły.
          U nas na pewno znajdziesz coś ciekawego dla siebie. Drewutnia to część
          wsi w sercu Krakowa.
        </LabelLarge>
        <LabelLarge>
          Ponadto oferujemy piłkarzyki. Przed lokalem znajduje się duży
          bezpłatny parking do dyspozycji dla naszych Gości. Każdego dnia
          czekają na Ciebie ciekawe promocje! U nas na pewno znajdziesz coś dla
          siebie. Zapoznaj się także z naszą ofertą rezerwacji lokalu.
        </LabelLarge>
        <LabelLarge>Zapraszamy codziennie od 15:00 do 23:00.</LabelLarge>
      </TextContainer>
    </section>
  );
};

export default HomePage;
