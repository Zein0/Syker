import React from "react";
import axios from "axios";
import "./Category_3.css";
const API_URL = "http://localhost:8000";
class Category_3 extends React.Component {
	state = {
		posts: [],
	};
	componentDidMount() {
		axios.get("http://localhost:8000/home/").then((res) => {
			console.log(res);

			this.setState({ posts: res.data });
		});
	}
	render() {
		return (
			<div>
				<h1>Category</h1>
				<center>
					<div className="Category best">
						{this.state.posts.map((post) => (
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
				</center>
			</div>
		);
	}
}

export default Category_3;

//   componentDidMount() {
//     axios.get('http://localhost:8000/image')
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(img)
//         var base64Flag = 'data:image/jpeg;base64,';
//         var imageStr = this.arrayBufferToBase64(data.img.data.data);
//         this.setState({
//             img: base64Flag + imageStr
//         })
//     })
// }
