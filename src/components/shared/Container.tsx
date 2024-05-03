import styled from '@emotion/styled';
import back from '../../images/background.jpg';

const TempContainer = styled.div`
  width: 70%;
  float: left;
  height: 100vh;
  margin-top: 139px;
  padding: 60px 20px;
  background-image: url(${back});
  background-size:contain ;
  background-repeat: round;
`;

export const Container = ({ children }: React.PropsWithChildren<any>) => {
  return (<TempContainer>{children}</TempContainer>);
};
