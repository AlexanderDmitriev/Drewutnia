import styled from '@emotion/styled';

const TempContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 84vh;
  padding: 15px 0;
  /* position: relative;
  top: 180px; */
  @media screen and (min-width: 480px) {
    width: 479px;
  }
  @media screen and (min-width: 768px) {
    width: 68%;
    float: left;
  }
`;

export const ContentContainer = ({
  children,
}: React.PropsWithChildren<any>) => {
  return <TempContainer>{children}</TempContainer>;
};
