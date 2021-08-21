import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import Cart from "../components/Cart";
import "./Football.css";
import "./Shop.css";

const Basketball = () => {
	const [user, setUser] = useState(null);
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
	}, []);
	const PAGE_PRODUCTS = "products";
	const PAGE_CART = "cart";

	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const [theproduct, setState] = useState([
		{
			image: "",
			name: "",
			price: "",
			size: "",
		},
	]);
	const navigateTo = (nextPage) => {
		if (user != null) setPage(nextPage);
		else {
			window.location.assign("/login");
		}
	};

	const getCartTotal = () => {
		return cart.reduce((sum, { quantity }) => sum + quantity, 0);
	};
	var size = 4;
	const subcategory = "Basketball";

	const RunAll = async (e) => {
		const res = await fetch("Shop/alltype", {
			method: "Post",
			body: JSON.stringify({ size, subcategory }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		setState(data);
	};
	const RunType = async (e) => {
		var type = e.target.innerHTML;
		if (e.target.innerHTML == "Shirts") {
			type = "Tshirts";
		}
		const res = await fetch("Shop/onetype", {
			method: "Post",
			body: JSON.stringify({ size, subcategory, type }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		setState(data);
	};
	// useEffect(() => {
	// 	document
	// 		.querySelector(".add-all")
	// 		.addEventListener("click", RunAll.bind(this));
	// });

	return (
		<div className="main--div">
			<center>
				<div className="blocks">
					{page === PAGE_PRODUCTS && (
						<div className="div-links">
							<ul>
								<li>
									<Link className="add-all" onClick={RunAll.bind(this)}>
										All
									</Link>
								</li>
								<li>
									<Link className="add-one" onClick={RunType.bind(this)}>
										Shorts
									</Link>
								</li>
								<li>
									<Link className="add-one" onClick={RunType.bind(this)}>
										Shirts
									</Link>
								</li>
								<li>
									<Link className="add-one" onClick={RunType.bind(this)}>
										Shoes
									</Link>
								</li>
								<li>
									<Link className="add-one" onClick={RunType.bind(this)}>
										Accessories
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			</center>
			<div>
				<div className="container">
					{page === PAGE_PRODUCTS && (
						<button onClick={() => navigateTo(PAGE_CART)}>
							Go to Cart ({getCartTotal()})
						</button>
					)}
					{page === PAGE_CART && (
						<button onClick={() => navigateTo(PAGE_PRODUCTS)}>
							View Products
						</button>
					)}
					{page === PAGE_PRODUCTS && (
						<Products
							cart={cart}
							setCart={setCart}
							newproducts={theproduct}
							user={user}
						/>
					)}
					{page === PAGE_CART && (
						<Cart cart={cart} setCart={setCart} user={user} />
					)}
				</div>
			</div>
		</div>
	);
};
export default Basketball;
