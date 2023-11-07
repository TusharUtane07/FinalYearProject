import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import BackButton from "../components/BackButton";

const Register = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cPassword, setCPassword] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");

	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (password !== cPassword) {
			toast.error("password is not matching");
		} else {
			console.log(firstName, lastName, email, password, cPassword);
		}
	};

	return (
		<div>
			<BackButton />
			<div className="">
				<h1>Register</h1>
				<form method="POST">
					<label htmlFor=""> First name</label>
					<input
						required
						type="text"
						placeholder="Enter your first name"
						value={firstName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setFirstName(e.target.value)
						}
					/>
					<label htmlFor="">Last name</label>
					<input
						required
						type="text"
						placeholder="Enter your last name"
						value={lastName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setLastName(e.target.value)
						}
					/>
					<label htmlFor="">Email</label>
					<input
						required
						type="text"
						placeholder="Enter you email"
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
					/>
					<label htmlFor="">Password</label>
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
					<label htmlFor="">Confirm password</label>
					<input
						required
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="Enter your confirm password"
						value={cPassword}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setCPassword(e.target.value)
						}
					/>
					<span
						onClick={() => setShowPassword((notVisible) => !notVisible)}
						className="text-xl mt-3">
						{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
					</span>
					<button
						onClick={(e: MouseEvent<HTMLButtonElement>) => handleSubmit(e)}>
						Register
					</button>
					<div>
						<span>Already have an account?</span>
						<NavLink to={"/login"}>
							<button>Login</button>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
