import { getBooks } from "../../data/data";

import { Outlet, NavLink, useSearchParams } from "react-router-dom";

import styles from "./Books.module.css";

export default function Books() {
	const books = getBooks();
	const [searchParams, setSearchParams] = useSearchParams(); // like useState Hook but in the browser's URL

	return (
		<section style={{ display: "flex" }}>
			<div className={styles.Books}>
				<h2>Our Books Page</h2>

				<input type="text" placeholder="Search" />

				{books.map((book, index) => (
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
						to={`/books/${book.id}`}
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
