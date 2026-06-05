import { useState } from 'react';
import { useAuth } from '../AuthContext';
import type { Login as LoginData } from '../../models/login';
import styles from './Login.module.css';

interface LoginProps {
  onRegister: () => void;
  onSuccess: () => void;
}

export function Login({ onRegister, onSuccess }: LoginProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const canSubmit = email.trim() !== '' && password !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data: LoginData = { email, password };
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
          id="loginEmail"
          className={styles.input}
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="loginPassword">Password</label>
        <input
          id="loginPassword"
          className={styles.input}
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.submitBtn} type="submit" disabled={!canSubmit}>Log In</button>
        <button className={styles.linkBtn} type="button" onClick={onRegister}>
          Create new account
        </button>
      </div>
    </form>
  );
}
