import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LostThing from "./pages/LostThing";
import PanicSituation from "./pages/PanicSituation";
import ImageGallery from "./pages/ImageGallery";
import VideoGallery from "./pages/VideoGallery";
import LiveChat from "./pages/LiveChat";
import Feedback from "./pages/Feedback";
import EventCalendar from "./pages/EventCalendar";
import ComplaintBox from "./pages/ComplaintBox";
import DailyUpdates from "./pages/DailyUpdates";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/lost-things" element={<LostThing />} />
					<Route path="/panic-situation" element={<PanicSituation />} />
					<Route path="/image-gallery" element={<ImageGallery />} />
					<Route path="/video-gallery" element={<VideoGallery />} />
					<Route path="/live-chat" element={<LiveChat />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="/event-calendar" element={<EventCalendar />} />
					<Route path="/complaint-box" element={<ComplaintBox />} />
					<Route path="/daily-updates" element={<DailyUpdates />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
