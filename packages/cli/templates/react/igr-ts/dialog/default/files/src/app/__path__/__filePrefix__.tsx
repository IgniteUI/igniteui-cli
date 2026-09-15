import { useRef } from 'react';
import style from './style.module.css';
import { IgrDialog, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  const dialogRef = useRef<IgrDialog>(null);

  return (
    <div>
      <h1 className={style.title}>Dialog</h1>
      <div className={style.container}>
        <IgrButton onClick={() => dialogRef.current?.show()}><span>Open Dialog</span></IgrButton>
        <IgrDialog ref={dialogRef} title="Confirm action">
          <p>Are you sure you want to proceed?</p>
        </IgrDialog>
      </div>
    </div>
  );
}
