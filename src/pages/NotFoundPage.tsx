import { LabelLarge,HiddenTitle } from '../components/shared';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import notFoundImage from '../images/404.jpg';

export const NotFoundPage = () => {
  return (
    <section>
      <HiddenTitle>Not found</HiddenTitle>
      <LabelLarge>
        Przepraszam, szukam tu stronu, ale nie widzę...{' '}
        <SentimentVeryDissatisfiedIcon />
      </LabelLarge>
      <img
        src={notFoundImage}
        alt=""
        width={document.documentElement.scrollWidth * 0.6}
      />
    </section>
  );
};
