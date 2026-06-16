import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalAuth } from '../services/externalAuth';
import { useAuth } from '../AuthContext';

/** Handles the OAuth redirect from Microsoft. Exchanges the authorization code for a user profile. */
export default function RedirectMicrosoft() {
  const { loginWith } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const externalUser = await ExternalAuth.handleRedirect('microsoft');
        const err = await loginWith(externalUser);
        if (err) {
          setError(err);
        } else {
          navigate('/auth/profile');
        }
      } catch (e: any) {
        console.error('Microsoft sign-in failed:', e);
        setError('Microsoft sign-in failed. Please try again.');
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

  return <p style={{ padding: '2rem' }}>Signing in with Microsoft…</p>;
}
