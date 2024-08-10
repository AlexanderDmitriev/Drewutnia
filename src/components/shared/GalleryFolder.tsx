import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { IGalleryType } from '../Interfaces/IGalleryType';

const maxWidth = `${document.documentElement.scrollWidth * 0.25}px`;
const maxHeight = `${document.documentElement.scrollWidth * 0.25 * 0.75}px`;

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

const pictureHeight=(document.documentElement.scrollWidth * 0.3*0.58);

export const GalleryFolder = ({ title, message, gallery }: IGalleryType) => {
  return (
    <Folder>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Picture
            src={gallery[0]}
            alt={title}
            width={document.documentElement.scrollWidth * 0.5}
            height={pictureHeight}
          />
        </Grid>
        {/* <Grid item xs zeroMinWidth>
          <Typography noWrap>{title}</Typography>
          <Typography noWrap>{message}</Typography>
        </Grid> */}
      </Grid>
    </Folder>
  );
};
