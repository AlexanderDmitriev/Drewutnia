import styled from '@emotion/styled';

const TempContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 75px;
  min-height: 90vh;
  //margin-left: 10px;
  /* position: relative;
  top: 180px; */
  @media screen and (min-width: 480px) {
    width: 479px;
  }
  @media screen and (min-width: 768px) {
    width: 66%;
    float: left;
    margin-top: 160px;
  }
`;

export const ContentContainer = ({
  children,
}: React.PropsWithChildren<any>) => {
  return <TempContainer>{children}</TempContainer>;
};
