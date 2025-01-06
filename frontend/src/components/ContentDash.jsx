import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Perbaiki penggunaan useNavigate
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  createTheme,
  ThemeProvider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  DateRange as DateRangeIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Groups3 as Groups3Icon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
  Logout as LogoutIcon, // Import icon logout
} from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: { 
      main: deepPurple['900'],
      textIcon: deepPurple['50'],
    },
    secondary: {
      main: deepPurple['400'],
    },
    black: { 
      main: deepPurple['A700'],
      textIcon: deepPurple['A100'],
    },
  },
});

export function NavbarDash(props) {
  const navigate = useNavigate(); // Menggunakan useNavigate dengan benar
  const thema = useTheme();
  const isMobile = useMediaQuery(thema.breakpoints.down('sm'));
  const { window, session } = props;

  const navItemsiswa = [
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Home</Typography></>,
      icon: <HomeIcon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard',
    },
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Absen</Typography></>,
      icon: <Groups3Icon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard/absen',
    },
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Calender</Typography></>,
      icon: <DateRangeIcon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard/calendar',
    },
  ];

  const navItemAdmin = [
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Home</Typography></>,
      icon: <HomeIcon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard',
    },
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Laporan Absen</Typography></>,
      icon: <Groups3Icon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard/absen',
    },
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Calender</Typography></>,
      icon: <DateRangeIcon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard/calendar',
    },
    {
      text: <><Typography sx={{ color: theme.palette.black.textIcon }}>Tambah User</Typography></>,
      icon: <DateRangeIcon sx={{ color: theme.palette.black.textIcon }} />,
      path: '/dashboard/calendar',
    },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  // Fungsi Logout
  const handleLogout = () => {
    fetch('http://localhost:5000/dashboard/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        navigate('/'); // Navigasi ke halaman login setelah logout
      } else {
        console.error('Logout gagal');
      }
    });
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const container = window !== undefined ? () => window().document.body : undefined;

  const navItems = session?.role === 'admin' ? navItemAdmin : navItemsiswa;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'left', backgroundColor: theme.palette.black.main }}
    >
      <Typography variant="h4" sx={{ my: 2, color: theme.palette.black.textIcon }}>
        Nzan's Absen
        {'\t' + session.username}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemIcon sx={{ color: theme.palette.black.textIcon }}>{item.icon}</ListItemIcon>
              <ListItemText disableTypography primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="primary-search-account-menu"
      open={isMenuOpen}
      onClose={handleMenuClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: theme.palette.black.main,
            color: theme.palette.black.textIcon,
          },
        },
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ marginRight: 1 }} />
        Logout
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <ThemeProvider theme={theme}>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        id="primary-search-account-menu-mobile"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ backgroundColor: theme.palette.black.main }}>
          <IconButton size="large" sx={{ color: theme.palette.black.main }}>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem sx={{ backgroundColor: theme.palette.black.main }}>
          <IconButton size="large" sx={{ color: theme.palette.black.main }}>
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen} sx={{ backgroundColor: theme.palette.black.main }}>
          <IconButton size="large" sx={{ color: theme.palette.black.main }}>
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ backgroundColor: theme.palette.black.main }}>
          <IconButton size="large" sx={{ color: theme.palette.black.main }}>
            <LogoutIcon />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, color: theme.palette.black.textIcon, display: { xs: 'block', sm: 'block' } }}
            >
              Nzans Absensi
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, color: theme.palette.primary.textIcon }}>
              <IconButton size="large" sx={{ color: theme.palette.primary.textIcon }}>
                <Badge badgeContent={4} sx={{ color: theme.palette.primary.textIcon }}>
                  <MailIcon sx={{ color: theme.palette.primary.textIcon }} />
                </Badge>
              </IconButton>
              <IconButton size="large" sx={{ color: theme.palette.primary.textIcon }}>
                <Badge badgeContent={4} sx={{ color: theme.palette.primary.textIcon }}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ color: theme.palette.primary.textIcon }}
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{ color: theme.palette.primary.textIcon }}
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Box component="nav">
          <Drawer
             container={container}
             variant={isMobile ? 'temporary' : 'permanent'}
             open={isMobile ? mobileOpen : true}
             onClose={isMobile ? handleDrawerToggle : undefined}
             ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                backgroundColor: theme.palette.black.main,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                backgroundColor: theme.palette.black.main,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

NavbarDash.propTypes = {
  window: PropTypes.func,
};
