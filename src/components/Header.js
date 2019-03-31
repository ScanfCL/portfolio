import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component{
    constructor(props){
        super(props);
    }

toContactMe(){
    return(
        <div>
            <Link className="textLink" to="/contact">Contact</Link>
        </div>
    )
}
    render(){
        return(

            <div className="container-fluid colorHeader">
                <div className="row p-4">
                    <div className="row col-md-8 text-left ">
                        <h1 className="title">My Portfolio</h1>
                    </div>
                    <div className="col-md-4 text-right mt-3">
                        <ul className="list-inline">

                            <li className="list-inline-item title mr-5"><Link to="/" className="textMenu" style={{ textDecoration: 'none',color:'black' }}>Home</Link></li>
                            <li className="list-inline-item title mr-5"><Link to="/achivement" className="textMenu" style={{ textDecoration: 'none',color:'black' }}>Achivement</Link></li>
                            <li className="list-inline-item title mr-5"><Link to="/portfolio" className="textMenu" style={{ textDecoration: 'none',color:'black' }}>Portfolio</Link></li>
                            <li className="list-inline-item title btn btn-sm animated-button victoria-four">
                                <Link to="/contact" className="btn5" style={{ textDecoration: 'none',color:'black' }}>Contact</Link>
                            </li>



                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}
export default Header;
