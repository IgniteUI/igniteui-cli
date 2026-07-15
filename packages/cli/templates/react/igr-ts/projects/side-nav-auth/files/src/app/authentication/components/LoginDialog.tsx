import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IgrDialog } from 'igniteui-react';
import { Login } from './Login';
import { Register } from './Register';
import styles from './LoginDialog.module.css';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [showLogin, setShowLogin] = useState(true);
  const dialogRef = useRef<IgrDialog>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setShowLogin(true);
      dialogRef.current?.show();
    } else {
      dialogRef.current?.hide();
    }
  }, [open]);

  const handleSuccess = () => {
    dialogRef.current?.hide();
    navigate('/auth/profile');
  };

  return (
    <IgrDialog
      ref={dialogRef}
      className={styles.dialog}
      title={showLogin ? 'Login' : 'Register'}
      closeOnOutsideClick={true}
      onClosed={onClose}
    >
      <div className={styles.body}>
        {showLogin
          ? <Login onRegister={() => setShowLogin(false)} onSuccess={handleSuccess} />
          : <Register onLogin={() => setShowLogin(true)} onSuccess={handleSuccess} />
        }
      </div>
      <span slot="footer" />
    </IgrDialog>
  );
}
