import styled from '@emotion/styled';
import { CustomText } from './CustomText';

export const LabelLarge = styled(CustomText)`
  font-size: 16px;
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
