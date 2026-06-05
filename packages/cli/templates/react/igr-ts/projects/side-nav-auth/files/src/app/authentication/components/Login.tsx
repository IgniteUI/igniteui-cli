import { useState, useRef } from 'react';
import { useAuth } from '../../AuthContext';
import type { Login as LoginData } from '../../models/login';
import styles from './Login.module.css';

interface LoginProps {
  onRegister: () => void;
  onSuccess: () => void;
}

export function Login({ onRegister, onSuccess }: LoginProps) {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data: LoginData = {
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? ''
    };
    const err = await login(data);
    if (err) {
      setError(err);
    } else {
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="loginEmail">Email</label>
        <input
          ref={emailRef}
          id="loginEmail"
          className={styles.input}
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="loginPassword">Password</label>
        <input
          ref={passwordRef}
          id="loginPassword"
          className={styles.input}
          type="password"
          autoComplete="current-password"
          required
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.submitBtn} type="submit">Log In</button>
        <button className={styles.linkBtn} type="button" onClick={onRegister}>
          Create new account
        </button>
      </div>
    </form>
  );
}
