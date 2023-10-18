const Register = () => {
	return (
		<div>
			<div className="">
				<form action="POST">
					<input type="text" placeholder="Enter your fullname" />
					<input type="text" placeholder="Enter you email" />
					<input type="password" placeholder="Enter your password" />
					<button>Register your Account</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
