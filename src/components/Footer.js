import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <hr/>
                <div className="text-center title text-uppercase">
                    <span className="textPink">Powered by son </span> | <span className="text-muted">Contact By Email : sonnutchapon@gmail.com</span>
                </div>
            </div>
        )
    }
}
export default Footer;