import logo from "/logo.svg";
import githubLogo from "/github.svg";
import styles from "./style.module.css";

export default function App() {
  return (
    <main className={styles.content}>
      <h1 className={styles.header}>Welcome to Ignite UI for React!</h1>
      <h4 className={styles.subject}>
        A complete library of 50+ UI components for building modern web applications with reusable React components.
      </h4>
      <img src={logo} className={styles.logo} alt="Ignite UI for React" />

      <p className={styles.subtitle}>Discover more at</p>
      <p>
        <a
          className={styles.link}
          target="_blank"
          href="https://www.infragistics.com/products/ignite-ui-react"
          rel="noopener noreferrer"
        >
          www.infragistics.com/products/ignite-ui-react
        </a>
      </p>
      <p>
        <a
          className={styles.link}
          target="_blank"
          href="https://www.infragistics.com/products/indigo-design"
          rel="noopener noreferrer"
        >
          www.infragistics.com/products/indigo-design
        </a>
      </p>

      <p className={styles.subtitle}>We are also on GitHub</p>
      <p className={styles.githubLinks}>
        <a
          className={styles.githubLink}
          target="_blank"
          href="https://github.com/IgniteUI/igniteui-react"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="" />
          Ignite UI for React
        </a>
        <a
          className={styles.githubLink}
          target="_blank"
          href="https://github.com/IgniteUI/igniteui-cli"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="" />
          Ignite UI CLI
        </a>
      </p>
    </main>
  );
}
