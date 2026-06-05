import { useAuth } from '../AuthContext';
import styles from './Profile.module.css';

export default function Profile() {
  const { currentUser } = useAuth();
  const initials = ((currentUser?.given_name?.[0] ?? '') + (currentUser?.family_name?.[0] ?? '')).toUpperCase() || 'U';

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            {currentUser?.picture
              ? <img className={styles.avatarImg} src={currentUser.picture} alt={currentUser.name} />
              : initials
            }
          </div>
          <div className={styles.intro}>
            <p className={styles.status}>Signed in</p>
            <h1 className={styles.name}>{currentUser?.name || 'Your profile'}</h1>
            <p className={styles.description}>Your account details are available on this protected route.</p>
          </div>
        </div>
        <dl className={styles.details}>
          <div className={styles.row}>
            <dt className={styles.dt}>First name</dt>
            <dd className={styles.dd}>{currentUser?.given_name || 'Not provided'}</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.dt}>Last name</dt>
            <dd className={styles.dd}>{currentUser?.family_name || 'Not provided'}</dd>
          </div>
          <div className={styles.row}>
            <dt className={styles.dt}>Email</dt>
            <dd className={styles.dd}>{currentUser?.email || 'No email available'}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
