import React, { useState } from "react";
import { Link } from "react-router-dom";

const HOME_GARDEN = "home and garden";
const UTILITY = "utility";

export default function Products({ setCart, cart, newproducts, user }) {
	const [products] = useState(newproducts);

	const addToCart = async (product) => {
		if (user != null) {
			const res = await fetch("shop/addtoCart", {
				method: "POST",
				body: JSON.stringify({
					user: user._id,
					name: product.name,
				}),
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			// const data = await res.json();
			// console.log(data);
			// let newCart = [...cart];
			// let itemInCart = newCart.find((item) => product.name === item.name);
			// if (itemInCart) {
			// 	itemInCart.quantity++;
			// } else {
			// 	itemInCart = {
			// 		...product,
			// 		quantity: 1,
			// 	};
			// 	newCart.push(itemInCart);
			// }
			// setCart(newCart);
		} else {
			window.location.assign("/Log-in");
		}
	};

	return (
		<div className="contact-box">
			{newproducts.map((product, idx) => (
				<div className="left">
					<h2>{product.name}</h2>
					<img
						className="homeImage"
						src={"http://localhost:8000/" + product.image}
					/>
					<span>Size:{product.size}</span>
					<br />
					<h2>Price: {product.price}$</h2>
					<div className="shopNow-Container">
						<Link>
							<button className="btn2" onClick={() => addToCart(product)}>
								{" "}
								Add to cart{" "}
							</button>
						</Link>
					</div>
				</div>
			))}
			{/* {console.log(newproducts)}
			<div className="products-comp">
				{newproducts.map((product, idx) => (
					<div className="product-comp" key={idx}>
						<img
							className="items-img"
							src={"http://localhost:8000/" + product.image}
							alt={product.name}
						/>
						<div className="cont">
							<h3>{product.name}</h3>
							<h4>Size : {product.size}</h4>
							<h3> Price : {product.price}$</h3>
						</div>
						<button className="btn btn-prod" onClick={() => addToCart(product)}>
							Add to Cart
						</button>
					</div>
				))}
			</div> */}
		</div>
	);
}
