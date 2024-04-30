import styled from '@emotion/styled';
import back from '../../images/background.jpg';

const TempContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px;
  background-image: url(${back});
  background-size:contain ;
  background-repeat: round;
`;

export const Container = ({ children }: React.PropsWithChildren<any>) => {
  return (<TempContainer>{children}</TempContainer>);
};
