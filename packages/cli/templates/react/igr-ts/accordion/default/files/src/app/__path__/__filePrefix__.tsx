import style from './style.module.css';
import { IgrAccordion, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Accordion</h1>
      <div className={style.container}>
        <IgrAccordion singleExpand={false}>
          <IgrExpansionPanel>
            <div slot="title">Ignite UI for React</div>
            <p>Ignite UI for React is a complete library of UI components, giving you the ability to build modern web applications using encapsulation and the concept of reusable components in a dependency-free approach.</p>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <div slot="title">Ignite UI for Angular</div>
            <p>Ignite UI for Angular is a complete set of Material-based UI Widgets, Components and Sketch UI kits by Infragistics.</p>
          </IgrExpansionPanel>
          <IgrExpansionPanel>
            <div slot="title">Ignite UI for Web Components</div>
            <p>Ignite UI for Web Components is a complete library of UI components, giving you the ability to build modern web applications.</p>
          </IgrExpansionPanel>
        </IgrAccordion>
      </div>
    </div>
  );
}
