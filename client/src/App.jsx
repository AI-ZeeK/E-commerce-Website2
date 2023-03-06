import { useState } from "react";
import "@stripe/stripe-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./App.scss";
import "./output.css";
import Cart from "./pages/Cart";
import CartItems from "./components/CartItems";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Auth from "./pages/Auth";
import LandingPage from "./pages/LandingPage";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<>
			<div className="overflow">
				{/* <Navbar /> */}

				<main className="main">
					<Routes>
						<Route exact path="/" element={<LandingPage />} />
						<Route exact path="/auth" element={<Auth />} />
						<Route path="/app" element={<HomePage />} />
						<Route path="/app/cart" element={<Cart />} />

						<Route exact path="*" element={<h1>Not Found</h1>} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
