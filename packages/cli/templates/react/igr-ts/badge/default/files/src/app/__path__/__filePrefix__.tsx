import style from './style.module.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Badge</h1>
      <div className={style.container}>
        <IgrBadge outlined={true}>Awaiting test</IgrBadge>
        <IgrBadge outlined={true} variant="danger">Critical issue</IgrBadge>
        <IgrBadge outlined={true} variant="success">Verified</IgrBadge>
      </div>
    </div>
  );
}
