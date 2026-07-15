import style from './style.module.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Button</h1>
      <div className={style.container}>
        <IgrButton size="large"><span>Large button</span></IgrButton>
      </div>
    </div>
  );
}
