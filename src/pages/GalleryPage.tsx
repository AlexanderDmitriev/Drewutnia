import Box from '@mui/material/Box';
import { GalleryFolder } from '../components/shared/GalleryFolder';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { data } from '../components/testData/data';
import { IGalleryType } from '../components/Interfaces/IGalleryType';
import { HiddenTitle } from '../components/shared';

const GalleryListItem = styled.li`
  list-style: none;
  //:not(:last-child) {
    padding-right: 15px;
  //}
`;

const GalleryList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const GalleryPage = ({ setLastGallery }: any) => {
  const navigate = useNavigate();
  const clickOnFolderHandler = (folder: IGalleryType) => {
    setLastGallery(folder);
    navigate(`/gallery/${folder.id}`);
  };
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <section>
        <HiddenTitle>Gallery</HiddenTitle>
        <GalleryList>
          {data.map(folder => (
            <GalleryListItem
              key={folder.id}
              onClick={() => clickOnFolderHandler(folder)}
            >
              <GalleryFolder
                title={folder.title}
                message={folder.message}
                gallery={folder.gallery}
              />
            </GalleryListItem>
          ))}
        </GalleryList>
      </section>
    </Box>
  );
};
