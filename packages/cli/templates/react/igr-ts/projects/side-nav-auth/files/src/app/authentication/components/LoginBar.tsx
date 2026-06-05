import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IgrAvatar, IgrDropdown, IgrDropdownItem } from 'igniteui-react';
import { useAuth } from '../AuthContext';
import { LoginDialog } from './LoginDialog';
import styles from './LoginBar.module.css';

export function LoginBar() {
  const { currentUser, initials, logout } = useAuth();
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

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
    <IgrDropdown placement="bottom-end">
      <IgrAvatar
        slot="target"
        className={styles.profileAvatar}
        shape="circle"
        size="small"
        initials={initials}
        src={currentUser.picture ?? ''}
        tabIndex={0}
        aria-label="Open profile menu"
      />
      <IgrDropdownItem onClick={() => navigate('/auth/profile')}>
        <span>Profile</span>
      </IgrDropdownItem>
      <IgrDropdownItem onClick={() => { logout(); navigate('/'); }}>
        <span>Log Out</span>
      </IgrDropdownItem>
    </IgrDropdown>
  );
}
