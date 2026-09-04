import style from './style.module.css';
import { IgrMaskInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Mask Input</h1>
      <div className={style.container}>
        <IgrMaskInput label="Phone number" mask="(000) 0000-000" placeholder="Enter phone number" />
      </div>
    </div>
  );
}
