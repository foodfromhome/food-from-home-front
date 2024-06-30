import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import DishMap from "../../components/Map/Map";
import styles from './Dish.module.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Dish = () => {
    const { id } = useParams();
    const [dish, setDish] = React.useState(null);

    useEffect(() => {
        const fetchDish = async () => {
            const result = await axios.get(`http://31.128.43.241:8000/api/v1/meals/${id}`);
            setDish(result.data);
        };

        fetchDish();
    }, [id]);

    if (!dish) {
        return <div>Loading...</div>;
    }
    const addToCart = () => {
        axios.post("http://31.128.43.246:8000/api/v1/5/carts/",
            {
                meals_id: dish.id,
                price: dish.price,
                quantity: 1
            }).then(function (response){
                console.log(response)

            })
            .catch(function (error) {
                console.log(error)

            })
    };


    return (
        <div>
            <div className={styles.card}>
            <img src={dish.images} alt={dish.name} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.dish}>{dish.name}</h1>
                    <p className={styles.dish__text}>{dish.description}</p>
                    <button className={styles.button} onClick={addToCart}>Добавить в корзину</button>
                </div>
                {/*<DishMap coordinates={dish.coordinates} />*/}
            </div>
        </div>
    );
};

export default Dish;
