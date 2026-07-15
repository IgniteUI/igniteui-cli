import style from './style.module.css';
import { IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Input</h1>
      <div className={style.container}>
        <IgrInput label="Name" placeholder="Enter your name" type="text">
          <span slot="helper-text">This is some helper text</span>
        </IgrInput>
      </div>
    </div>
  );
}
