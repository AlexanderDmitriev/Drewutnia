import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import {IGalleryType} from '../Interfaces/IGalleryType';

const maxWidth = `${document.documentElement.scrollWidth * 0.75}px`;

const Folder = styled(Paper)`
  background-color: #f0e7e7;
  padding: 15px;
  max-width: ${maxWidth};
  margin: 0 auto;
  margin-bottom: 10px;
  :hover{
    scale: 1.03;
  }
`;



export const GalleryFolder = ({ title, message, gallery }: IGalleryType) => {
  return (
    <Folder >
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <img
            src={gallery[0]}
            alt=""
            width={document.documentElement.scrollWidth * 0.2}
          />
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography noWrap>{title}</Typography>
          <Typography noWrap>{message}</Typography>
        </Grid>
      </Grid>
    </Folder>
  );
};
