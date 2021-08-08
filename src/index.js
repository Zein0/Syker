const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// Routes
const products = require("./routes/api/products");

const user = require("./routes/api/user");

const shop = require("./routes/api/shop");

const cart = require("./routes/api/cart");

const home = require("./routes/api/home");

const postsRoutes = require("./routes/api/posts");
const addRoutes = require("./routes/api/add");
const deleteRoutes = require("./routes/api/delete");
const postsemailRoutes = require("./routes/api/email");
const ImageRouter = require("./routes/api/image");

//BodyParser
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB

mongoose
	.connect(MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	})
	.then(() => console.log("DB connected"))
	.catch((err) => console.log(err));

// User routes
app.use("/", deleteRoutes);
app.use("/", addRoutes);
app.use("/", postsRoutes);
app.use("/", postsemailRoutes);
app.use("/image", ImageRouter);

app.use("/products", products);
app.use("/shop", shop);
app.use("/cart", cart);
app.use("/user", user);

// app.use("/image", image);

app.use("/home", home);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server run at port ${PORT} `));
