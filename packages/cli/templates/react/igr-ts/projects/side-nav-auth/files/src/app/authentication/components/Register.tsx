import { useState, useRef } from 'react';
import { useAuth } from '../../AuthContext';
import type { RegisterInfo } from '../../models/register-info';
import styles from './Register.module.css';

interface RegisterProps {
  onLogin: () => void;
  onSuccess: () => void;
}

export function Register({ onLogin, onSuccess }: RegisterProps) {
  const { register } = useAuth();
  const [error, setError] = useState('');
  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data: RegisterInfo = {
      given_name: firstRef.current?.value ?? '',
      family_name: lastRef.current?.value ?? '',
      email: emailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? ''
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
        <input ref={firstRef} id="regFirst" className={styles.input} type="text" autoComplete="given-name" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regLast">Last Name</label>
        <input ref={lastRef} id="regLast" className={styles.input} type="text" autoComplete="family-name" />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regEmail">Email</label>
        <input ref={emailRef} id="regEmail" className={styles.input} type="email" autoComplete="email" required />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="regPassword">Password</label>
        <input ref={passwordRef} id="regPassword" className={styles.input} type="password" autoComplete="new-password" required />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.submitBtn} type="submit">Sign Up</button>
        <button className={styles.linkBtn} type="button" onClick={onLogin}>
          Have an account?
        </button>
      </div>
    </form>
  );
}
