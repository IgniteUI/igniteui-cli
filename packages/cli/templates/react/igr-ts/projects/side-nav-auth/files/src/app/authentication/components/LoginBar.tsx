import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import { LoginDialog } from './LoginDialog';
import styles from './LoginBar.module.css';

export function LoginBar() {
  const { currentUser, initials, logout } = useAuth();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  const handleMenuSelect = (action: 'profile' | 'logout') => {
    setMenuOpen(false);
    if (action === 'profile') {
      navigate('/auth/profile');
    } else {
      logout();
      navigate('/');
    }
  };

  if (!currentUser) {
    return (
      <>
        <button className={styles.loginBtn} type="button" onClick={() => setDialogOpen(true)}>
          Log In
        </button>
        <LoginDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </>
    );
  }

  return (
    <div className={styles.avatarWrapper} ref={menuRef}>
      <button
        className={styles.avatar}
        type="button"
        aria-label="Open profile menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        {currentUser.picture
          ? <img className={styles.avatarImg} src={currentUser.picture} alt={currentUser.name} />
          : <span className={styles.avatarInitials}>{initials}</span>
        }
      </button>
      {menuOpen && (
        <ul className={styles.menu} role="menu">
          <li role="menuitem">
            <button className={styles.menuItem} type="button" onClick={() => handleMenuSelect('profile')}>Profile</button>
          </li>
          <li role="menuitem">
            <button className={styles.menuItem} type="button" onClick={() => handleMenuSelect('logout')}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}
