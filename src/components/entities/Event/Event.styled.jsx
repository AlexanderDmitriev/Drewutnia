import styled from '@emotion/styled';

export const EventItem = styled.li`
  display: block;
  padding: 10px;
  @media screen and (min-width: 480px) {
    display: flex;
    justify-content: left;
    align-items: center;
  }
`;

export const EventItemAboutContainer = styled.div`
  padding: 10px;
`;

export const EventImage = styled.img`
  max-width: 50%;
  height: auto;
  display: block;
  margin: 10px;
`;
