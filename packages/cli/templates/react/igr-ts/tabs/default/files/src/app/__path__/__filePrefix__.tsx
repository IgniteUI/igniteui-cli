import style from './style.module.css';
import { IgrTabs, IgrTab, IgrTabPanel } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Tabs</h1>
      <div className={style.container}>
        <IgrTabs>
          <IgrTab panel="first" selected={true}><span>Albums</span></IgrTab>
          <IgrTab panel="second"><span>Favourites</span></IgrTab>
          <IgrTab panel="third" disabled={true}><span>Info</span></IgrTab>
          <IgrTabPanel slot="panel" id="first"><p>Sgt. Peppers Lonely Hearts Club Band</p><p>The Dark Side of the Moon</p><p>Thriller</p></IgrTabPanel>
          <IgrTabPanel slot="panel" id="second"><p>The Dark Side of the Moon</p><p>Led Zeppelin IV</p></IgrTabPanel>
        </IgrTabs>
      </div>
    </div>
  );
}
