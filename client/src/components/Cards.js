import React from 'react';
import '../CSS/Cards.css';
import CardItem from './cardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Lets Get Started!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='Brotein/client/src/pages/Photos/health.jpg'
                            text='Explore Health articles and videos!'
                            label='Health'
                            path='./health'
                        />
                        <CardItem
                            src='../src/pages/Photos/history.jpg'
                            text='View all your saved items!'
                            label='History'
                            path='./history'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='/client/src/pages/Photos/NewMeal.jpg'
                            text='Explore recipes and create your next meal!'
                            label='New Meal'
                            path='./new-meal'
                        />
                        <CardItem
                            src='../pages/Photos/newWorkout.jpg'
                            text='Track and browse through workout ideas and map your success!'
                            label='New Workout'
                            path='./new-workout'
                        />
                        {/* <CardItem
                            src='images/img-8.jpg'
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