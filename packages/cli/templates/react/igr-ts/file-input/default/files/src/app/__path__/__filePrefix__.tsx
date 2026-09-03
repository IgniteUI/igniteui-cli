import style from './style.module.css';
import { IgrFileInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>File Input</h1>
      <div className={style.container}>
        <IgrFileInput label="Upload file" multiple={true} accept=".png,.jpg,.pdf" />
      </div>
    </div>
  );
}
