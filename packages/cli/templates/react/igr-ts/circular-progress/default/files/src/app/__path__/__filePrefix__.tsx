import style from './style.module.css';
import { IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Circular Progress</h1>
      <div className={style.container}>
        <IgrCircularProgress value={75} />
      </div>
    </div>
  );
}
