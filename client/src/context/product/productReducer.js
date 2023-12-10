import {
  ADD_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  CURRENT_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  UPDATE_PRODUCT,
} from '../type';

const reducerMethod = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        contacts: state.contacts.map((data) => {
          if (data._id.toString() === action.payload.id.toString()) {
            return action.payload;
          }
          return data;
        }),
      };
    case CURRENT_PRODUCT:
      return { ...state, currentContact: action.payload };
    case CLEAR_CURRENT_PRODUCT:
      return { ...state, currentContact: null };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((data) => data._id !== action.payload),
      };
    case SEARCH_PRODUCT:
      const regex = new RegExp(`${action.payload}`, 'gi');
      return {
        ...state,
        filteredProducts: state.contacts.filter((data) => {
          return (
            data.name.includes(data.name.match(regex)) ||
            data.email.includes(data.email.match(regex))
          );
        }),
      };
    default:
      return state;
  }
};

export default reducerMethod;