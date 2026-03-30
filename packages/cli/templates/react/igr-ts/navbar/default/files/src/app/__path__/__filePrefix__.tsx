import style from './style.module.css';
import { IgrNavbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Navbar</h1>
      <div className={style.container}>
        <IgrNavbar>
          <h2>Home</h2>
        </IgrNavbar>
      </div>
    </div>
  );
}
