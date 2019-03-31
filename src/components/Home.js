import React, { Component } from "react";
import Headers from "./Header";
import { Link } from "react-router-dom";
import './Home.scss';

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid fadeInPage">
            <div className="container">
            <div className="col-md-8 p-5 pt-10 mt-5 container bgContainer ">
                <div className="text-white heighContent title">
                    <h5>Hello !</h5>
                    <p>
                        I'm SON
                        ,This is my world
                    </p>
                    <button className="list-inline-item title btn btn-sm animated-button victoria-four" style={{marginTop:"150px"}}>
                        <Link to="/portfolio" className="btn5" style={{ textDecoration: 'none',color:'black' }}>> GET START</Link>
                    </button>
                </div>
            </div>
            <div class="content mt-5">
                <div class="content__container">
                    <p class="content__container__text">
                    Welcome
                    </p>
                    <ul class="content__container__list ml-5">
                    <li class="content__container__list__item ml-2">to my world !</li>
                    <li class="content__container__list__item ml-2">visiter !</li>
                    <li class="content__container__list__item ml-2">users !</li>
                    <li class="content__container__list__item ml-2">everybody !</li>
                    </ul>
                </div>
            </div>                                                                                      
            </div>
            
            </div>
        )
    }
}


export default Home;
