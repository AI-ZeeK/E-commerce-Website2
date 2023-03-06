import React from "react";
import Navbar from "../components/Navbar";
import CartItems from "../components/CartItems";

const HomePage = () => {
	return <>
		<Navbar />
		<div className='cart-section-block'>
			
		<CartItems />
		</div>
		</>;
};

export default HomePage;
