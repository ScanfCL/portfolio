export default function(state={ ordersState: [],totalPriceState : 0 },action) {

    switch(action.type) {
        case'FETCH_ORDERS':{
          console.log("test2")
          state.ordersState = action.orders
          state.totalPriceState = action.totalPrice
          return {
              ...state,
          }
        }
        case'DELETE_ORDERS':{  
          state.ordersState.splice(action.index, 1)
          return {
              ...state,
          }
        }
        default:{
            return state
        }
    }
}
