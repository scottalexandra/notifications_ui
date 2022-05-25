import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';


const pages = ['Products & Services', 'Customer Reviews', 'Resources'];

const NavMenu = ({ anchorElNav, handleCloseNavMenu }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default NavMenu;
