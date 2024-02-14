import { ADD_TO_CART } from '../actioncreator/actionCreator';

const initialState = {

      carrello: [],

  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {type: action.type, carrello: [...state.carrello, action.payload]}
      default:
        return state;
    }
  }

  export default cartReducer