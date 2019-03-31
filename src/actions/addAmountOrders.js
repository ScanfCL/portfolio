export const enterPage = (namepage = {}) => dispatch => {
    dispatch({
        type:'ENTERPAGE',
        payload:namepage})
 }
 export const startFetching = () => ({
    type:'START_FETCH_DOG'
 });

 export const editText = (name = {},i=0) => {
   return { type:'EDITTEXT',
   text:name, 
   number:i
   }
}


export const addAmountOrder = (amount = 0) => {
   return {
      type:'ADD_AMOUNT_ORDER',
      text:amount,
   }
}

export const delAmountOrder = (amount = 0) => {
   return {
      type:'DEL_AMOUNT_ORDER',
      text:amount,
   }
}

export const addOrdersToState = (orders = [],totalPrice = 0) => {
   return {
      type:'FETCH_ORDERS',
      orders: orders,
      totalPrice: totalPrice,
   }
}

export const delOrder = (orderIndex = 0) => {
         return {
            type:'DELETE_ORDERS',
            index: orderIndex,
         }
}



