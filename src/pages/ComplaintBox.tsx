import BackButton from "../components/BackButton";

const ComplaintBox = () => {
	return (
		<div>
			<BackButton />
			<h1>Complaint Box</h1>
			<form>
				<div>
					<label htmlFor="">Student's Name</label>
					<input type="text" placeholder="Write your name" />
				</div>
				<div>
					<label htmlFor="">Gender</label>
					<div>
						<button>
							<span>image male</span>
							<span>image female</span>
						</button>
					</div>
				</div>
				<div>
					<label htmlFor="">Description about Complaint</label>
					<textarea name="complaint" id="" cols={30} rows={10}></textarea>
				</div>
			</form>
		</div>
	);
};

export default ComplaintBox;
