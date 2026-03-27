import style from './style.module.css';
import { IgrLinearProgress } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Linear Progress</h1>
      <div className={style.container}>
        <div style={{ width: '200px' }}>
          <IgrLinearProgress value={92} animationDuration={1000} variant="success" />
        </div>
      </div>
    </div>
  );
}
