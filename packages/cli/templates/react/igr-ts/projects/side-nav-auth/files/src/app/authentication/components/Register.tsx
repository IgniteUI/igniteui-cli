import { useState } from 'react';
import { IgrButton, IgrIcon, IgrInput } from 'igniteui-react';
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
      setPassword('');
      onSuccess();
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <IgrInput outlined type="text" name="given_name" label="First Name" autoComplete="given-name" required={true}
        value={givenName} onInput={(e: any) => setGivenName(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="assignment_ind" collection="material" />
      </IgrInput>
      <IgrInput outlined type="text" name="family_name" label="Last Name" autoComplete="family-name"
        value={familyName} onInput={(e: any) => setFamilyName(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="assignment_ind" collection="material" />
      </IgrInput>
      <IgrInput outlined type="email" name="email" label="Email" autoComplete="email" required={true}
        value={email} onInput={(e: any) => setEmail(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="account_circle" collection="material" />
      </IgrInput>
      <IgrInput outlined type="password" name="password" label="Password" autoComplete="new-password" required={true}
        value={password} onInput={(e: any) => setPassword(e.detail ?? '')}>
        <IgrIcon slot="suffix" name="lock" collection="material" />
      </IgrInput>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <IgrButton variant="contained" type="submit" className={styles.submitBtn} disabled={!canSubmit}>
          <span>Sign Up</span>
        </IgrButton>
        <a className={styles.linkBtn} onClick={onLogin} role="button" tabIndex={0}>Have an account?</a>
      </div>
    </form>
  );
}
