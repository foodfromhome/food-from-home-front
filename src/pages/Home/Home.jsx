import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChefCarousel from '../../components/ChefCarousel/ChefCarousel';
import styles from './Home.module.css'

const Home = () => {
    const [chefs, setChefs] = useState([]);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchChefs = async () => {
            const result = await axios.get('http://45.141.102.127:8090/api/users/chefs');
            setChefs(result.data);
            console.log(result.data)
        };

        const fetchDishes = async () => {
            const result = await axios.get('http://45.141.102.127:8090/api/meals');
            setDishes(result.data);
            console.log(result.data)

        };

        fetchChefs();
        fetchDishes();
    }, []);

    const chefsWithDishes = chefs.map(chef => ({
        ...chef,
        dishes: dishes.filter(dish => dish.user_id === chef.userId)
    }));

    return (
        <div>
            {chefsWithDishes.map(chef => (
                <ChefCarousel key={chef.id} chef={chef} />
            ))}
        </div>
    );
};

export default Home;
