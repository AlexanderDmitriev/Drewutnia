import { LabelLarge } from '../components/shared';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const NotFoundPage = () => {
  return (
    <>
      <LabelLarge>
        Przepraszam, szukam tu stronu, ale nie widzę...{' '}
        <SentimentVeryDissatisfiedIcon />
      </LabelLarge>
    </>
  );
};
