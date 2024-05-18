import { LabelLarge } from '../components/shared';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import notFoundImage from '../images/404.jpg';

export const NotFoundPage = () => {
  return (
    <>
      <LabelLarge>
        Przepraszam, szukam tu stronu, ale nie widzę...{' '}
        <SentimentVeryDissatisfiedIcon />
      </LabelLarge>
      <img
        src={notFoundImage}
        alt=""
        width={document.documentElement.scrollWidth * 0.6}
      />
    </>
  );
};
