import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../Firebase";

const Navbar: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setIsLoggedIn(!!user);
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = () => {
		auth
			.signOut()
			.then(() => {
				console.log("User is signed out");
				toast.success("User signed out successfully");
			})
			.catch((error) => {
				console.error("Error signing out:", error.message);
			});
	};

	return (
		<div>
			<div>
				<div className="bg-blue-500 text-black">Logo</div>
				<div className="bg-blue-500 text-black">SiteName</div>
			</div>
			<div>
				<ul>
					<NavLink to={"/lost-things"}>
						<li>Lost Things</li>
					</NavLink>
					<NavLink to={"/panic-situation"}>
						<li>Panic Situation</li>
					</NavLink>
					<NavLink to={"/image-gallery"}>
						<li>Image Gallery</li>
					</NavLink>
					<NavLink to={"/video-gallery"}>
						<li>Video Gallery</li>
					</NavLink>
					<NavLink to={"/live-chat"}>
						<li>Live Chat</li>
					</NavLink>
					<NavLink to={"/contact-us"}>
						<li>Contact Us</li>
					</NavLink>
					<NavLink to={"/event-calendar"}>
						<li>Event Calendar</li>
					</NavLink>
					<NavLink to={"/complaint-box"}>
						<li>Complaint Box</li>
					</NavLink>
					<NavLink to={"/daily-updates"}>
						<li>Daily Updates</li>
					</NavLink>
					{isLoggedIn ? (
						<>
							<li onClick={handleLogout}>Logout</li>
						</>
					) : (
						<>
							<NavLink to={"/login"}>
								<li>Login</li>
							</NavLink>
							<NavLink to={"/register"}>
								<li>Register</li>
							</NavLink>
						</>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
