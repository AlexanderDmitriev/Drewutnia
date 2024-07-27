import { LabelSmall, LabelLarge, TextContainer } from '../../components/shared';
import reserve1 from '../../images/reserve1.jpg';
import reserve2 from '../../images/reserve2.jpg';
import { FlexContainer, Images } from './ReservePage.styled';

export const ReservePage = () => {
  return (
    <>
      <FlexContainer>
        <TextContainer>
          <LabelSmall>
            U nas masz możliwość zorganizowania niezapomnianych przyjęć
            okolicznościowych: imienin, urodzin, imprez integracyjnych i
            promocyjnych, wieczorów panieńskich i kawalerskich itd. PUB
            Drewutnia posiada dużą salę z antresolą oraz nastrojowy zadaszony
            ogródek.
          </LabelSmall>
        </TextContainer>
        <Images src={reserve2} alt="welcome" />
      </FlexContainer>
      <FlexContainer>
        <Images src={reserve1} alt="welcome" />
        <div>
          <TextContainer>
            <LabelSmall>
              <span>Rezerwacja miejsc - </span> Chciałbyś umówić się u nas ze
              znajomymi ? Rezerwacja miejsc telefonicznie (+48) 603-956-037 lub
              osobiście przy barze.
            </LabelSmall>
            <LabelSmall>
              <span>Wynajem - </span> Istnieje możliwość wynajęcia części lub
              całego lokalu nawet na całą noc. Chętnie pomożemy Ci w organizacji
              Twojego przyjęcia.
            </LabelSmall>
            <LabelLarge>Zapraszamy!</LabelLarge>
          </TextContainer>
        </div>
      </FlexContainer>
    </>
  );
};
