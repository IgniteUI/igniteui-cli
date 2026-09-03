import style from './style.module.css';
import { IgrSelect, IgrSelectGroup, IgrSelectItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Select</h1>
      <div className={style.container}>
        <IgrSelect label="Favorite city" placeholder="Choose a city">
          <IgrSelectGroup>
            <span slot="label">Europe</span>
            <IgrSelectItem value="london">London</IgrSelectItem>
            <IgrSelectItem value="paris">Paris</IgrSelectItem>
          </IgrSelectGroup>
          <IgrSelectGroup>
            <span slot="label">North America</span>
            <IgrSelectItem value="new-york">New York</IgrSelectItem>
            <IgrSelectItem value="toronto">Toronto</IgrSelectItem>
          </IgrSelectGroup>
        </IgrSelect>
      </div>
    </div>
  );
}
