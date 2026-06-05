import { useAuth } from '../AuthContext';
import styles from './Profile.module.css';

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.avatar}>
          {currentUser?.picture
            ? <img className={styles.avatarImg} src={currentUser.picture} alt={currentUser.name} />
            : <span className={styles.initials}>
                {((currentUser?.given_name?.[0] ?? '') + (currentUser?.family_name?.[0] ?? '')).toUpperCase()}
              </span>
          }
        </div>
        <h2 className={styles.name}>{currentUser?.given_name} {currentUser?.family_name}</h2>
        <p className={styles.email}>{currentUser?.email}</p>
      </div>
    </div>
  );
}
