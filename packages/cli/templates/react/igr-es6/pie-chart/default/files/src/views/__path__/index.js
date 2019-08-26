import React, { Component } from 'react';
import { IgrPieChartModule } from 'igniteui-react-charts/ES5/igr-pie-chart-module';
import { IgrPieChart } from 'igniteui-react-charts/ES5/igr-pie-chart';
import { IgrItemLegend } from 'igniteui-react-charts/ES5/igr-item-legend';
import { IgrItemLegendModule } from 'igniteui-react-charts/ES5/igr-item-legend-module';

import style from './style.css';

IgrPieChartModule.register();
IgrItemLegendModule.register();

const data = [
    { MarketShare: 30, Company: "Google", },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 30, Company: "Apple", },
    { MarketShare: 15, Company: "Samsung", },
    { MarketShare: 10, Company: "Other", },
];

export default class $(ClassName) extends Component {
    title = 'Pie Chart';
    state = {
        data: []
    };

    legend = null;
    chart = null;

    onLegendRef(legend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    onChartRef(chart) {
        this.chart = chart;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    componentWillMount() {
        this.setState({
            data
        });
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onChartRef = this.onChartRef.bind(this);
    }

    handleClick() {
        debugger;
    }

    render() {
        return (
            <div>
                <h1 className={style.title}>{this.title}</h1>
                <div>
                    Read more on the&nbsp;
                    <a href="https://www.infragistics.com/products/ignite-ui-react/react/components/piechart.html">
                        official documentation page
                    </a>
                </div>
                <div className={style.container}>
                    <div className={style.legend}>
                        <IgrItemLegend ref={this.onLegendRef} />
                    </div>
                    <div className={style.chart}>
                        <IgrPieChart dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"
                            width="500px"
                            height="500px"
                            ref={this.onChartRef}
                            legendLabelMemberPath="Label" />

                    </div>
                </div>
            </div>
        )
    }
}