import React, { useState } from 'react';
import style from './styles.js';
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout.js';
import NewArrivalsImage from '../../../assets/shoeposter.jpg';
import './styles.css';

const Navbar = () => {
  const isWideScreen = useMediaQuery('(min-width:900px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [isShopHovered, setShopHovered] = useState(false);

  const handleShopHover = () => {
    setShopHovered(true);
  };

  const handleShopLeave = () => {
    // setShopHovered(false);
    if (!isMouseOnBox) {
      setShopHovered(false);
    }
  };

  const handleBoxHover = () => {
    setMouseOnBox(true);
  };

  const handleBoxLeave = () => {
    setMouseOnBox(false);
    // If the mouse leaves the box, close it
    setShopHovered(false);
  };

  const [isMouseOnBox, setMouseOnBox] = useState(false);
  return (
    <Box>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // border:'1px solid black',
          height: '70px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: '5px',
          }}
        >
          <LocalMallIcon sx={style.buttonIcons} />
          <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>
            <h1>KickKart</h1>
          </Link>
        </Box>
        {isWideScreen ? (
          <>
            <Box component={'ul'} sx={style.navItems} className="ulList">
              <Box component={'li'} sx={style.listItems}>
                <Link className="link">Home</Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link className="link">About Us</Link>
              </Box>
              <Box component={'li'} sx={style.listItems}>
                <Link className="link">Contact Us</Link>
              </Box>
              <Box
                component={'li'}
                sx={[style.listItems, style.shopItem]}
                style={{ padding: '22px 0' }}
                onMouseEnter={handleShopHover}
                onMouseLeave={handleShopLeave}
              >
                <Link className="link">Shop</Link>
              </Box>
            </Box>
            <Box sx={style.navButtons}>
              <Box
                component={'li'}
                sx={{ listStyle: 'none', margin: '0 20px' }}
                className="navButton"
              >
                <Button>
                  <ShoppingCartIcon
                    className="buttonIcons"
                    sx={style.buttonIcons}
                  />
                </Button>
              </Box>
              <Box
                component={'li'}
                sx={{
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="navButton"
              >
                <Link to="/login">
                  <Button sx={style.button}>Login</Button>
                </Link>
                {/* <AccountCircleIcon sx={style.buttonIcons} /> */}
                {/* <Avatar sx={{ bgcolor: 'orange' }}>A</Avatar> */}
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button onClick={handleDrawerOpen}>
                <MenuIcon sx={style.menuButton} />
              </Button>

              <Button sx={style.button}>Login</Button>

              {/* <Button>
                <Avatar sx={style.button}>A</Avatar>
              </Button> */}
            </Box>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100vh',
                  width: '200px',
                }}
              >
                <List>
                  <ListItem button>
                    <Link style={style.listItems} className="link">
                      Home
                    </Link>
                  </ListItem>
                  <ListItem button>
                    <Link style={style.listItems} className="link">
                      About Us
                    </Link>
                  </ListItem>
                  <ListItem button>
                    <Link style={style.listItems} className="link">
                      Contact Us
                    </Link>
                  </ListItem>
                  <ListItem
                    button
                    onMouseEnter={handleShopHover}
                    onMouseLeave={handleShopLeave}
                  >
                    <Link style={style.listItems} className="link">
                      Shop
                    </Link>

                    {/* {showSubcategories && <SubCategories />} */}
                  </ListItem>
                  <ListItem
                    button
                    sx={{
                      bgcolor: 'grey',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: '#f2f2f2',
                    }}
                  >
                    <Link style={style.listItems} className="link">
                      {/* <ShoppingCartIcon /> */}
                      <h4>Brands</h4>
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Adidas
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Servis
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Bata
                    </Link>
                    <Link style={style.listItems} className="link">
                      {/* <ShoppingCartIcon /> */}
                      <h4>Categories</h4>
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Sports
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Formals
                    </Link>
                    <Link
                      style={style.listItems}
                      className="link underlinetext"
                    >
                      {/* <ShoppingCartIcon /> */}
                      Casuals
                    </Link>
                  </ListItem>
                  <ListItem button>
                    <Link style={style.listItems} className="link">
                      {/* <ShoppingCartIcon /> */}
                      My Cart
                    </Link>
                  </ListItem>

                  {/* Add more ListItems for additional navigation items */}
                </List>
                <List>
                  <ListItem button>
                    <Link style={style.listItems} className="link">
                      <LogoutIcon />
                      Logout
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
        {/* <Box sx={style.menuButton}>
          <AccountCircleIcon />
        </Box> */}
      </Container>
      {isShopHovered && (
        <Box
          sx={style.scnavbar}
          onMouseEnter={handleBoxHover}
          onMouseLeave={handleBoxLeave}
        >
          <Grid
            container
            sx={{
              bgcolor: ' white ',
              height: '300px',
              // border: '1px solid black',
            }}
          >
            <Grid
              item
              xl={3}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',

                // border: '1px solid black',
                margin: 'auto 0',
              }}
            >
              <Box
                sx={{
                  display: 'flex',

                  flexDirection: 'column',
                }}
              >
                <Link className="link" style={{ fontWeight: 700 }}>
                  Brands
                </Link>
                <Link className="link underlinetext">Adidas</Link>
                <Link className="link underlinetext">Servis</Link>
                <Link className="link underlinetext">Bata</Link>
              </Box>
            </Grid>
            <Grid
              item
              xl={3}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100px',
                // border: '1px solid black',
                margin: 'auto 0',
              }}
            >
              <Box
                sx={{
                  display: 'flex',

                  flexDirection: 'column',
                }}
              >
                <Link className="link" style={{ fontWeight: 700 }}>
                  Categories
                </Link>
                <Link className="link underlinetext">Sports</Link>
                <Link className="link underlinetext">Formals</Link>
                <Link className="link underlinetext">Casuals</Link>
              </Box>
            </Grid>
            <Grid
              item
              xl={6}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{
                height: '100%',
                // border: '1px solid black',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto 0',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Box
                  component={'img'}
                  src={NewArrivalsImage}
                  sx={{
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
