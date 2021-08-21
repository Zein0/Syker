import React from "react";

export default function Cart({ cart, setCart }) {
	const getTotalSum = () => {
		return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
	};

	const setQuantity = (product, amount) => {
		const newCart = [...cart];
		newCart.find((item) => item.name === product.name).quantity = amount;
		setCart(newCart);
	};

	const removeFromCart = (productToRemove) => {
		setCart(cart.filter((product) => product !== productToRemove));
	};
	const Order = async () => {
		console.log(cart);
		const res = await fetch("cart/order", {
			method: "POST",
			body: JSON.stringify({ cart }),
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
		setCart([]);
	};

	return (
		<div>
			<div className="contact-box">
				{cart.map((product, idx) => (
					<div className="product-comp" key={idx}>
						<h3>{product.name}</h3>
						<h4>{product.size}</h4>
						<h3>${product.price}</h3>
						<input
							value={product.quantity}
							onChange={(e) => setQuantity(product, parseInt(e.target.value))}
						/>
						<img className="items-img" src={product.image} alt={product.name} />
						<button className="btn" onClick={() => removeFromCart(product)}>
							Remove
						</button>
					</div>
				))}
			</div>
			{cart.length > 0 && <button onClick={() => Order()}>Order</button>}
			{cart.length > 0 && <div>Total Cost: ${getTotalSum()}</div>}
		</div>
	);
}
