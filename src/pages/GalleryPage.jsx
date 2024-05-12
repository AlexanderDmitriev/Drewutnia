import Box from '@mui/material/Box';
import { GalleryFolder } from '../components/shared/GalleryFolder';
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";
import {data} from '../components/data';


const GalleryList = styled.li`
  list-style: none;
  :not(:last-child) {
    padding-bottom: 15px;
  }
`;

export const GalleryPage = () => {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <ul>
        {data.map(folder => (
          <GalleryList key={folder.id} onClick={()=>navigate(`/gallery/${folder.id}`)}>
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
