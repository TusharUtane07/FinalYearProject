import { NavLink } from "react-router-dom";

const Register = () => {
	return (
		<div>
			<div className="">
				<h1>Register</h1>
				<form>
					<label htmlFor=""> First name</label>
					<input type="text" placeholder="Enter your first name" />
					<label htmlFor="">Last name</label>
					<input type="text" placeholder="Enter your last name" />
					<label htmlFor="">Email</label>
					<input type="text" placeholder="Enter you email" />
					<label htmlFor="">Password</label>
					<input type="password" placeholder="Enter your password" />
					<label htmlFor="">Confirm password</label>
					<input type="password" placeholder="Enter your confirm password" />
					<button>Register your Account</button>
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
