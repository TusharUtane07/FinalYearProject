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
import EventCalendar from "./pages/EventCalendar";
import ComplaintBox from "./pages/ComplaintBox";
import DailyUpdates from "./pages/DailyUpdates";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

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
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/event-calendar" element={<EventCalendar />} />
					<Route path="/complaint-box" element={<ComplaintBox />} />
					<Route path="/daily-updates" element={<DailyUpdates />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</>
	);
};

export default App;
