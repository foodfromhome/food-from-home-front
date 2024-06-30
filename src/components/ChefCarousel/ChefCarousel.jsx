import React from 'react';
import DishCard from '../DishCard/DishCard';
import styles from './ChefCarousel.module.css'

const ChefCarousel = ({ chef }) => {
    console.log(chef)
    return (
        <div className={styles.chef__carousel}>
            <h2 className={styles.chef__title}>{chef.chefName}  {chef.address}</h2>
            <div className={styles.carousel}>
                {chef.dishes.map(dish => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default ChefCarousel;
