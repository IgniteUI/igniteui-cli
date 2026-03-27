import style from './style.module.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Avatar</h1>
      <div className={style.container}>
        <IgrAvatar shape="circle" size="large" initials="JD" />
        <IgrAvatar shape="rounded" size="medium" initials="AB" />
        <IgrAvatar shape="circle" size="small" initials="CD" />
      </div>
    </div>
  );
}
