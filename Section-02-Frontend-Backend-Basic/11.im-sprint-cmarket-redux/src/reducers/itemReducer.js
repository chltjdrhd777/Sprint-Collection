import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

/*  
Item Reducer
  ✕ ADD_TO_CART 액션에 따라 cartItems 상태가 변해야 합니다 (2 ms)
  ✕ REMOVE_FROM_CART 액션에 따라 cartItems 상태가 변해야 합니다 (2 ms)
  ✕ SET_QUANTITY 액션에 따라 cartItems 상태가 변해야 합니다 (2 ms)
  ✕ 리듀서는 다른 상태의 값을 보존해야 합니다
*/

const itemReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })

      break;
    case REMOVE_FROM_CART:
      //TODO
      return Object.assign({}, state, {cartItems: state.cartItems.filter(el => el.itemId !== action.payload.itemId)});

      break;
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId);
      // let newArr = state.cartItems.slice();
      // newArr[idx].quantity = action.payload.quantity;
      // return Object.assign({}, state, {cartItems: newArr});
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.slice(0, idx), action.payload, ...state.cartItems.slice(idx + 1)]
      })

      break;
    default:
      return state;
  }
}

export default itemReducer;