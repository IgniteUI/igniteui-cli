import style from './style.module.css';
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Nav Drawer</h1>
      <div className={style.container}>
        <IgrNavDrawer position="relative" open={true}>
          <IgrNavDrawerItem active={true}>
            <IgrIcon slot="icon" name="home" collection="default" />
            <span slot="content">Home</span>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem>
            <IgrIcon slot="icon" name="search" collection="default" />
            <span slot="content">Search</span>
          </IgrNavDrawerItem>
          <IgrNavDrawerItem>
            <IgrIcon slot="icon" name="settings" collection="default" />
            <span slot="content">Settings</span>
          </IgrNavDrawerItem>
        </IgrNavDrawer>
      </div>
    </div>
  );
}
