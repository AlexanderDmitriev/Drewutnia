import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchInput =() => {
  return (
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="szukać" variant="standard" />
      </Box>
  );
}
