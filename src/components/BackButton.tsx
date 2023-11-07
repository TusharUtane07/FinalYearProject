import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate("/");
	};

	return (
		<div onClick={goBack} className="cursor-pointer">
			<BiArrowBack />
		</div>
	);
};

export default BackButton;
