import Box from '@mui/material/Box';
import { GalleryFolder } from '../components/shared/GalleryFolder';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import {data} from '../components/testData/data';
import {IGalleryType} from '../components/Interfaces/IGalleryType';


const GalleryList = styled.li`
  list-style: none;
  :not(:last-child) {
    padding-bottom: 15px;
  }
`;

export const GalleryPage = ({setLastGallery}:any) => {
    const navigate = useNavigate();
    const clickOnFolderHandler = (folder:IGalleryType) => {
      setLastGallery(folder);
      navigate(`/gallery/${folder.id}`);
    };
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <ul>
        {data.map(folder => (
          <GalleryList key={folder.id} onClick={()=>clickOnFolderHandler(folder)}>
            <GalleryFolder
              title={folder.title}
              message={folder.message}
              gallery={folder.gallery}
            />
          </GalleryList>
        ))}
      </ul>
    </Box>
  );
};
