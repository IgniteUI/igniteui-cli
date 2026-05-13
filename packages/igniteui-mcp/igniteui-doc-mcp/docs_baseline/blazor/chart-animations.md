---
title: Blazor Chart Animations | Data Visualization | Infragistics
_description: Infragistics' Blazor Chart Animations
_keywords: Blazor Charts, Animations, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
_tocName: Chart Animations
_premium: true
---

# Blazor Chart Animations

Animations allows you to ease-in the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the origin of y-axis.

Animations are disabled in the Ignite UI for Blazor Charts, but they can be enabled by setting the [`IsTransitionInEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsTransitionInEnabled) property to true. From there, you can set the [`TransitionInDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInDuration) property to determine how long your animation should take to complete and the [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInMode) to determine the type of animation that takes place.

## Blazor Chart Animation Example

The following example depicts a [Line Chart](../types/line-chart.md) with an animation set to the default [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInMode) - "Auto." The drop-down and slider at the top in this example will allow you to modify the [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInMode) and [`TransitionInDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInDuration), respectively, so that you can see what the different supported animations look like at different speeds.

```razor
@using IgniteUI.Blazor.Controls


<div class="container vertical">
    <div class="options horizontal">
        <span class="options-label">Transition Type </span>
        <select @bind="@SelectedTransition">
            <option>@CategoryTransitionInMode.AccordionFromBottom</option>
            <option>@CategoryTransitionInMode.AccordionFromCategoryAxisMaximum</option>
            <option>@CategoryTransitionInMode.AccordionFromCategoryAxisMinimum</option>
            <option>@CategoryTransitionInMode.AccordionFromLeft</option>
            <option>@CategoryTransitionInMode.AccordionFromRight</option>
            <option>@CategoryTransitionInMode.AccordionFromTop</option>
            <option>@CategoryTransitionInMode.AccordionFromValueAxisMaximum</option>
            <option>@CategoryTransitionInMode.AccordionFromValueAxisMinimum</option>
            <option>@CategoryTransitionInMode.Expand</option>
            <option>@CategoryTransitionInMode.FromZero</option>
            <option>@CategoryTransitionInMode.SweepFromBottom</option>
            <option>@CategoryTransitionInMode.SweepFromCategoryAxisMaximum</option>
            <option>@CategoryTransitionInMode.SweepFromCategoryAxisMinimum</option>
            <option>@CategoryTransitionInMode.SweepFromCenter</option>
            <option>@CategoryTransitionInMode.SweepFromLeft</option>
            <option>@CategoryTransitionInMode.SweepFromRight</option>
            <option>@CategoryTransitionInMode.SweepFromTop</option>
            <option>@CategoryTransitionInMode.SweepFromValueAxisMaximum</option>
            <option>@CategoryTransitionInMode.SweepFromValueAxisMinimum</option>
            <option>@CategoryTransitionInMode.Auto</option>
        </select>
        <label class="options-value" style="width: 75px">@IntervalLabel</label>
        <input class="options-slider" type="range" min="50" max="2000" step="50"
               value=@TransitionInInterval @onchange="OnTransitionIntervalChange" />
        <button @onclick="OnReloadChart">Reload Chart</button>
    </div>
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbCategoryChart Height="100%" Width="100%"
                @ref="Chart"
                DataSource="Data"
                ChartType="CategoryChartType.Line"
                IsTransitionInEnabled="true"
                TransitionInMode="@SelectedTransition"
                TransitionInDuration="@TransitionInInterval"
                IsHorizontalZoomEnabled="false"
                IsVerticalZoomEnabled="false"
                YAxisTitle="TWh"
                YAxisTitleLeftMargin="10"
                YAxisTitleRightMargin="5"
                YAxisLabelLeftMargin="0"
                ComputedPlotAreaMarginMode=ComputedPlotAreaMarginMode.Series>
            </IgbCategoryChart>
        }
    </div>
</div>

@code {


    private int _transitionInterval = 1000; // milliseconds
    private int TransitionInInterval
    {
        get { return _transitionInterval; }
        set
        {
            _transitionInterval = value;
            StateHasChanged();
        }
    }
    private string IntervalLabel
    {
        get
        {
            return (_transitionInterval).ToString("0") + "ms";
        }
    }
    private CategoryTransitionInMode _selectedTransition;
    private CategoryTransitionInMode SelectedTransition
    {
        get { return _selectedTransition; }
        set
        {
            _selectedTransition = value;
            StateHasChanged();
        }
    }
    private IgbCategoryChart _Chart;
    private IgbCategoryChart Chart
    {
        get { return _Chart; }
        set { _Chart = value;
            StateHasChanged();
        }
    }

    private List<EnergyRenewableInfo> Data = new EnergyRenewableData();

    private void OnTransitionIntervalChange(ChangeEventArgs args)
    {
        this.TransitionInInterval = int.Parse(args.Value.ToString());
    }

    private void OnReloadChart()
    {
        this.Chart.ReplayTransitionIn();
    }
}
```

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

- [Chart Annotations](chart-annotations.md)
- [Chart Highlighting](chart-highlighting.md)
- [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

- [`IgbCategoryChart`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html)
- [`IsTransitionInEnabled`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_IsTransitionInEnabled)
- [`TransitionInDuration`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInDuration)
- [`TransitionInMode`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbCategoryChart.html#IgniteUI_Blazor_Controls_IgbCategoryChart_TransitionInMode)
