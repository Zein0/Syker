import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Userimg from "../pages/assets/user.png";

function Navbar({ user, quan }) {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const LogOut = async () => {
		const res = await fetch("user/logout", {
			method: "Get",
			headers: { "Content-Type": "application/json" },
			credentials: "include",
		});
		setTimeout(() => {
			window.location.assign("/");
		}, 100);
	};
	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};
	return (
		<nav className="navbar">
			<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
				SYKER
				<i class="fab fa-firstdraft" />
			</Link>
			<div className="menu-icon" onClick={handleClick}>
				<i className={click ? "fas fa-times" : "fas fa-bars"} />
			</div>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li
					className="nav-item"
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				>
					<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
						Shop <i className="fas fa-caret-down" />
					</Link>
					{dropdown && <Dropdown />}
				</li>
				{user != null && (
					<li className="nav-item">
						<Link to="/Cart" className="nav-links" onClick={closeMobileMenu}>
							Cart ({quan})
						</Link>
					</li>
				)}
				<li className="nav-item">
					<Link
						to="/contact-us"
						className="nav-links"
						onClick={closeMobileMenu}
					>
						Contact Us
					</Link>
				</li>
				{/* {() => {
					if (user) {
						return (
							<li>
								<Link
									to="/Log-in"
									className="nav-links-mobile"
									onClick={closeMobileMenu}
								>
									Log In
								</Link>
							</li>
						);
					}
				}} */}
				{user === null && (
					<li className="nav-item">
						{console.log(user)}
						<Link to="/Log-in" className="nav-links" onClick={closeMobileMenu}>
							Log In
						</Link>
					</li>
				)}
				{user != null && (
					<li className="nav-item">
						<Link className="nav-links user-link">{user.username}</Link>
					</li>
				)}

				{user != null && (
					<li className="nav-item">
						<Link className="nav-links " onClick={(closeMobileMenu, LogOut)}>
							Log Out
						</Link>
					</li>
				)}
				{user === null && (
					<li className="nav-item ">
						<Link
							to="/sign-up"
							className="nav-links nav-nag"
							onClick={closeMobileMenu}
						>
							Sign Up
						</Link>
					</li>
				)}
			</ul>
			{/* <Button link="log-in" />
			<Button link="sign-up" /> */}
		</nav>
	);
}

export default Navbar;
