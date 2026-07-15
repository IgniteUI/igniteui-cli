import style from './style.module.css';
import { IgrTabs, IgrTab } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Tabs</h1>
      <div className={style.container}>
        <IgrTabs>
          <IgrTab label="Albums" selected={true}>
            <p>Sgt. Peppers Lonely Hearts Club Band</p>
            <p>The Dark Side of the Moon</p>
            <p>Thriller</p>
          </IgrTab>
          <IgrTab label="Favourites">
            <p>The Dark Side of the Moon</p>
            <p>Led Zeppelin IV</p>
          </IgrTab>
          <IgrTab label="Info" disabled={true}>
            <p>No content available</p>
          </IgrTab>
        </IgrTabs>
      </div>
    </div>
  );
}
