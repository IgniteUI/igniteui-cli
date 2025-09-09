import logo from "/logo.svg";
import styles from "./style.module.css";

export default function Home() {
  const name = '$(name)';

  return (
    <div className="app">
      <div className={styles.app__name}>{name}</div>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Welcome to Ignite UI for React!</p>
        <a
          className={styles.link}
          target="_blank"
          href="https://www.infragistics.com/products/ignite-ui-react"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}