import style from './style.module.css';
import { IgrHighlight } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Highlight</h1>
      <div className={style.container}>
        <IgrHighlight searchText="world">
          <p>Hello, world! The world is a wonderful place.</p>
        </IgrHighlight>
      </div>
    </div>
  );
}
