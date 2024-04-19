import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.main}>
      <h1>Welcome to our Fake Store</h1>
      <h2>Buy everything you want</h2>
      <p>(If you have enough money)</p>
      <img
        className="storeImg"
        src="./src/assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg"
        alt="store"
      />
    </div>
  );
};

export default MainContent;
