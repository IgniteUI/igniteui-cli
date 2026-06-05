import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import styles from './LoginDialog.module.css';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export function LoginDialog({ open, onClose }: LoginDialogProps) {
  const [showLogin, setShowLogin] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      setShowLogin(true);
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  const handleSuccess = () => {
    dialogRef.current?.close();
    navigate('/auth/profile');
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClick={e => { if (e.target === dialogRef.current) dialogRef.current?.close(); }}>
      <div className={styles.header}>
        <h2 className={styles.title}>{showLogin ? 'Login' : 'Register'}</h2>
      </div>
      <div className={styles.body}>
        {showLogin
          ? <Login onRegister={() => setShowLogin(false)} onSuccess={handleSuccess} />
          : <Register onLogin={() => setShowLogin(true)} onSuccess={handleSuccess} />
        }
      </div>
    </dialog>
  );
}
