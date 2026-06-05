import { useState } from 'react';
import { IgrIcon } from 'igniteui-react';
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
        <input id="regFirst" className={styles.input} type="text" placeholder="First Name" autoComplete="given-name"
          value={givenName} onChange={e => setGivenName(e.target.value)} required />
        <IgrIcon name="assignment_ind" collection="material" className={styles.inputIcon} />
      </div>
      <div className={styles.field}>
        <input id="regLast" className={styles.input} type="text" placeholder="Last Name" autoComplete="family-name"
          value={familyName} onChange={e => setFamilyName(e.target.value)} />
        <IgrIcon name="assignment_ind" collection="material" className={styles.inputIcon} />
      </div>
      <div className={styles.field}>
        <input id="regEmail" className={styles.input} type="email" placeholder="Email" autoComplete="email"
          value={email} onChange={e => setEmail(e.target.value)} required />
        <IgrIcon name="account_circle" collection="material" className={styles.inputIcon} />
      </div>
      <div className={styles.field}>
        <input id="regPassword" className={styles.input} type="password" placeholder="Password" autoComplete="new-password"
          value={password} onChange={e => setPassword(e.target.value)} required />
        <IgrIcon name="lock" collection="material" className={styles.inputIcon} />
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
