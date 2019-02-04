import React, { Component } from 'react';
import style from './style.css';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges/ES5/igr-linear-gauge-module';
import { IgrLinearGauge } from 'igniteui-react-gauges/ES5/igr-linear-gauge';

IgrLinearGaugeModule.register();

export default class $(ClassName) extends Component {
    title = 'Linear Gauge';
    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/lineargauge.html">
                        official documentation page
                    </a>
                </div>
                <div className={style.container}>
                    <div className={style.gauge}>
                        <IgrLinearGauge
                            height="80px" width="400px"
                            minimumValue={0}
                            maximumValue={100} interval={10}
                            value={50}
                            isNeedleDraggingEnabled={true}
                            needleShape="Custom"
                            needleBrush="DodgerBlue"
                            needleOutline="DodgerBlue"
                            needleStrokeThickness={1}
                            needleBreadth={15}
                            needleInnerExtent={0.35}
                            needleOuterExtent={0.65}
                            needleOuterPointExtent={0.8}
                            needleInnerPointExtent={0.325}
                            needleInnerPointWidth={0}
                            needleOuterPointWidth={0.3}
                            needleInnerBaseWidth={0}
                            needleOuterBaseWidth={0.07}>
                        </IgrLinearGauge>
                    </div>
                    <div className={style.gauge}>
                        <IgrLinearGauge
                            height="80px" width="400px"
                            minimumValue={0} value={50}
                            maximumValue={100} interval={10}
                            isScaleInverted={false}
                            scaleBrush="DodgerBlue"
                            scaleOutline="DarkViolet"
                            scaleStrokeThickness={1}
                            scaleInnerExtent={0.05}
                            scaleOuterExtent={0.65}
                            scaleStartExtent={0.05}
                            scaleEndExtent={0.95}>
                        </IgrLinearGauge>
                    </div>
                </div>
            </div>
        )
    }
}