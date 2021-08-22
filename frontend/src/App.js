import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home2 from "./pages/Home2";
import { Helmet } from "react-helmet";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
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
		const res = await fetch("Shop/getnumofItems", {
			method: "Post",
			body: JSON.stringify({ user }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		setQuan(data.quantity);
	};
	const rend = async () => {
		const res = await fetch("user/getuser", {
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
			<Helmet>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0001, maximum-scale=1.0001,minimum-scale=1.0001, user-scalable=0"
				/>
			</Helmet>
			<Navbar user={user} quan={quan} />
			<br /> <br /> <br /> <br /> <br /> <br /> <br />
			<Switch>
				<Route path="/" exact component={Home2} />
				<Route path="/contact-us" component={Contacts} />
				<Route path="/log-in" component={LogIn} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/Football" component={Football} />
				<Route path="/Basketball" component={Basketball} />
				<Route path="/Casual" component={Casual} />
				<Route path="/Cart" component={Cart} />
				<Redirect path="/"></Redirect>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
