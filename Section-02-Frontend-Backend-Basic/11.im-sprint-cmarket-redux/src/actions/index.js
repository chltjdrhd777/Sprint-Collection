// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

/*
Shopping Cart Actions
  addToCart는 ADD_TO_CART 액션을 생성해야 합니다 (9 ms)
  removeFromCart는 REMOVE_FROM_CART 액션을 생성해야 합니다 (6 ms)
  setQuantity는 SET_QUANTITY 액션을 생성해야 합니다 (1 ms)
*/

// actions creator functions
export const addToCart = (itemId) => { //카트 추가 액션
  return { 
    type: ADD_TO_CART,
    payload: {
      quantity: 1, //수량이 새로 1로되고
      itemId //내가 넣은 아이템이 
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    //TODO
    type: REMOVE_FROM_CART,
    payload: {
      itemId
    }
  }
}

export const setQuantity = (itemId, quantity) => {
  return {
    //TODO
    type: SET_QUANTITY,
    payload: {
      itemId: itemId,
      quantity: quantity
    }
  }
}

export const notify = (message, dismissTime = 5000) => dispatch => {
  const uuid = Math.random()
  dispatch(enqueueNotification(message, dismissTime, uuid))
  setTimeout(() => {
    dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}