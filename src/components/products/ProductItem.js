import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, 
    ModalFooter,InputGroup,InputGroupAddon,Input } from 'reactstrap';


class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            text: 0,
            order:{
                id:"0",
                productName: "",
                quantity: 0,
                unitPrice: 0,
                picture:"",
            }
            
            
          };

        this.toggle = this.toggle.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.addQuantity = this.addQuantity.bind(this);
        this.delQuantity = this.delQuantity.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }


    updateInput(e){

            console.log(e.target.value);
            return e.target.value;
    }

    addQuantity(){
        var temp = this.state.order.quantity;
        if( temp >= 0){
        temp = temp + 1;
        this.setState({ order:{ quantity : temp }})
        }
    }

    delQuantity(){
        var temp = this.state.order.quantity;
        if( temp > 0){
        temp = temp - 1;
        this.setState({ order:{ quantity : temp }})
        }
    }



    render(){

        const imgProduct = "/imgs/logo-mango.png";
        const { productName,quantity,unitPrice } = this.state.order;
        return(
            <div className="col-md-3 col-sm-6">
                
                <div className="">
                <img className="img-fluid" src={imgProduct}/>
                <div className="row">
                    <h2 className="col-md-6 title">{this.props.nameProduct}</h2>
                    <h2 className="col-md-6 title text-right">{this.props.unitPriceprop} THB</h2>
                </div>
                <h4 className="title text-right">{quantity} piece</h4>
                <button className="btn-block btn btn-danger title" onClick={this.toggle}>buy</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>จำนวนสินค้า</ModalHeader>
                <ModalBody>
                    <InputGroup className="container" style={{width:"150px"}}>
                        <InputGroupAddon addonType="prepend">
                        <Button color="success" onClick={() => this.addQuantity()}>+</Button>
                        </InputGroupAddon>
                        <Input value={quantity} type="text" className="text-right" onChange={this.updateInput} style={{width:"1px"}} />
                        <InputGroupAddon addonType="append">
                        <Button color="danger" onClick={() => this.delQuantity()}>-</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="title" onClick={()=>{
                        this.props.addOrder(this.props.nameProduct,quantity,this.props.unitPriceprop)
                        this.toggle()
                    }} >ยืนยัน</Button>
                    <Button color="secondary" className="title" onClick={this.toggle}>ยกเลิก</Button>
                </ModalFooter>
                </Modal>
                </div>
               
            </div>
        )
    }
}

export default (ProductItem);