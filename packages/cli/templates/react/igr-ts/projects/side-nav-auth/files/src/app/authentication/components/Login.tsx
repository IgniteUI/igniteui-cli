import { useState } from 'react';
import { IgrButton, IgrIcon, IgrInput } from 'igniteui-react';
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
      <IgrInput outlined type="email" name="email" label="Email" autoComplete="email" required={true}
        value={email} onInput={(e: any) => setEmail(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="account_circle" collection="material" />
      </IgrInput>
      <IgrInput outlined type="password" name="password" label="Password" autoComplete="current-password" required={true}
        value={password} onInput={(e: any) => setPassword(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="lock" collection="material" />
      </IgrInput>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <IgrButton variant="contained" type="submit" className={styles.submitBtn} disabled={!canSubmit}>
          <span>Log In</span>
        </IgrButton>
        <IgrButton variant="flat" type="button" className={styles.linkBtn} onClick={onRegister}>
          <span>Create new account</span>
        </IgrButton>
      </div>
      {ExternalAuth.hasProvider() && (
        <div className={styles.socialLogin}>
          {ExternalAuth.hasProvider('google') && (
            <IgrButton variant="contained" type="button" className={`${styles.socialBtn} ${styles.google}`}
              onClick={() => ExternalAuth.login('google')}><span>Sign Up Google</span></IgrButton>
          )}
          {ExternalAuth.hasProvider('facebook') && (
            <IgrButton variant="contained" type="button" className={`${styles.socialBtn} ${styles.facebook}`}
              onClick={() => ExternalAuth.login('facebook')}><span>Sign Up Facebook</span></IgrButton>
          )}
          {ExternalAuth.hasProvider('microsoft') && (
            <IgrButton variant="contained" type="button" className={`${styles.socialBtn} ${styles.microsoft}`}
              onClick={() => ExternalAuth.login('microsoft')}><span>Sign Up Microsoft</span></IgrButton>
          )}
        </div>
      )}
    </form>
  );
}
