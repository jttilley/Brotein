import React from 'react';
import '../css/Cards.css';
import CardItem from './cardItem';
import health from '../images/health.jpg';
import history from '../images/history.jpg';
import newMeal from '../images/NewMeal.jpg';
import newWorkout from '../images/newWorkout.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Lets Get Started!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={health}
                            text='Explore Health articles and videos!'
                            label='Health'
                            path='./health'
                        />
                        <CardItem
                            src={history}
                            text='View all your saved items!'
                            label='History'
                            path='./history'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={newMeal}
                            text='Explore recipes and create your next meal!'
                            label='New Meal'
                            path='./new-meal'
                        />
                        <CardItem
                            src={newWorkout}
                            text='Track and browse through workout ideas and map your success!'
                            label='New Workout'
                            path='./new-workout'
                        />
                        {/* <CardItem
                            src='images/images-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up' 
                         />  */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;