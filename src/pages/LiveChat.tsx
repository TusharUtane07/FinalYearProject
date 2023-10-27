import { ChangeEvent, useState } from "react";

const LiveChat = () => {
	const [message, setMessage] = useState<string>("");

	return (
		<div>
			<h1>Live Chat</h1>
			<div>
				<div>here the chat will be shown</div>
				<div>
					<input
						type="text"
						placeholder="Enter your message here "
						value={message}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setMessage(e.target.value)
						}
					/>
					<button>Send</button>
				</div>
			</div>
		</div>
	);
};

export default LiveChat;
