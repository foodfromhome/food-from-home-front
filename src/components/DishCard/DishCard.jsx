import React from 'react';
import styles from './DishCard.module.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";

const DishCard = ({ dish }) => {

    const navigate = useNavigate();

    const addToCart = () => {
        axios.post("http://31.128.43.246:8000/api/v1/5/carts/",
            {
                meals_id: dish._id,
                price: dish.price,
                quantity: 1
            }).then(function (response){
            console.log(response)

        })
            .catch(function (error) {
                console.log(error)

            })
    };
    const onImgClick = () => {
        navigate(`/dish/${dish._id}`)
    }
    return (
        <div className={styles.container}>
            <div className={styles.card__list}>
            <div className={styles.card}>
                <img src={dish.images} onClick={onImgClick} alt={dish.name} className={styles.image}/>
                <h3 className={styles.card__title}>{dish.name}</h3>
                <div className={styles.info}>
                    <h4 onClick={addToCart} className={styles.price}>{dish.price} Руб.</h4>
                    {/*<button className={styles.button}  onClick={addToCart}></button>*/}
                </div>


            </div>
            </div>
        </div>

    );
};

export default DishCard;
