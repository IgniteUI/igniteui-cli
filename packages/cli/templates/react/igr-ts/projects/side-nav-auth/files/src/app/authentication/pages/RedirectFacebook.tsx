import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalAuth } from '../services/externalAuth';
import { useAuth } from '../AuthContext';

/**
 * Handles the Facebook login redirect.
 * Facebook uses a popup (JS SDK) instead of PKCE, so this page reads the profile
 * that was stored in sessionStorage during the FB.login() callback.
 */
export default function RedirectFacebook() {
  const { loginWith } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const externalUser = await ExternalAuth.handleRedirect('facebook');
        const err = await loginWith(externalUser);
        if (err) {
          setError(err);
        } else {
          navigate('/auth/profile');
        }
      } catch (e: any) {
        console.error('Facebook sign-in failed:', e);
        setError('Facebook sign-in failed. Please try again.');
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

  return <p style={{ padding: '2rem' }}>Signing in with Facebook…</p>;
}
