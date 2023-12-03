import {
  Box,
  Button,
  Drawer,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import style from './style.js';
import './style.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ReorderIcon from '@mui/icons-material/Reorder';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../../../../context/auth/authContext.js';

import Inventory from '../Inventory.jsx';
import Orders from '../Orders.jsx';
import Products from '../Products.jsx';
import Profile from '../Profile.jsx';

const VendorHomeDefault = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, isLoading, user, getUser } = authContext;
  const isWideScreen = useMediaQuery('(min-width:1200px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  useEffect(() => {
    getUser();
  }, []);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <Grid container>
      {isWideScreen ? (
        <Grid
          item
          xl={3}
          lg={3}
          style={{
            height: '100vh',

            backgroundColor: '#8a33fd',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ margin: '0 auto', width: '80%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: '5px',
                margin: '20px 20px',
              }}
            >
              <LocalMallIcon sx={style.buttonIcons} />
              <h1 style={{ color: 'white' }}>KickKart</h1>
            </Box>
            <Box component={'ul'} style={style.navItems}>
              <Box component={'li'} sx={style.listItems}>
                <Link className="linkItems">
                  <AccountCircleIcon /> My Profile
                </Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link className="linkItems">
                  <CategoryIcon /> Products
                </Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link className="linkItems">
                  <ReorderIcon /> Orders
                </Link>
              </Box>

              <Box component={'li'} sx={style.listItems}>
                <Link className="linkItems">
                  <PeopleAltIcon /> Inventory
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ margin: '30px auto', width: '70%' }}>
            <Button sx={style.button}>
              <ExitToAppIcon /> Signout
            </Button>
          </Box>
        </Grid>
      ) : (
        <>
          <Button onClick={handleDrawerOpen}>
            <MenuIcon sx={style.menuButton} />
          </Button>
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <Grid
              item
              xl={3}
              lg={3}
              style={{
                height: '100vh',

                backgroundColor: '#8a33fd',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ margin: '0 auto', width: '80%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',

                    columnGap: '5px',
                    margin: '20px 20px',
                  }}
                >
                  <LocalMallIcon sx={style.buttonIcons} />
                  <h1 style={{ color: 'white' }}>KickKart</h1>
                </Box>
                <Box component={'ul'} style={style.navItems}>
                  <Box component={'li'} sx={style.listItems}>
                    <Link className="linkItems">
                      <AccountCircleIcon /> My Profile
                    </Link>
                  </Box>
                  <Box component={'li'} sx={style.listItems}>
                    <Link className="linkItems">
                      <CategoryIcon /> Products
                    </Link>
                  </Box>
                  <Box component={'li'} sx={style.listItems}>
                    <Link className="linkItems">
                      <ReorderIcon /> Orders
                    </Link>
                  </Box>

                  <Box component={'li'} sx={style.listItems}>
                    <Link className="linkItems">
                      <PeopleAltIcon /> Inventory
                    </Link>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ margin: '30px auto', width: '70%' }}>
                <Button sx={style.button}>
                  <ExitToAppIcon /> Signout
                </Button>
              </Box>
            </Grid>
          </Drawer>
        </>
      )}

      <Grid item xl={9} lg={9} sm={12}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            style={{ color: '#8833fd', padding: '20px', fontWeight: 700 }}
          >
            Hello {user?.name}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VendorHomeDefault;