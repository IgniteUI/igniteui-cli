import style from './style.module.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const cities = [
  { id: 'london', name: 'London', country: 'United Kingdom' },
  { id: 'paris', name: 'Paris', country: 'France' },
  { id: 'new-york', name: 'New York', country: 'United States' },
  { id: 'toronto', name: 'Toronto', country: 'Canada' },
  { id: 'tokyo', name: 'Tokyo', country: 'Japan' },
  { id: 'sydney', name: 'Sydney', country: 'Australia' },
];

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Combo</h1>
      <div className={style.container}>
        <IgrCombo
          label="Favorite cities"
          placeholder="Select cities"
          data={cities}
          valueKey="id"
          displayKey="name"
          groupKey="country"
        />
      </div>
    </div>
  );
}
