import React, { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AlertState from "./context/alert/alertState";
import AuthState from "./context/auth/authState";
import { signUp, Home, Login, ProductForm, Products, EditForm } from "./views";
import { AdminHome, AdminLogin } from "./views/AdminDashboard";
import { VendorHome, VendorLogin, VendorSignUp } from "./views/VendorDashboard";
import { ProductDataProvider } from "./ProductContext/ProductDataContext";
// import BasicAlert from './components/common/Alert';
const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <CssBaseline />
            {/* Yahan par routes aayeghe */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<signUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/vendorsignup" element={<VendorSignUp />} />
              <Route path="/vendorlogin" element={<VendorLogin />} />
            </Routes>
            <div className="dashboard">
              <VendorHome />
              <ProductDataProvider>
                <Routes>
                  <Route path="/products" element={<Products />} />
                  <Route path="/productform" element={<ProductForm />} />
                  <Route path="/edit/:_id" element={<EditForm />}></Route>
                </Routes>
              </ProductDataProvider>
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
