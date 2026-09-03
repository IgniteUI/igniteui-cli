import style from './style.module.css';
import { IgrStepper, IgrStep } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Stepper</h1>
      <div className={style.container}>
        <IgrStepper>
          <IgrStep complete={true}>
            <span slot="title">Destination</span>
            <p>Choose where you want to travel.</p>
          </IgrStep>
          <IgrStep active={true}>
            <span slot="title">Travelers</span>
            <p>Add the details for each traveler.</p>
          </IgrStep>
          <IgrStep>
            <span slot="title">Payment</span>
            <p>Review your trip and complete the payment.</p>
          </IgrStep>
        </IgrStepper>
      </div>
    </div>
  );
}
