import { useState } from 'react';
import { useAuth } from '../AuthContext';
import type { RegisterInfo } from '../../models/register-info';
import styles from './Register.module.css';

interface RegisterProps {
  onLogin: () => void;
  onSuccess: () => void;
}

export function Register({ onLogin, onSuccess }: RegisterProps) {
  const { register } = useAuth();
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const canSubmit = givenName.trim() !== '' && email.trim() !== '' && password !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data: RegisterInfo = {
      given_name: givenName,
      family_name: familyName,
      email,
      password
    };
    const err = await register(data);
    if (err) {
      setError(err);
    } else {
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regFirst">First Name</label>
        <input id="regFirst" className={styles.input} type="text" autoComplete="given-name"
          value={givenName} onChange={e => setGivenName(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regLast">Last Name</label>
        <input id="regLast" className={styles.input} type="text" autoComplete="family-name"
          value={familyName} onChange={e => setFamilyName(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regEmail">Email</label>
        <input id="regEmail" className={styles.input} type="email" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regPassword">Password</label>
        <input id="regPassword" className={styles.input} type="password" autoComplete="new-password"
          value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.submitBtn} type="submit" disabled={!canSubmit}>Sign Up</button>
        <button className={styles.linkBtn} type="button" onClick={onLogin}>
          Have an account?
        </button>
      </div>
    </form>
  );
}
