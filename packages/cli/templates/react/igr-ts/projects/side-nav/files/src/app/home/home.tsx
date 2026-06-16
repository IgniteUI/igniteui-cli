import logo from "/logo.svg";
import { IgrIcon } from "igniteui-react";
import styles from "./style.module.css";

export default function App() {
  return (
    <main className={styles.home}>
      <div className={styles.intro}>
        <h1 className={styles.header}>Welcome to Ignite UI for React!</h1>
        <p className={styles.description}>
          A routed application shell with a responsive side navigation drawer and curated Ignite UI resources.
        </p>
      </div>

      <img src={logo} className={styles.logo} alt="Ignite UI for React" />

      <div className={styles.resources} role="navigation" aria-label="Ignite UI resources">
        <a
          className={styles.resource}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.infragistics.com/products/ignite-ui-react"
        >
          <IgrIcon className={styles.resourceIcon} name="apps" collection="material" />
          <span>
            <strong>Component Demos</strong>
            <small>Browse React components and examples</small>
          </span>
        </a>
        <a
          className={styles.resource}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/IgniteUI/igniteui-react"
        >
          <IgrIcon className={styles.resourceIcon} name="code" collection="material" />
          <span>
            <strong>React Repository</strong>
            <small>Explore Ignite UI for React on GitHub</small>
          </span>
        </a>
        <a
          className={styles.resource}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/IgniteUI/igniteui-cli"
        >
          <IgrIcon className={styles.resourceIcon} name="build" collection="material" />
          <span>
            <strong>Ignite UI CLI</strong>
            <small>Review the CLI source and project tooling</small>
          </span>
        </a>
        <a
          className={styles.resource}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/@infragistics"
        >
          <IgrIcon className={styles.resourceIcon} name="palette" collection="material" />
          <span>
            <strong>Figma UI Kit</strong>
            <small>Open Infragistics design resources</small>
          </span>
        </a>
      </div>
    </main>
  );
}
