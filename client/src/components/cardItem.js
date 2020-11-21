import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    console.log();
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img
                            className='cards__item__img'
<<<<<<< HEAD
                            alt=' Image'
=======
                            alt='Image'
>>>>>>> 078b14de124c111c389118bafd8c5916fa378f20
                            src={props.src}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;