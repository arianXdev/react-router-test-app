import { useParams } from "react-router-dom";

import styles from "./Book.module.css";

const Book = (prop) => {
	const bookId = useParams();

	return (
		<div className={styles.Book}>
			<h2>Book ID: {bookId.bookId}</h2>
		</div>
	);
};

export default Book;
