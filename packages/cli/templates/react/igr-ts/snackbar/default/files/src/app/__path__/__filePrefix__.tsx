import style from './style.module.css';
import { IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Snackbar</h1>
      <div className={style.container}>
        <IgrSnackbar open={true} actionText="Undo">Message archived.</IgrSnackbar>
      </div>
    </div>
  );
}
