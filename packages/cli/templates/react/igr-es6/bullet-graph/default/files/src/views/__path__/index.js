import React, { Component } from 'react';
import { IgrBulletGraphModule } from 'igniteui-react-gauges/ES5/igr-bullet-graph-module';
import { IgrBulletGraph } from 'igniteui-react-gauges/ES5/igr-bullet-graph';
import style from './style.css';

IgrBulletGraphModule.register();


export default class $(ClassName) extends Component {
    title = 'Bullet Graph'
    state = {
        data: []
    };

    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/bulletgraph.html">
                        official documentation page
                    </a>
                </div>
                <div className={style.container}>
                    <div className={style.graph}>
                        <IgrBulletGraph
                            height="80px" width="400px"
                            minimumValue={0} value={70} interval={10}
                            maximumValue={100} targetValue={90}
                            isScaleInverted={false}
                            scaleBackgroundBrush="DodgerBlue"
                            scaleBackgroundOutline="DarkViolet"
                            scaleBackgroundThickness={2}
                            scaleStartExtent={0.05}
                            scaleEndExtent={0.95}>
                        </IgrBulletGraph>
                    </div>
                    <div className={style.graph}>
                        <IgrBulletGraph
                            value={50}
                            valueBrush="DodgerBlue"
                            valueStrokeThickness={1}
                            valueInnerExtent={0.5}
                            valueOuterExtent={0.65}
                            targetValue={80}
                            targetValueBreadth={10}
                            targetValueBrush="LimeGreen"
                            targetValueOutline="LimeGreen"
                            targetValueStrokeThickness={1}
                            targetValueInnerExtent={0.3}
                            targetValueOuterExtent={0.85}
                            height="80px" width="400px"
                            minimumValue={0}
                            maximumValue={100}>
                        </IgrBulletGraph>
                    </div>
                </div>
            </div>
        )
    }
}