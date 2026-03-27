import style from './style.module.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Switch</h1>
      <div className={style.container}>
        <IgrSwitch>Label</IgrSwitch>
      </div>
    </div>
  );
}
