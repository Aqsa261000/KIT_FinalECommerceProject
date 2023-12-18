import {
  SignUp,
  Home,
  Login,
  AdminHome,
  AdminLogin,
  VendorHome,
  VendorLogin,
  VendorSignUp,
} from '../views';

const routes = {
  userSignUp: {
    path: '/signup',
    component: <SignUp />,
  },
  userLogin: {
    path: '/login',
    component: <Login />,
  },
  userHome: {
    path: '/',
    component: <Home />,
  },
  vendorSignUp: {
    path: '/vendorsignup',
    component: <VendorSignUp />,
  },
  vendorLogin: {
    path: '/vendorlogin',
    component: <VendorLogin />,
  },
  vendorHome: {
    path: '/vendorhome',
    component: <VendorHome />,
  },

  adminLogin: {
    path: '/adminlogin',
    component: <AdminLogin />,
  },
  adminHome: {
    path: '/adminhome',
    component: <AdminHome />,
  },
};

const defaultRoutes = {
  publicRoutes: [
    routes.userSignUp,
    routes.userLogin,
    routes.vendorSignUp,
    routes.vendorLogin,
    routes.adminLogin,
    // routes.userHome,
  ],
  protectedRoutes: [routes.vendorHome, routes.adminHome, routes.userHome],
  // protectedRoutes: [routes.userHome],
  // vendorProtectedRoutes: [routes.vendorHome, routes.vendorSignUp, routes.vendorLogin],
  // adminProtectedRoutes: [routes.adminHome],
};

export default defaultRoutes;
