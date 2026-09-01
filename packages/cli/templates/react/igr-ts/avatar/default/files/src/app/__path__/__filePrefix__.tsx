import style from './style.module.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Avatar</h1>
      <div className={style.container}>
        <IgrAvatar className={style.large} shape="circle" initials="JD" />
        <IgrAvatar className={style.medium} shape="rounded" initials="AB" />
        <IgrAvatar className={style.small} shape="circle" initials="CD" />
      </div>
    </div>
  );
}
