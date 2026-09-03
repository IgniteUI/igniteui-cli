import style from './style.module.css';
import { IgrCarousel, IgrCarouselSlide } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function $(ClassName)() {
  return (
    <div>
      <h1 className={style.title}>Carousel</h1>
      <div className={style.container}>
        <IgrCarousel>
          <IgrCarouselSlide active={true}>
            <h2>London</h2>
            <p>The capital of the United Kingdom, known for its history and landmarks.</p>
          </IgrCarouselSlide>
          <IgrCarouselSlide>
            <h2>Paris</h2>
            <p>The capital of France, famous for the Eiffel Tower and its museums.</p>
          </IgrCarouselSlide>
          <IgrCarouselSlide>
            <h2>Tokyo</h2>
            <p>The capital of Japan, a bustling metropolis blending tradition and technology.</p>
          </IgrCarouselSlide>
        </IgrCarousel>
      </div>
    </div>
  );
}
