---
title: React Chart Animations | Data Visualization | Infragistics
_description: Infragistics' React Chart Animations
_keywords: React Charts, Animations, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Animations
_premium: true
---

# React Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

Animations are disabled in the Ignite UI for React Charts, but they can be enabled by setting the [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isTransitionInEnabled) property to true. From there, you can set the [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInDuration) property to determine how long your animation should take to complete and the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInMode) to determine the type of animation that takes place.

## React Chart Animation Example

The following example depicts a [Line Chart](../types/line-chart.md) with an animation set to the default [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInMode) - "Auto." The drop-down and slider at the top in this example will allow you to modify the [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInMode) and [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInDuration), respectively, so that you can see what the different supported animations look like at different speeds.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

export default class CategoryChartLineChartWithAnimations extends React.Component<any, any> {
    
    public data: any[];
    public chart: IgrCategoryChart;

    constructor(props: any) {            
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.onTransitionInDurationChanged = this.onTransitionInDurationChanged.bind(this);
        this.onTransitionInModeChanged = this.onTransitionInModeChanged.bind(this);        
        this.onReloadChartClick = this.onReloadChartClick.bind(this);

        this.state = {            
            transitionLabel: "1000ms",
            transitionInDuration: 1000,
            transitionInMode: "Auto"
        };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <span className="options-label">Transition Type </span>
                    <select onChange={this.onTransitionInModeChanged}>
                        <option>Auto</option>
                        <option>AccordionFromBottom</option>
                        <option>AccordionFromCategoryAxisMaximum</option>
                        <option>AccordionFromCategoryAxisMinimum</option>
                        <option>AccordionFromLeft</option>
                        <option>AccordionFromRight</option>
                        <option>AccordionFromTop</option>
                        <option>AccordionFromValueAxisMaximum</option>
                        <option>AccordionFromValueAxisMinimum</option>
                        <option>Expand</option>
                        <option>FromZero</option>
                        <option>SweepFromBottom</option>
                        <option>SweepFromCategoryAxisMaximum</option>
                        <option>SweepFromCategoryAxisMinimum</option>
                        <option>SweepFromCenter</option>
                        <option>SweepFromLeft</option>
                        <option>SweepFromRight</option>
                        <option>SweepFromTop</option>
                        <option>SweepFromValueAxisMaximum</option>
                        <option>SweepFromValueAxisMinimum</option>
                    </select>
                    <label className="options-value" style={{ width: "75px" }}>{this.state.transitionLabel}</label>
                    <input className="options-slider" type="range" min="50" max="2000" step="50" defaultValue="1000"
                           onChange={this.onTransitionInDurationChanged} />
                    <button onClick={this.onReloadChartClick}>Reload Chart</button>
                </div>

                <IgrCategoryChart width="100%" height="calc(100% - 30px)"
                    ref={this.onChartRef}
                    dataSource={this.data}
                    chartType="Line"
                    isTransitionInEnabled={true}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    transitionInDuration={this.state.transitionInDuration}
                    transitionInMode={this.state.transitionInMode}
                    yAxisTitle="TWh"
                    yAxisTitleLeftMargin={10}
                    yAxisTitleRightMargin={5}
                    yAxisLabelLeftMargin={0} 
					computedPlotAreaMarginMode="Series"/>
            </div>
        );
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
    }

    public initData() {
        this.data = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 }
        ];
    }

    public onTransitionInModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ transitionInMode: val});
        this.initData();
    }

    public onTransitionInDurationChanged(e: any) {
        const val = e.target.value;
        this.setState({ transitionInDuration: val, transitionLabel: val + "ms"});
        this.initData();
    }

    public onReloadChartClick(e: any){
        this.chart.replayTransitionIn();
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartLineChartWithAnimations/>);
```


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgrCategoryChart`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html)
- [`isTransitionInEnabled`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#isTransitionInEnabled)
- [`transitionInDuration`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInDuration)
- [`transitionInMode`](https://www.infragistics.com/products/ignite-ui-react/api/docs/typescript/latest/classes/igniteui_react_charts.igrcategorychart.html#transitionInMode)
