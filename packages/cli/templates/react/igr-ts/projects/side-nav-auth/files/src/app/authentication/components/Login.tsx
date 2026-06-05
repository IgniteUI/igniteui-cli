import { useState } from 'react';
import { IgrIcon } from 'igniteui-react';
import { useAuth } from '../AuthContext';
import { ExternalAuth } from '../services/externalAuth';
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
      setPassword('');
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <input
          id="loginEmail"
          className={styles.input}
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <IgrIcon name="account_circle" collection="material" className={styles.inputIcon} />
      </div>
      <div className={styles.field}>
        <input
          id="loginPassword"
          className={styles.input}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <IgrIcon name="lock" collection="material" className={styles.inputIcon} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.submitBtn} type="submit" disabled={!canSubmit}>Log In</button>
        <button className={styles.linkBtn} type="button" onClick={onRegister}>
          Create new account
        </button>
      </div>
      {ExternalAuth.hasProvider() && (
        <div className={styles.socialLogin}>
          {ExternalAuth.hasProvider('google') && (
            <button className={`${styles.socialBtn} ${styles.google}`} type="button"
              onClick={() => ExternalAuth.login('google')}>Sign Up Google</button>
          )}
          {ExternalAuth.hasProvider('facebook') && (
            <button className={`${styles.socialBtn} ${styles.facebook}`} type="button"
              onClick={() => ExternalAuth.login('facebook')}>Sign Up Facebook</button>
          )}
          {ExternalAuth.hasProvider('microsoft') && (
            <button className={`${styles.socialBtn} ${styles.microsoft}`} type="button"
              onClick={() => ExternalAuth.login('microsoft')}>Sign Up Microsoft</button>
          )}
        </div>
      )}
    </form>
  );
}
