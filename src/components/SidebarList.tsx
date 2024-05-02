import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import NightlifeOutlinedIcon from '@mui/icons-material/NightlifeOutlined';
import styled from '@emotion/styled';

const CustomList = styled(List)`
  list-style: none;
  margin: 0;
  padding: 0 15px;
  background-color: rgba(240, 231, 231, 0.5);
  border-radius: 15px;
`;

const CustomListItem = styled(ListItem)`
  padding: 0;
`;

export const SidebarList = () => {
  return (
    <CustomList>
      <CustomListItem>
        <ListItemAvatar>
          <Avatar>
            <SportsBarOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wieczór Piwny" secondary="27-02-2014" />
      </CustomListItem>
      <CustomListItem>
        <ListItemAvatar>
          <Avatar>
            <SportsBarOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Wesołe godzinki !" secondary="26-02-2014" />
      </CustomListItem>
      <CustomListItem>
        <ListItemAvatar>
          <Avatar>
            <FavoriteBorderOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Walentynkowa niespodzianka"
          secondary="14-02-2014"
        />
      </CustomListItem>
      <CustomListItem>
        <ListItemAvatar>
          <Avatar>
            <BrunchDiningOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sylwester" secondary="01-01-2014" />
      </CustomListItem>
      <CustomListItem>
        <ListItemAvatar>
          <Avatar>
            <NightlifeOutlinedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Taneczny piątek" secondary="18-10-2013" />
      </CustomListItem>
    </CustomList>
  );
};
