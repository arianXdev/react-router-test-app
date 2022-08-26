import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Books, Book, Contact, NotFound } from "./components";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* Depending on URL/ Address changes */}
		<BrowserRouter>
			<Routes>
				{/* You can think about a <Route> kind of like an if statement; if its path matches the current URL, it renders its element */}
				<Route path="/" element={<App />}>
					<Route index element={<p>Sorry! Nothing's here :/</p>} />
					<Route path="about" element={<About />} />
					<Route path="books" element={<Books />}>
						<Route index element={<main style={{ padding: "2rem", margin: "0 auto" }}>Select one of the books!</main>} />
						<Route path=":bookId" element={<Book />} />
					</Route>
				</Route>
				<Route path="/contact" element={<Contact />} />

				{/* 404 Error | Not Found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
