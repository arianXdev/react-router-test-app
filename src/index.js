import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./components/About/About";
import Books from "./components/Books/Books";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Depending on URL/ Address changes */}
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/about" element={<About />} />
					<Route path="/books" element={<Books />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
