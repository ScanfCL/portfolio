import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

class ProductList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            orders : [],
            toltalPrice : 0,
        }
        this.addOrder = this.addOrder.bind(this);
    }


    showProduct(name,unitPrice){
        return(
            <ProductItem addOrder={this.addOrder} nameProduct={name} unitPriceprop={unitPrice}/>
        ) 
    }

    addOrder(product,quantity,AunitPrice){
        let temp = 0,i = 0;
        let findOrder = this.state.orders.find(order => order.product == product);
        if(findOrder){
            findOrder.quantity = quantity;
        } else {
            this.state.orders.push({product: product, quantity: quantity, unitPrice:AunitPrice});
        }
        
        for(i=0 ; i<this.state.orders.length ; i++){
            temp = temp + (this.state.orders[i].unitPrice * this.state.orders[i].quantity);
        }
        
        this.setState({ orders : this.state.orders, toltalPrice: temp}, () => {

            // console.log("OrderinProdict|",this.state.orders)            
        });
       
    }


    render(){
    return(
        <div>
            <Header/>
            <div className="p-5 fadeInPage">
                <div className="bgContainer2 container">
                <h1 className="text-center mt-3">Product List</h1>
                </div>
                <div className="text-right"><button className="btn btn-primary title" onClick={()=>{this.props.addOrdersToState(this.state.orders,this.state.toltalPrice)}}><Link to="/orderslist" style={{ textDecoration: 'none',color:'white' }}>Confirm Order</Link></button></div>
                <div className="row mt-5">    
                    {this.showProduct('Pepsi',25)}
                    {this.showProduct('Tea',60)}
                    {this.showProduct('Milk',50)}
                    {this.showProduct('Coffee',80)}
                    
                </div>
            </div>
            <Footer/>

        </div>
        )
    }
}


export default ProductList;