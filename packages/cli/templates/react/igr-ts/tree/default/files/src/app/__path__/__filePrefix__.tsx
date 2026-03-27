import style from './style.module.css';
import { IgrTree, IgrTreeItem } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Tree</h1>
      <div className={style.container}>
        <IgrTree>
          <IgrTreeItem label="North America">
            <IgrTreeItem label="United States" />
            <IgrTreeItem label="Canada" />
            <IgrTreeItem label="Mexico" />
          </IgrTreeItem>
          <IgrTreeItem label="South America">
            <IgrTreeItem label="Brazil" />
            <IgrTreeItem label="Uruguay" />
          </IgrTreeItem>
          <IgrTreeItem label="Europe">
            <IgrTreeItem label="United Kingdom" />
            <IgrTreeItem label="Germany" />
            <IgrTreeItem label="Bulgaria" />
          </IgrTreeItem>
        </IgrTree>
      </div>
    </div>
  );
}
