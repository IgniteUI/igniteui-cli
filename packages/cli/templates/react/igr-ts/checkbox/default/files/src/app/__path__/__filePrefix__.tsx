import style from './style.module.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Checkbox</h1>
      <div className={style.container}>
        <IgrCheckbox checked={true}>Label</IgrCheckbox>
      </div>
    </div>
  );
}
