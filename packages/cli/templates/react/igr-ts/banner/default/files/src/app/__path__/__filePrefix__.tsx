import style from './style.module.css';
import { IgrBanner } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Banner</h1>
      <div className={style.container}>
        <IgrBanner open={true}>
          You are currently not logged in! Please, log into your account first.
        </IgrBanner>
      </div>
    </div>
  );
}
