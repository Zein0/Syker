var express = require("express");
var Image = require("../../models/Image");
const ImageRouter = express.Router();
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		// rejects storing a file
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

ImageRouter.route("/uploadmulter").post(
	upload.single("imageData"),
	(req, res, next) => {
		console.log("true");
		console.log(req.body.imageName);
		console.log(req.file.path);
		const newImage = new Image({
			imageName: req.body.imageName,
			imageData: req.file.path,
		});
		console.log("true");
		newImage
			.save()
			.then((result) => {
				// console.log(result);
				res.status(200).json({
					success: true,
					document: result,
				});
			})
			.catch((err) => next(err));
	}
);

ImageRouter.route("/uploadbase").post((req, res, next) => {
	const newImage = new Image({
		imageName: req.body.imageName,
		imageData: req.body.imageData,
	});

	newImage
		.save()
		.then((result) => {
			res.status(200).json({
				success: true,
				document: result,
			});
		})
		.catch((err) => next(err));
});

ImageRouter.delete("/element/:id", async (req, res) => {
	const im = await Image.findOne({ _id: req.params.id });
	const path = "./" + im.imageData;
	try {
		// const images= await Image.find();

		fs.unlinkSync(path);
		//file removed
	} catch (err) {
		console.error(err);
	}

	Image.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({
				message: "Image deleted successfully!",
			});
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
});

ImageRouter.get("/readImage", async (req, res) => {
	try {
		const postsimageName = await Image.find();

		if (!postsimageName) throw Error("No Image");
		res.status(200).json(postsimageName);
	} catch (err) {
		res.status(400).json({ msg: err });
	}
});

const path = "./uploads/2021-07-17T18:28:40.471Zchris-copy.jpg";
ImageRouter.delete("/deleteImage", function (req, res) {
	try {
		// const images= await Image.find();

		fs.unlinkSync(path);
		//file removed
	} catch (err) {
		console.error(err);
	}
});

module.exports = ImageRouter;
