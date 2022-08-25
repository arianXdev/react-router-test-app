import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Outlet />
			<header className="App-header">
				<h1>Test React Router Project</h1>
				{/* About page and Books page */}

				<nav className="nav">
					<Link to="/books">Books Page</Link>
					{"   "}
					<Link to="/about">About us</Link>
				</nav>
			</header>
		</div>
	);
}

export default App;
