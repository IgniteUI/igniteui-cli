import style from './style.module.css';
import { IgrInput, IgrRadioGroup, IgrRadio } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Form</h1>
      <div className={style.container}>
        <form>
          <IgrInput label="Full name" type="text" name="full-name" />
          <IgrInput label="Phone number" type="tel" name="phone-number" placeholder="123-45-678" />
          <div>
            <label>Gender:</label>
            <IgrRadioGroup>
              <IgrRadio name="gender" value="Male">Male</IgrRadio>
              <IgrRadio name="gender" value="Female">Female</IgrRadio>
            </IgrRadioGroup>
          </div>
        </form>
      </div>
    </div>
  );
}
