import React, { Component } from "react";
import { Link } from "react-router-dom";

class OrderItem extends Component {
    constructor(props){
        super(props);
    }



    render(){
    
        const imgProduct = "/imgs/logo-mango.png";
        return(
            <div>
                <div className="">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="img-fluid" src={imgProduct}/>
                        </div>
                        <div className="col-md-6">
                            <div className="vertical-center title">
                                <li><h2 className="list-inline-item text-danger"> ProductName: {this.props.product} </h2></li>
                                <li><h4 className="list-inline-item"> UnitPrice: {this.props.unitPrice} THB </h4></li>
                                <li><h4 className="list-inline-item"> Quantity: {this.props.quantity} </h4></li>
                                
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="vertical-center title">
                            <button className="btn btn-info">Edit</button>
                            <button className="btn btn-danger ml-2"
                            onClick={()=>{

                            this.props.ondelOrder(this.props.index)
                            }}>delete</button>
                            {this.props.index}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
export default OrderItem;