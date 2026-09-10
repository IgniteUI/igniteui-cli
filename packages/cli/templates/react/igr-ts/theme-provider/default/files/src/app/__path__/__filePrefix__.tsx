import style from './style.module.css';
import { IgrButton, IgrThemeProvider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div className={style.page}>
      <h1 className={style.title}>Theme Provider</h1>
      <IgrThemeProvider theme="bootstrap">
        <section className={style.example}>
          <h2>Application theme</h2>
          <p>Descendant components inherit the theme from the provider.</p>
          <IgrButton variant="contained">Themed button</IgrButton>
        </section>
      </IgrThemeProvider>
    </div>
  );
}
