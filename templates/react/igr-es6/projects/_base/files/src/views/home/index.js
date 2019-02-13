import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './style.css';

export default class Home extends Component { 
  state = {
  }

  render () {
      return (
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <p>
            Welcome to Ignite UI for React!
          </p>
          <a
            className={styles.link}
            href="https://www.infragistics.com/products/ignite-ui-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </header>
      )
   }
}
