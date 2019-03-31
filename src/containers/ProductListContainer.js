import { connect } from 'react-redux';
import * as pageActions from '../actions/addAmountOrders'
import ProductList from '../components/products/ProductList'


function mapStateToProps(state) {

   const orders = state.Orders
   return{ orders }

}
const mapDispatchToProps = {
    addOrdersToState:pageActions.addOrdersToState,

}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
