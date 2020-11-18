import React, {Component} from "react";
import ExcerciseTable from './exercise-row';
import MealTable from './meal-row';


class Cards extends Component{
    render() {
  <div className= "card">
    <ExcerciseTable />
    <MealTable />
</div>
    }
      
    
}
export default Cards;