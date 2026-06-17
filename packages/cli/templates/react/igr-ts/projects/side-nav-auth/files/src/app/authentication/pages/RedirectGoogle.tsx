import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalAuth } from '../services/externalAuth';
import { useAuth } from '../AuthContext';

/** Handles the OAuth redirect from Google. Exchanges the authorization code for a user profile. */
export default function RedirectGoogle() {
  const { loginWith } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const externalUser = await ExternalAuth.handleRedirect('google');
        const err = await loginWith(externalUser);
        if (err) {
          setError(err);
        } else {
          navigate('/auth/profile');
        }
      } catch (e: any) {
        console.error('Google sign-in failed:', e);
        setError('Google sign-in failed. Please try again.');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <div style={{ padding: '2rem', color: '#d32f2f' }}>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return <p style={{ padding: '2rem' }}>Signing in with Google…</p>;
}
