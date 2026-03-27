import style from './style.module.css';
import { IgrIconButton } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Icon Button</h1>
      <div className={style.container}>
        <IgrIconButton name="thumb-up" collection="default" variant="contained" size="large" href="https://www.infragistics.com/support" />
      </div>
    </div>
  );
}
