import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const NotificationsMenu = ({ anchorElNotifications, handleCloseNotificationsMenu, notifications }) => {
  return (
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElNotifications}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElNotifications)}
      onClose={handleCloseNotificationsMenu}
      >
        {notifications.map((notification) => (
          <MenuItem key={notification['id']} onClick={handleCloseNotificationsMenu}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Avatar alt="Remy Sharp" src="" />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { md: 'flex-start' },
                  ml: 1,
                  minWidth: { md: 350 },
                }}
              >
                <Typography variant="span">{notification['attributes']['content']}</Typography>
                <Typography textAlign="center">{notification['attributes']['formatted_time']}</Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
    </Menu>
  );
}

export default NotificationsMenu;
