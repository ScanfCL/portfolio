import { connect } from 'react-redux';
import * as pageActions from '../actions/addAmountOrders'
import OrderList from '../components/orders/OrdersList'



function mapStateToProps(state) {

   const orders = state.Orders.ordersState
   const totalPrice = state.TotalPrice.totalPriceState
   return{ orders, totalPrice }

}
// const mapDispatchToProps = {
//     addOrdersToState:pageActions.addOrdersToState,
//     delOrder:pageActions.delOrder,

// }

const mapDispatchToProps = dispatch =>({
    
    delOrder: (orderIndex = 0) => {
       

        return dispatch(pageActions.delOrder(orderIndex))
    },
    addOrdersToState:pageActions.addOrdersToState,
    
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderList)

