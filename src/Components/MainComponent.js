import React,{Component} from 'react';
import {DISHES} from '../shared/dishes'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'
import Menu from './Menucomponents'
import Cv from './cv'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
    constructor(props){
    super(props)
    this.state = {
      dishes:DISHES,
      comments: COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    }
}
    OnDishSelect(dishId){
        this.setState({
            selectedDish:dishId
        })
    }
  render(){
    const DishWithId = ({match})=> {
        return(
            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.DishId,10))[0]}
                comments={this.state.comments.filter((com)=>com.dishId===parseInt(match.params.DishId,10))}/>
        );
    }
        const HomePage = ()=>{
            return(
                <Home dish = {this.state.dishes.filter((dish)=>dish.featured)[0]}
                leader = {this.state.leaders.filter((lead)=>lead.featured)[0]}
                promotion = {this.state.promotions.filter((promo)=>promo.featured)[0]}
                comment = {this.state.comments.filter((com)=>com.featured)[0]}/>
            );
    }
    const au = ()=>{
        return(
            <About leaders={this.state.leaders}/>
        );
    }
    return(
        <div className="container">
            <Cv/>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={()=><Menu dishes = {this.state.dishes}/>}/>
                <Route path="/menu/:DishId" component={DishWithId}/>
                <Route exact path="/contactus" component={Contact}/>
                <Route exact path="/aboutus" component={au}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
        </div>
        );
    }
} 
export default Main;
