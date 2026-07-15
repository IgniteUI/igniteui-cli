import style from './style.module.css';
import { IgrButton, IgrRipple } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Ripple</h1>
      <div className={style.container}>
        <IgrButton>
          <IgrRipple />
          <span>Button with ripple</span>
        </IgrButton>
      </div>
    </div>
  );
}
