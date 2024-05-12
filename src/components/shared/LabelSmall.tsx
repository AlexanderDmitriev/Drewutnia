import styled from '@emotion/styled';
import { CustomText } from './CustomText';

export const LabelSmall = styled(CustomText)`
  font-size: 12px;

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
