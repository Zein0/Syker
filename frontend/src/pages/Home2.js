import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home2.css";
import axios from "axios";

import {
	SliderDataSports_1,
	SliderDataSports_2,
	SliderDataSports_3,
	SliderDataCasual_1,
	SliderDataCasual_2,
	SliderDataCasual_3,
	HomeBack,
} from "../components/SliderData";
import Slideshow from "../components/SlideShow";
import SlideshowBack from "../components/SlideShowBack";
import ImageSlider from "../components/ImageSlider";
const API_URL = "";
class Home2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
	}
	componentDidMount() {
		axios.get("home").then((res) => {
			console.log(res);

			this.setState({ posts: res.data });
		});
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="contact-box">
						<div className="left">
							<br />

							<h2>Football</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
								mi ipsum faucibus vitae aliquet nec.
							</p>
							<div className="shopNow-Container">
								<Link to="/Football">
									<button className="btn2"> SHOP NOW </button>
								</Link>
							</div>
						</div>

						<div class="right">
							<div className="container-box-Image">
								<Slideshow slides={SliderDataSports_1} />
							</div>
						</div>
					</div>
				</div>
				<br />
				<center>
					<h3>
						Best<span></span>
						<span> Seller</span>
					</h3>
					<div>
						<br />
						{this.state.posts != undefined && (
							<div className="Category-best">
								{this.state.posts.splice(3, 3).map((post) => (
									<div>
										<img
											className="best"
											alt={post.imageData}
											src={API_URL + "/" + post.imageData}
											width="200"
											height="220"
										/>
									</div>
								))}
							</div>
						)}
						<br />
					</div>
				</center>
				<div className="container">
					<div className="contact-box">
						<div className="left">
							<br />

							<h2>BasketBall</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
								mi ipsum faucibus vitae aliquet nec.
							</p>
							<div className="shopNow-Container">
								<Link to="/Basketball">
									<button className="btn2"> SHOP NOW </button>
								</Link>
							</div>
						</div>

						<div class="right">
							<div className="container-box-Image">
								<Slideshow slides={SliderDataSports_1} />
							</div>
						</div>
					</div>
				</div>
				<br />
				<center>
					<br></br>
					<SlideshowBack slides={HomeBack} />
					<h3>
						New<span></span>
						<span> Arrival</span>
					</h3>
					<br />
					<div>
						<br />
						{this.state.posts != undefined && (
							<div className="Category-best">
								{this.state.posts.splice(0, 3).map((post) => (
									<div>
										<img
											className="best"
											alt={post.imageData}
											src={API_URL + "/" + post.imageData}
											width="200"
											height="220"
										/>
									</div>
								))}
							</div>
						)}
						<br />
					</div>
				</center>
				<div className="container">
					<div className="contact-box">
						<div className="left">
							<br />

							<h2>Casual</h2>

							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
								mi ipsum faucibus vitae aliquet nec.
							</p>
							<div className="shopNow-Container">
								<Link to="/Casual">
									<button className="btn2"> SHOP NOW </button>
								</Link>
							</div>
						</div>

						<div class="right">
							<div className="container-box-Image">
								<ImageSlider slides={SliderDataSports_1} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home2;
