import style from './style.module.css';
import { IgrList, IgrListItem, IgrListHeader, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>List</h1>
      <div className={style.container}>
        <IgrList>
          <IgrListHeader><span>Job Positions</span></IgrListHeader>
          <IgrListItem>
            <IgrAvatar slot="start" shape="circle" initials="AL" />
            <h2 slot="title">Abraham Lee</h2>
            <span slot="subtitle">Software Developer</span>
          </IgrListItem>
          <IgrListItem>
            <IgrAvatar slot="start" shape="circle" initials="JS" />
            <h2 slot="title">John Smith</h2>
            <span slot="subtitle">Team Lead</span>
          </IgrListItem>
          <IgrListItem>
            <IgrAvatar slot="start" shape="circle" initials="JD" />
            <h2 slot="title">Jonathan Deberkow</h2>
            <span slot="subtitle">UX Designer</span>
          </IgrListItem>
        </IgrList>
      </div>
    </div>
  );
}
