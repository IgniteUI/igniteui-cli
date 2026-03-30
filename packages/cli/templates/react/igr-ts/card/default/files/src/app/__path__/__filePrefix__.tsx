import style from './style.module.css';
import { IgrCard, IgrCardHeader, IgrCardContent, IgrCardActions, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Card</h1>
      <div className={style.container}>
        <IgrCard>
          <IgrCardHeader>
            <h3 slot="title">New York City</h3>
            <h5 slot="subtitle">City Guide</h5>
          </IgrCardHeader>
          <IgrCardContent>
            <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.</p>
          </IgrCardContent>
          <IgrCardActions>
            <IgrButton slot="start" variant="flat"><span>Like</span></IgrButton>
            <IgrButton slot="start" variant="flat"><span>Learn More</span></IgrButton>
          </IgrCardActions>
        </IgrCard>
      </div>
    </div>
  );
}
