import React from 'react';


function healthCards() {
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
                </div>
            </div>
        </div>
    )
}
export default healthCards;