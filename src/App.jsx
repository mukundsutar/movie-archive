import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Gallery from "./Components/Gallery";
import TMDB from "./Components/TMDB";

export default function App() {
	return (
		<>
			<Header />
			<Details />
			<Gallery />
			<TMDB/>
		</>
	);
}
