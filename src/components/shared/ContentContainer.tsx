import styled from '@emotion/styled';

const TempContainer = styled.div`
  width: 100%;
  padding: 15px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    min-width: 479px;
    
    }
  @media screen and (min-width: 768px) {
    width: 68%;
    float: left;
    }
`;

export const ContentContainer = ({ children }: React.PropsWithChildren<any>) => {
  return (<TempContainer>{children}</TempContainer>);
};