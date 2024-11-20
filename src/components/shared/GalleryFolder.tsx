import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { IGalleryType } from '../Interfaces/IGalleryType';
import { LabelSmall } from './LabelSmall';

const displayWidth = document.documentElement.scrollWidth;

const maxWidth =
  displayWidth > 680 ? `${displayWidth * 0.25}px` : `${displayWidth * 0.5}px`;
const maxHeight =
  displayWidth > 680
    ? `${displayWidth * 0.25 * 0.75}px`
    : `${displayWidth * 0.45 * 0.75}px`;

const Folder = styled(Paper)`
  background-color: #f0e7e7;
  padding: 15px;
  max-width: ${maxWidth};
  max-height: ${maxHeight};
  margin: 0 auto;
  margin-bottom: 10px;
  overflow-y: hidden;
  :hover {
    scale: 1.03;
  }
`;

const Picture = styled.img`
  padding-bottom: 10px;
  overflow-y: hidden;
`;
const InnerFolder = styled(Grid)`
  display: block;
`;
const Description = styled.div`
  padding: 0;
  text-align: center;
`;

const pictureHeight =
  displayWidth > 680 ? displayWidth * 0.3 * 0.5 : displayWidth * 0.6 * 0.5;

export const GalleryFolder = ({ title, message, gallery }: IGalleryType) => {
  return (
    <Folder>
      <InnerFolder container wrap="nowrap" spacing={2}>
        <Grid item>
          <Picture
            src={gallery[0]}
            alt={title}
            width={
              displayWidth > 680 ? displayWidth * 0.5 : displayWidth * 0.75
            }
            height={pictureHeight}
          />
        </Grid>
        <Description>
          <LabelSmall>{title}</LabelSmall>
          {/* <Typography noWrap>{message}</Typography> */}
        </Description>
      </InnerFolder>
    </Folder>
  );
};
