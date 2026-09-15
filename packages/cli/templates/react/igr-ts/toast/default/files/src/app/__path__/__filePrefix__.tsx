import style from './style.module.css';
import { IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Toast</h1>
      <div className={style.container}>
        <IgrToast open={true}>File saved successfully.</IgrToast>
      </div>
    </div>
  );
}
