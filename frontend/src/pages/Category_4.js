import React from "react";
import axios from "axios";
import "./Category_4.css";
const API_URL = "http://localhost:8000";
class Category_4 extends React.Component {
	state = {
		posts: [],
	};
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

	componentDidMount() {
		axios.get("http://localhost:8000/image/readImage").then((res) => {
			console.log(res);
			const posts = res.data;
			this.setState({ posts });
		});
	}
	deleteImage(_id, e) {
		axios.delete(`http://localhost:8000/image/element/${_id}`).then((res) => {
			console.log(res);
			console.log(res.data);
			const posts = this.state.posts.filter((item) => item._id !== _id);
			this.setState({ posts });
		});
	}
	render() {
		return (
			<div>
				<h1>Category</h1>
				<br />
				<div className="Category">
					<table className="image-table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Picture</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{this.state.posts.map((post) => (
								<tr>
									<td>{post._id}</td>
									<td>
										<img
											alt="Source-products"
											className="td-image"
											src={API_URL + "/" + post.imageData}
										/>
									</td>
									<td>
										<button
											className="btn"
											onClick={(e) => this.deleteImage(post._id, e)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Category_4;
