import { getBooks } from "../../data/data";

import { Outlet, NavLink, useSearchParams, useLocation } from "react-router-dom";

import styles from "./Books.module.css";

export default function Books() {
	const [searchParams, setSearchParams] = useSearchParams(); // like useState Hook but in the browser's URL
	const location = useLocation();
	const books = getBooks();

	console.log(location);
	return (
		<section style={{ display: "flex" }}>
			<div className={styles.Books}>
				<h2>Our Books Page</h2>

				<input
					type="text"
					placeholder="Search"
					value={searchParams.get("filter") || ""}
					onChange={(event) => {
						// getting the value of input
						let filter = event.target.value;

						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>

				{books
					.filter((book) => {
						let filter = searchParams.get("filter");

						// if it doesn't exist
						if (!filter) return true; // break the loop

						// if it exists
						let name = book.fields.Title.toLowerCase();
						return name.includes(filter.toLowerCase());
					})
					.map((book, index) => (
						<NavLink
							style={({ isActive }) => {
								return {
									display: "block",
									padding: "10px 0",
									color: isActive ? "red" : undefined,
									fontWeight: isActive ? "900" : undefined,
									fontSize: isActive ? "22px" : undefined,
								};
							}}
							to={`/books/${book.id}${location.search}`}
							key={index}
						>
							{book.fields.Title}
						</NavLink>
					))}
			</div>
			<Outlet />
		</section>
	);
}
