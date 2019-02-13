import React, { Component } from 'react';
import style from './style.css';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges/ES5/igr-radial-gauge-module';
import { IgrRadialGauge } from 'igniteui-react-gauges/ES5/igr-radial-gauge';

IgrRadialGaugeModule.register();


export default class $(ClassName) extends Component {
    title = 'Radial Gauge'
    state = {
        data: []
    };

    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/radialgauge.html">
                    official documentation page
                    </a>                
                </div>
                <div className={style.container}>
                    <div className={style.gauge}>
                        <IgrRadialGauge
                            backingShape="Fitted"
                            backingBrush="#fcfcfc"
                            backingOutline="DodgerBlue"
                            backingOversweep={5}
                            backingCornerRadius={10}
                            backingStrokeThickness={5}
                            backingOuterExtent={0.8}
                            backingInnerExtent={0.15}
                            scaleStartAngle={135} scaleEndAngle={45}
                            height="300px" width="50%"
                            minimumValue={0} value={50}
                            maximumValue={80} interval={10}>
                        </IgrRadialGauge>
                    </div>
                    <div className={style.gauge}>
                        <IgrRadialGauge
                            value={50}
                            isNeedleDraggingEnabled={true}
                            isNeedleDraggingConstrained={true}
                            needleShape="NeedleWithBulb"
                            needleBrush="DodgerBlue"
                            needleOutline="DodgerBlue"
                            needleEndExtent={0.475}
                            needleStrokeThickness={1}
                            needlePivotShape="CircleOverlay"
                            needlePivotBrush="#9f9fa0"
                            needlePivotOutline="#9f9fa0"
                            needlePivotWidthRatio={0.2}
                            needlePivotStrokeThickness={1}
                            height="300px" width="50%"
                            minimumValue={0}
                            maximumValue={80} interval={10}>
                        </IgrRadialGauge>
                    </div>
                </div>
            </div>
        )
    }
}