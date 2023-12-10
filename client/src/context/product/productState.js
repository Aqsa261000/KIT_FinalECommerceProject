import React, { useId, useReducer } from 'react';
import ProductContext from './productContext';
import reducerMethod from './productReducer';
import {
  ADD_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  CURRENT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
} from '../type';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const ProductState = ({ children }) => {
  const id = useId();
  const initialState = {
    products: [],
    currentContact: null,
    filteredProducts: [],
  };

  const [state, dispatch] = useReducer(reducerMethod, initialState);

  //   const getAllProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://127.0.0.1:8080/api/products/products/'
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const allproducts = await response.json();
  //       setProducts(allproducts);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  // get contacts
  const getAllProductsHandler = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/products/products/');

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      console.error('Error Response:', err.response);
    }
  };

  //   // add contact
  //   const addContactHandler = async (data) => {
  //     if (localStorage.token) {
  //       setAuthToken(localStorage.token);
  //     }

  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };

  //     try {
  //       const res = await axios.post('api/contacts', data, config);
  //       dispatch({
  //         type: ADD_CONTACT,
  //         payload: res.data,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };  

  //   // current contact
  //   const currentContactHandler = (data) => {
  //     dispatch({
  //       type: CURRENT_CONTACT,
  //       payload: data,
  //     });
  //   };

  //   // clear current contact
  //   const clearCurrentContactHandler = () => {
  //     dispatch({
  //       type: CLEAR_CURRENT_CONTACT,
  //     });
  //   };

  //   // update contact
  //   const updateContactHandler = async (data) => {
  //     if (localStorage.token) {
  //       setAuthToken(localStorage.token);
  //     }

  //     const config = {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };

  //     try {
  //       const res = await axios.put(`api/contacts/${data.id}`, data, config);
  //       console.log(res);
  //       dispatch({
  //         type: UPDATE_CONTACT,
  //         payload: data,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  // delete contact
  const deleteProductHandler = async (id) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      await axios.delete(`api/products/products/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //   // filter contact
  //   const searchContactsHandler = (text) => {
  //     dispatch({
  //       type: SEARCH_CONTACT,
  //       payload: text,
  //     });
  //   };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        currentContactData: state.currentContact,
        filteredProducts: state.filteredProducts,
        getAllProducts: getAllProductsHandler,
        // addContact: addContactHandler,
        // updateContact: updateContactHandler,
        // currentContact: currentContactHandler,
        // clearCurrentContact: clearCurrentContactHandler,
        deleteProduct: deleteProductHandler,
        // searchContacts: searchContactsHandler,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
