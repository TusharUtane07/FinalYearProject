import { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import BackButton from "../components/BackButton";
import toast from "react-hot-toast";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const navigate = useNavigate();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Logged in Successful");
			navigate("/");
		} catch (error: any) {
			console.error("Login error:", error.message);
			toast.error("Login failed. Please check your email and password.");
		}
	};

	return (
		<div>
			<BackButton />
			<div className="">
				<h1>Login</h1>
				<form>
					<label htmlFor="email">Email</label>
					<input
						required
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
					/>
					<label htmlFor="password">Password</label>
					<input
						required
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
					/>
					<span
						onClick={() => setShowPassword((notVisible) => !notVisible)}
						className="text-xl mt-3">
						{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
					</span>
					<button>Forgot Password?</button>
					<button
						onClick={(e: MouseEvent<HTMLButtonElement>) => handleSubmit(e)}>
						Login
					</button>
					<div>
						<span>Don't have an account?</span>
						<NavLink to="/register">
							<button>Register</button>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
