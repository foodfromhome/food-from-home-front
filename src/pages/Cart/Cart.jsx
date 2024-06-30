import React, {useEffect, useState} from 'react';
import CartItem from '../../components/CartItem/CartItem';
import {useCart} from "../../CartContext/CartContext";
import axios from "axios";
import {redirect, useNavigate} from "react-router-dom";

const Cart = () => {
    const [appState, setAppState] = useState([])
    let [meals, setMeals] = useState([])
    let [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (meals.length == 0) {
            const apiUrl = axios.get("http://31.128.43.246:8000/api/v1/carts/5")
                .then((resp) => {
                    setAppState(resp.data)
                })
        }

    }, [])

    useEffect(() => {
        console.log(appState)
        appState.forEach((element) =>
            axios.get(`http://31.128.43.241:8000/api/v1/meals/${element.meals_id}`)
                .then(function (response) {
                    setMeals(current => [...current, response.data]);
                })
                .catch(function (error) {
                    console.log(error)
                })
        )
    }, [appState]);


    useEffect(() => {

        const url = () => {
            if (clicked){
            axios.post("http://31.128.43.246:8001/api/v1/5/orders",
                {
                    address: "Кронверкский проспект 49",
                    city: "СПБ",
                    comment: "Оплата заказа"
                }).then(function (response) {
                const orderId = response.data.id
                axios.post(`http://31.128.43.246:8001/api/v1/orders/${orderId}/confirm`,
                    {}).then(function (response) {
                        redirect(response.data.url);
                    }
                );
            })}
            // clearCart(); // Очистка корзины после оплаты
        };
        url()
    },[clicked]);

    const buttonHandler = () => {
        setClicked(current => !current)
    }
        return (
            <div className="cart">
                {meals.map(item => (
                    <CartItem key={item.meals_id} item={item}/>
                ))}
                {/*<button>Оплатить</button>*/}
                <button onClick={buttonHandler}>Оплатить</button>
            </div>
        );

}
export default Cart;
