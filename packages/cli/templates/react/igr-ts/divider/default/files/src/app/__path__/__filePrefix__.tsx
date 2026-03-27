import style from './style.module.css';
import { IgrDivider } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Divider</h1>
      <div className={style.container}>
        <div>
          <p>Content above</p>
          <IgrDivider />
          <p>Content below</p>
        </div>
      </div>
    </div>
  );
}
