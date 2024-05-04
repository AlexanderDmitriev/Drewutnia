import styled from '@emotion/styled';
import back from '../../images/background.jpg';

const TempContainer = styled.div`

  width: 70%;
  float: left;
  height: 100%;
  padding: 120px 20px 20px 20px;
  background-image: url(${back});
  background-size:contain ;
  background-repeat: round;
`;

export const Container = ({ children }: React.PropsWithChildren<any>) => {
  return (<TempContainer>{children}</TempContainer>);
};
