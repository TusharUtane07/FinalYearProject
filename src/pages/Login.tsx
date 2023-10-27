import { NavLink } from "react-router-dom";

const Login = () => {
	return (
		<div>
			<div className="">
				<h1>Login</h1>
				<form>
					<label htmlFor="">Email</label>
					<input type="text" placeholder="Enter you email" />
					<label htmlFor="">Password</label>
					<input type="password" placeholder="Enter your password" />
					<label htmlFor="">Confirm password</label>
					<input type="password" placeholder="Enter your confirm password" />
					<button>Login</button>
					<div>
						<span>Don't have an account?</span>
						<NavLink to={"/register"}>
							<button>Register</button>
						</NavLink>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
