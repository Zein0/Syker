const mongoose = require("mongoose");
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const { checkUser } = require("../Middleware/authUser");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: "teamsevenb07@gmail.com", //sender email
		pass: ")7UTH*L{ytnjH{wz",
	},
	from: "teamsevenb07@gmail.com",
});

transporter.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take our messages");
	}
});
module.exports = {
	async Order(req, res) {
		const data = await checkUser(req, res);
		const x = data.user;
		if (x == null) {
			res.json({ error: true });
		} else {
			var cart = req.body.cart;
			var TotalPrice = req.body.TotalPrice;
			var message = "";
			cart.map((item) => {
				message +=
					"Product Name : " +
					item.name +
					"\n price per unit : " +
					item.price +
					"\n Product quantity : " +
					item.quantity +
					"\n Total price : " +
					item.quantity * item.price +
					"\n";
			});
			message += "Total Cart Price : " + TotalPrice;
			const d = new Date();
			var mail = {
				from: x.username,
				to: "ahmadalzein06@gmail.com",
				cc: x.email, // receiver email,
				subject:
					"Your Syker Order On " +
					d.getDate() +
					"/" +
					d.getMonth() +
					"/" +
					d.getFullYear(),
				email: x.email,
				text: "Message From: " + x.email + "\n" + message,
			};

			transporter.sendMail(mail, (err, data) => {
				if (err) {
					console.log(err);
					res.json({
						status: "fail",
					});
				} else {
					res.json({
						status: "success",
					});
				}
			});
		}
	},
};
