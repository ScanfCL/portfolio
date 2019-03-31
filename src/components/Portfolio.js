import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Portfolio extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const img = "/imgs/resume.jpg";
        return(
            <div>
                <Header/>
                <div className="col-md-5 container bgContainer2 mt-5 p-5 fadeInPage">
                <h1>Resume</h1>
                <hr/>
                <img className="img-fluid img-thumnail" src={img}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Portfolio;