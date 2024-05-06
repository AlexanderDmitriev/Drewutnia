import { LabelSmall, LabelLarge } from '../components/shared';
import reserve1 from '../images/reserve1.jpg';
import reserve2 from '../images/reserve2.jpg';
import styled from '@emotion/styled';

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
`;

const Images = styled.img`
  border-radius: 15px;
  margin: 5px;
`;

export const ReservePage = () => {
  return (
    <>
      <FlexContainer>
        
        <LabelSmall>
          U nas masz możliwość zorganizowania niezapomnianych przyjęć
          okolicznościowych: imienin, urodzin, imprez integracyjnych i
          promocyjnych, wieczorów panieńskich i kawalerskich itd. PUB Drewutnia
          posiada dużą salę z antresolą oraz nastrojowy zadaszony ogródek.
        </LabelSmall>
        <Images src={reserve2} alt="" />
      </FlexContainer>
      <FlexContainer>
        <Images src={reserve1} alt="" />
        <div>
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
        </div>
      </FlexContainer>
    </>
  );
};
