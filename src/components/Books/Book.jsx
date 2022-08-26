import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { getBook, removeBook } from "../../data/data";

import styles from "./Book.module.css";

const Book = (prop) => {
	const navigate = useNavigate();
	const location = useLocation();
	const params = useParams();
	const book = getBook(params.bookId);

	if (book) {
		return (
			<div className={styles.Book}>
				<h2>Book ID: {book.id}</h2>
				<h2>Book Name: {book.fields.Title}</h2>
				<h2>Author: {book.fields.Author}</h2>
				<h2>Country: {book.fields.Country}</h2>
				<a className={styles.btn} href={book.fields.Amazon_Link} target="_blank" rel="noreferrer">
					Buy it
				</a>

				<button
					onClick={() => {
						removeBook(book.id);
						navigate("/books" + location.search); // redirects user to /books after removing the book
					}}
					className={`${styles.btn} ${styles["btn--red"]}`}
				>
					Delete it!
				</button>
			</div>
		);
	} else {
		return (
			<h1 style={{ margin: "1rem" }}>
				404 Error - There isn't any books with this ID. <Link to="/books">Back to Home!</Link>
			</h1>
		);
	}
};

export default Book;
