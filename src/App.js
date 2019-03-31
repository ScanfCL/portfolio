import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Portfolio from './components/Portfolio';
import Contact from './components/contacts/Contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from './components/error/NotFound';
import Achivement from './components/Achivement/Achivement';
import AchiveContainer from './containers/ProductListContainer'
import OrdersList from './containers/OrderContainer';
import OrderItem from './components/orders/OrdersItem';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "red"
    };
  }

  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/achivement" component={AchiveContainer}/>
        <Route exact path="/orderslist" component={OrdersList}/>

        <Route component={NotFound}/>
      </Switch>
    )
}

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
