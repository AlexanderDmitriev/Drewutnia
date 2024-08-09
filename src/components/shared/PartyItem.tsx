import Avatar from '@mui/material/Avatar';
import SportsBarOutlinedIcon from '@mui/icons-material/SportsBarOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BrunchDiningOutlinedIcon from '@mui/icons-material/BrunchDiningOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import styled from '@emotion/styled';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { IPatryType } from '../Interfaces/IPartType';

const CustomListItem = styled(ListItem)`
  padding: 0;
`;

const SidebarText = styled(ListItemText)`
  color: rgb(91 56 36);
`;

const makeAvatar = (partyType: string) => {
  let result = <></>;
  switch (partyType) {
    case 'beer':
      result = <SportsBarOutlinedIcon />;
      break;
    case 'love':
      result = <FavoriteBorderOutlinedIcon />;
      break;
    case 'holiday':
      result = <BrunchDiningOutlinedIcon />;
      break;
    case 'music':
      result = <MusicNoteOutlinedIcon />;
      break;
    case 'market':
      result = <LocalGroceryStoreOutlinedIcon />;
      break;
    default:
      result = <ErrorOutlineOutlinedIcon />;
      break;
  }
  return result;
};

export const PartyItem = ({ partyType, nameParty, dateParty }: IPatryType) => {
  return (
    <CustomListItem>
      <ListItemAvatar>
        <Avatar>{makeAvatar(partyType)}</Avatar>
      </ListItemAvatar>
      <SidebarText primary={nameParty} secondary={dateParty} />
    </CustomListItem>
  );
};
