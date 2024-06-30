import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Dish from './pages/Dish/Dish';
import Cart from './pages/Cart/Cart';
import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation';
import {CartProvider} from "./CartContext/CartContext";
import Stream from "./pages/Stream/Stream";

function App() {
    return (
        <CartProvider>
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dish/:id" element={<Dish/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/payment-confirmation" element={<PaymentConfirmation/>}/>
                        <Route path="/stream" element={<Stream/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </CartProvider>
    );
}

export default App;
