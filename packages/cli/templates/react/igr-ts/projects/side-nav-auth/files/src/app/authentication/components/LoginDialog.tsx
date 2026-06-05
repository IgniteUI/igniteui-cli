import { useState, useEffect, useRef } from 'react';
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
  };

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.header}>
        <h2 className={styles.title}>{showLogin ? 'Log In' : 'Create Account'}</h2>
        <button className={styles.closeBtn} type="button" aria-label="Close" onClick={() => dialogRef.current?.close()}>✕</button>
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
