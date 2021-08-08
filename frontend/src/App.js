import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home2 from "./pages/Home2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import SignUp from "./pages/SignUp";
import Marketing from "./pages/Marketing";
import Consulting from "./pages/Consulting";
import SportsCollections from "./pages/SportsCollections";
import LogIn from "./pages/LogIn";
import Football from "./pages/Football";
import Basketball from "./pages/Basketball";
import Casual from "./pages/Casual";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
	const [user, setUser] = useState(null);
	const [quan, setQuan] = useState(0);
	const Addnum = async (e) => {
		const res = await fetch("http://localhost:8000/Shop/getnumofItems", {
			method: "Post",
			body: JSON.stringify({ user }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		setQuan(data.quantity);
	};
	const rend = async () => {
		const res = await fetch("http://localhost:8000/user/getuser", {
			method: "Get",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		setUser(data.user);
	};

	useEffect(() => {
		rend();
		Addnum();
	});

	return (
		<Router>
			<Navbar user={user} quan={quan} />
			<br /> <br /> <br /> <br /> <br /> <br /> <br />
			<Switch>
				<Route path="/" exact component={Home2} />
				<Route path="/services" component={Services} />
				<Route path="/products" component={Products} />
				<Route path="/contact-us" component={Contacts} />
				<Route path="/log-in" component={LogIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/marketing" component={Marketing} />
				<Route path="/consulting" component={Consulting} />
				<Route path="/SportsCollections" component={SportsCollections} />
				<Route path="/Category_2" component={Category_2} />
				<Route path="/Category_3" component={Category_3} />
				<Route path="/Category" component={Category} />
				<Route path="/Football" component={Football} />
				<Route path="/Basketball" component={Basketball} />
				<Route path="/Casual" component={Casual} />
				<Route path="/Cart" component={Cart} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
