import styles from "./NotFound.module.css";

const NotFound = () => {
	return (
		<div className={styles.NotFound}>
			<img className={styles["NotFound__img"]} src={require("../../assets/images/not-found.jpg")} alt="404-error" />
		</div>
	);
};

export default NotFound;
