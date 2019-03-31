import { connect } from 'react-redux';
import * as pageActions from '../actions/addAmountOrders'
import Home from '../components/Achivement/Achivement'


function mapStateToProps(state) {
   const Ford = state.Amount.amount
   return{Ford}

}
const mapDispatchToProps = {
    addAmountOrder:pageActions.addAmountOrder,
    delAmountOrder:pageActions.delAmountOrder,
 
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
