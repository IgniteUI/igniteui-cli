import React, { Component } from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts/ES5/igr-doughnut-chart-module';
import { IgrDoughnutChart } from 'igniteui-react-charts/ES5/igr-doughnut-chart';
import { IgrRingSeriesModule } from 'igniteui-react-charts/ES5/igr-ring-series-module';
import { IgrRingSeries } from 'igniteui-react-charts/ES5/igr-ring-series';
import { IgrItemLegendModule } from 'igniteui-react-charts/ES5/igr-item-legend-module';
import { IgrItemLegend } from 'igniteui-react-charts/ES5/igr-item-legend';

import style from './style.css';

IgrItemLegendModule.register();

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();


const data = [
    { MarketShare: 30, Company: "Google", },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 30, Company: "Apple", },
    { MarketShare: 15, Company: "Samsung", },
    { MarketShare: 10, Company: "Other", },
];

export default class $(ClassName) extends Component {
    title = 'Doughnut Chart'
    data = [];

    chart = null;
    legend = null;

    onChartRef(chart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    onLegendRef(legend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    state = {
        data: []
    };

    componentWillMount() {
        this.setState({ data });
        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
    }

    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/doughnutchart.html">
                        official documentation page
                    </a>
                </div>
                <div className={style.container}>
                    <div className={style.legend}>
                        <IgrItemLegend ref={this.onLegendRef} />
                    </div>
                    <div className={style.chart}>
                        <IgrDoughnutChart ref={this.onChartRef}
                            width="300px"
                            height="300px">
                            <IgrRingSeries
                                name="ring1"
                                dataSource={this.state.data}
                                labelMemberPath="Company"
                                valueMemberPath="MarketShare" />
                        </IgrDoughnutChart>
                    </div>
                </div>
            </div>
        )
    }
}