import React, { Component } from "react";
import ProductList from '../products/ProductList';
import Footer from "../Footer";
import Header from "../Header";


class Achivement extends Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false
          };
        console.log(this.props)
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render(){
    return(
        <div className="container-fluid">
            <Header/>
            <ProductList Ford={this.props.Ford} addAmountOrder={this.props.addAmountOrder}
            delAmountOrder={this.props.delAmountOrder}/>
            
        
            <Footer/>
        </div>
        )
    }
}


export default Achivement;