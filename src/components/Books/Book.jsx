import { useParams } from "react-router-dom";
import { getBook } from "../../data/data";

import styles from "./Book.module.css";

const Book = (prop) => {
	const params = useParams();
	const book = getBook(params.bookId);

	return (
		<div className={styles.Book}>
			<h2>Book ID: {book.id}</h2>
			<h2>Book Name: {book.fields.Title}</h2>
			<h2>Author: {book.fields.Author}</h2>
			<h2>Country: {book.fields.Country}</h2>
			<a className={styles.btn} href={book.fields.Amazon_Link} target="_blank" rel="noreferrer">
				Buy it
			</a>
		</div>
	);
};

export default Book;
