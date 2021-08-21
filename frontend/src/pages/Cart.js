import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import ImageSlider from "../components/ImageSlider";
import { teddyfresh } from "../components/SliderData";

function Cart() {
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([
		{
			image: "",
			name: "",
			price: "",
			quantity: "",
		},
	]);
	const RemoveFromCart = async (product) => {
		const res = await fetch("shop/delete", {
			method: "PUT",
			body: JSON.stringify({
				name: product.name,
			}),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		getCart();
	};
	const getTotal = () => {
		var tots = 0;
		cart.map((item) => {
			tots += item.price * item.quantity;
		});
		return tots;
	};
	const OrderCart = async () => {
		const res = await fetch("cart/order", {
			method: "POST",
			body: JSON.stringify({ cart, TotalPrice: getTotal() }),
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		await fetch("shop/OrderCart", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		if (data.status === "success") {
			alert("Order Sent.");
			window.location.assign("/");
		} else if (data.status === "fail") {
			alert("Order failed to send.");
		}
	};
	const getCart = async () => {
		const res = await fetch("shop/getcart", {
			method: "Post",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		if (data.error) {
			window.location.assign("/Log-in");
		}
		if (data.cart != null) {
			console.log(data.cart);
			setCart(data.cart);
		}
		console.log(cart);
	};
	useEffect(async () => {
		getCart();
		// const rend = async () => {
		// 	const res = await fetch("http://localhost:8000/user/getuser", {
		// 		method: "Get",
		// 		headers: { "Content-Type": "application/json" },
		// 		credentials: "include",
		// 	});
		// 	const data = await res.json();
		// 	setUser(data.user);
		// 	/* getCart(); */
		// };

		// 	fetch("http://localhost:8000/user/getuser", {
		// 		method: "Get",
		// 		headers: { "Content-Type": "application/json" },
		// 		credentials: "include",
		// 	})
		// 		.then((response) => {
		// 			return response.json();
		// 		})
		// 		.then((json) => {
		// 			setUser(json);
		// 		});
		// 	console.log("user", user);
		// 	//getCart();
	}, []);

	return (
		<div>
			<div className="container">
				<div className="contact-box">
					{cart.map((item) => (
						<div className="left">
							{console.log(item)}
							<h2>{item.name}</h2>
							<img className="homeImage" src={item.image} />
							<br />
							<span>Quantity :{item.quantity}</span>
							<br />
							<h2>Price per Unit: {item.price}$</h2>

							<div className="shopNow-Container">
								<Link>
									<button className="btn2" onClick={() => RemoveFromCart(item)}>
										{" "}
										delete{" "}
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="Total">
				<center>
					<h3>
						Total Price : <span>{getTotal()}$</span>
					</h3>
					<button className="btn-order" onClick={() => OrderCart()}>
						Order
					</button>
				</center>
			</div>
		</div>
	);
}

export default Cart;
