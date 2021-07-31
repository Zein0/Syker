import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import Cart from "../components/Cart";
import "./Football.css";
import "./Shop.css";

const Football = () => {
	const [user, setUser] = useState(null);
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
		RunAll();
	}, []);
	const PAGE_PRODUCTS = "products";
	const PAGE_CART = "cart";

	const [cart, setCart] = useState([]);
	const [page, setPage] = useState(PAGE_PRODUCTS);
	const [theproduct, setState] = useState([
		{
			image: "uploads/2021-07-24T16:32:26.439ZAddidas.jpg",
			name: "Adidas Original",
			price: 23,
			size: "L",
		},
		{
			image: "uploads/2021-07-24T16:32:39.206ZFemale-Addidas.jpg",
			name: "Adidas Original Women",
			price: 20,
			size: "M",
		},
		{
			image:
				"uploads/2021-07-24T16:32:33.290Zessentials-stacked-logo-t-shirt.jpg",
			name: "New Balance Red",
			price: 30,
			size: "L",
		},
	]);

	var size = 4;
	const subcategory = "Football";

	const RunAll = async (e) => {
		const res = await fetch("http://localhost:8000/Shop/alltype", {
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
		const res = await fetch("http://localhost:8000/Shop/onetype", {
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
					<div className="div-links">
						<ul>
							<li>
								<Link className="add-all" onClick={RunAll.bind(this)}>
									<h3>
										{" "}
										<span className="basthis">All</span>
									</h3>
								</Link>
							</li>
							<li>
								<Link className="add-one" onClick={RunType.bind(this)}>
									<h3>
										{" "}
										<span className="basthis">Shorts</span>
									</h3>
								</Link>
							</li>
							<li>
								<Link className="add-one" onClick={RunType.bind(this)}>
									<h3>
										{" "}
										<span className="basthis">Shirts</span>
									</h3>
								</Link>
							</li>
							<li>
								<Link className="add-one" onClick={RunType.bind(this)}>
									<h3>
										{" "}
										<span className="basthis">Shoes</span>
									</h3>
								</Link>
							</li>
							<li>
								<Link className="add-one" onClick={RunType.bind(this)}>
									<h3>
										{" "}
										<span className="basthis">Accessories</span>
									</h3>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</center>
			<div>
				<div className="container">
					<Products
						cart={cart}
						setCart={setCart}
						newproducts={theproduct}
						user={user}
					/>
				</div>
			</div>
		</div>
	);
};
export default Football;
