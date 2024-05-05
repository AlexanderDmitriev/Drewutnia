import styled from '@emotion/styled';
import back from '../../images/background.jpg';

const TempContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${back});
  background-size:contain ;
  background-repeat: round;

`;

export const Container = ({ children }: React.PropsWithChildren<any>) => {
  return (<TempContainer>{children}</TempContainer>);
};
