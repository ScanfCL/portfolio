import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import OrderItem from "./OrdersItem";

class OrdersList extends Component {
    constructor(props){
        super(props);
        
    this.showOrders = this.showOrders.bind(this)
    }

    showOrders(){
        let ford = []
        if(this.props.orders.length > 0){
            this.props.orders.map((order) => {
                return(
                    ford.push(<div>
                        <h2></h2>
                        <OrderItem
                        />
                    </div>)
                )
            })

            return ford

        }
    }
    showOrder2(){
        
        if(this.props.orders.length > 0){
            return this.props.orders.map((data,i) => (
                <OrderItem key={i} 
                index={i} 
                product={data.product} 
                quantity={data.quantity} 
                unitPrice={data.unitPrice} 
                ondelOrder={this.props.delOrder}

                />
            ))
        }
    }


    render(){
    
        const imgProduct = "/imgs/logo-mango.png";
        console.log(this.props)
        return(
            <div>
                <Header/>
                <div className="container fadeInPage">
                    <div className="row mt-5">
                        <h1 className="col-md-6 text-right">Order List</h1>
                        <h3 className="col-md-6 text-center text-info mt-2">Total Price : {this.props.totalPrice} THB</h3>
                    </div>
                    {           
                               this.showOrder2()                             
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}
export default OrdersList;
