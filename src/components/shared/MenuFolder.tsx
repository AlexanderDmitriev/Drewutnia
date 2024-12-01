import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { IGalleryType } from '../Interfaces/IGalleryType';
import { LabelSmall } from './LabelSmall';

const maxWidth = `${document.documentElement.scrollWidth * 0.3}px`;
const maxHeight = `${document.documentElement.scrollWidth * 0.35 * 0.75}px`;

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

const FolderContainer = styled(Grid)`
  display: block;
`;

const Picture = styled.img`
  padding-bottom: 4px;
  overflow-y: hidden;
  @media screen and (min-width: 768px) {
    padding-bottom: 10px;
  }
`;

const pictureHeight = document.documentElement.scrollWidth * 0.25 * 0.58;

export const MenuFolder = ({ title, message, gallery }: IGalleryType) => {
  return (
    <Folder>
      <FolderContainer container wrap="nowrap" spacing={2}>
        <Grid item>
          <Picture
            src={gallery[0]}
            alt={title}
            width={document.documentElement.scrollWidth * 0.2}
            height={pictureHeight}
          />
          <LabelSmall style={{ padding: 0, margin: 0 }}>{title}</LabelSmall>
        </Grid>
      </FolderContainer>
    </Folder>
  );
};
