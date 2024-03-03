export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ALL_OF_THIS_TYPE = "REMOVE_ALL_OF_THIS_TYPE";
export const WIPE_CART = "WIPE_CART";

const initialState = {
  carrello: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        carrello: [...state.carrello, action.payload]
      };
    case REMOVE_FROM_CART:
      const indexToRemove = state.carrello.findIndex(item => item.id === action.payload.id);
      return {
        ...state,
        carrello: [
          ...state.carrello.slice(0, indexToRemove),
          ...state.carrello.slice(indexToRemove + 1)
        ]
      };
    case REMOVE_ALL_OF_THIS_TYPE:
      return {
        ...state,
        carrello: state.carrello.filter(item => item.id !== action.payload.id)
      };
    case WIPE_CART:
      return {
        ...state,
        carrello: []
      };
    default:
      return state;
  }
};

export default cartReducer;
