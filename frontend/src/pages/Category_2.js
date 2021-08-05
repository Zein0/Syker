import React from "react";
import axios from "axios";
import "./Category_2.css";

class Category_2 extends React.Component {
	state = {
		posts: [],
		img: "",
	};

	async componentDidMount() {
		// const res = await axios.get("http://localhost:8000/readCatgories");
		const res = await fetch("http://localhost:8000/readCatgories", {
			method: "Get",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		const data = await res.json();
		// console.log(data);
		if (data.error) window.location.href = "http://localhost:3000/log-in";
		else {
			this.setState({ posts: data });
		}
	}

	render() {
		return (
			<div>
				<h1>Category deal</h1>

				<div className="Category">
					{this.state.posts.map((post) => (
						<div>{post.pants}</div>
					))}
				</div>
			</div>
		);
	}
}

export default Category_2;
