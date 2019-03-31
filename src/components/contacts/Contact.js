import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

class Contact extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header/>
                <div className="container title col-md-5 bgContainer2 p-5 mt-5 fadeInPage">
                    <h2>Contact me</h2>
                    <hr/>
                    <h5>My name is Nutchapon Kaewsopa</h5>
                    <h5>Nickname's Son</h5>
                    <li>Phone : +66 98 6688018</li>
                    <li>Email : sonnutchapon@gmail.com</li>
                    <li>Facebook : Nutchapon Kaewsopa</li>

                    <h2 className="mt-5">University</h2>
                    <hr/>
                    <h5>King Mongkut’s University of Technology Thonburi (KMUTT)</h5>
                    <h5>126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand</h5>
                    <li><h6 className="list-inline-item">Phone:</h6> +66 2470 8000, +66 2427 0039</li>
                    <li><h6 className="list-inline-item">Email:</h6> info@kmutt.ac.th</li>
                    <li><h6 className="list-inline-item">Fax:</h6> +66 2427 8412</li>
                    <li><h6 className="list-inline-item">Website:</h6> www.kmutt.ac.th</li>

                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;
