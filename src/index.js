import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { About, Books, Contact } from "./components";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Depending on URL/ Address changes */}
		<BrowserRouter>
			<Routes>
				{/* You can think about a <Route> kind of like an if statement; if its path matches the current URL, it renders its element */}
				<Route path="/" element={<App />}>
					<Route path="about" element={<About />} />
					<Route path="Books" element={<Books />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
