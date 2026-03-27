import style from './style.module.css';
import { IgrInput, IgrCheckbox, IgrButton } from 'igniteui-react';
import 'igniteui-react/themes/light/bootstrap.css';

export default function $(ClassName)() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const entries = Array.from(formData.entries());
    const result = entries.map(([key, value]) => `${key}=${value}`).join('; ');
    alert(result);
  };

  return (
    <div>
      <h1 className={style.title}>Subscription Form</h1>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div>Subscribe</div>
          <IgrInput required={true} name="name" type="text" label="Your Name" />
          <IgrInput required={true} name="email" type="email" label="Your E-mail" />
          <IgrCheckbox name="agreement">I accept the license agreement</IgrCheckbox>
          <br />
          <div style={{ display: 'flex' }}>
            <IgrButton type="reset"><span>Reset</span></IgrButton>
            <IgrButton type="submit"><span>Submit</span></IgrButton>
          </div>
        </form>
      </div>
    </div>
  );
}
