export default function(state={ amount:0 },action) {

    switch(action.type) {
        case'START_FETCH_DOG':
            return {
                ...state,
                loading:true
            }
        case'SUCCESS_FETCH_DOG':
            return {
                dogIMG:action.dogIMG,
                loading:false
            }
        case'ERROR_FETCH_DOG':
            return {
                ...state,
                loading:false,
                error:true
            }

        case'ADD_AMOUNT_ORDER':
            state.amount += 1;
            return {
                ...state,
            }

        case'DEL_AMOUNT_ORDER':
            state.amount -=1;
            return {
                ...state,
            }

        case'FETCH_ORDERS':
        // state.orders.push({ product:product, quantity: quantity, unitPrice:AunitPrice});
        return {
            ...state,
        }
        default:
            return state
    }
    }
