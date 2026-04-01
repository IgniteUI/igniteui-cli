---
title: Blazor Data Grid | Column Sparkline | Infragistics
_description: See how Ignite UI for Blazor Data Table & Grid supports a template column which provides you a way to embed other components such as the column sparkline.
_keywords: Blazor Table, Data Grid, column sparkline, Ignite UI for Blazor, data binding, Infragistics
mentionedTypes: ["Grid", "CellInfo", "TemplateCellInfo", "Sparkline"]
namespace: Infragistics.Controls.Grids.Implementation
_canonicalLink: grids/data-grid
_tocName: Column Sparkline
_premium: true
---

<!-- Blazor, WebComponents -->

> \[!Note]
> Please note that this control has been deprecated and replaced with the [Grid](../data-grid.md) component, and as such, we recommend migrating to that control. This will not be receiving any new features, bug fixes will be deprioritized. For help or questions on migrating your codebase to the Data Grid, please contact support.

<!-- end: Blazor, WebComponents -->

# Blazor Column Sparkline

The Ignite UI for Blazor Data Table / Data Grid supports a Template Column which provides you to a way to embed other components such as Ignite UI for Blazor sparkline component. Refer to the [Column Types](column-types.md) topic for other types of columns supported in the [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html) component.

## Blazor Column Sparkline Example

```razor
@using Microsoft.AspNetCore.Components
@using Microsoft.AspNetCore.Components.Rendering
@using IgniteUI.Blazor.Controls

<div class="container vertical">
    <div class="container vertical">
        @if (Data != null)
        {
            <IgbDataGrid Height="100%" Width="100%"
                      RowHeight="90"
                      AutoGenerateColumns="false"

                      DataSource="Data">
                <IgbTextColumn Field="ProductID" HeaderText="ID" Width="@("*>110")"
                            HorizontalAlignment="@CellContentHorizontalAlignment.Center" />
                <IgbTextColumn Field="ProductName" HeaderText="Product" Width="@("*>140")" />
                <IgbNumericColumn Field="ProductPrice" HeaderText="Price" Width="@("*>110")"
                               PositivePrefix="$" ShowGroupingSeparator="true"
                               MinFractionDigits="2" />

                @* custom sparkline solumn: *@
                <IgbTemplateColumn Field="OrderHistory" Width="@("*>180")"
                                HeaderText="Order History" PaddingTop="10" PaddingBottom="10"
                                HorizontalAlignment="CellContentHorizontalAlignment.Center">
                    <Template>
                        <div style="width: 100%; height: 70px; background: transparent">
                            <IgbSparkline Height="100%" Width="100%"
                                       DataSource="@((context.RowItem as Product).OrderHistory)"
                                       DisplayType="SparklineDisplayType.Line"
                                       ValueMemberPath="Sold"
                                       LabelMemberPath="Week"
                                       Brush="rgb(21, 190, 6)">
                            </IgbSparkline>
                        </div>
                    </Template>
                </IgbTemplateColumn>

                <IgbNumericColumn Field="OrderCount" HeaderText="Orders" Width="@("*>110")"
                               HorizontalAlignment="CellContentHorizontalAlignment.Center" />
                <IgbNumericColumn Field="Profit" Width="@("*>120")" PositivePrefix="$" ShowGroupingSeparator="true" />

                <IgbImageColumn IsEditable="false" Field="CountryFlag" HeaderText="Country" Width="@("*>120")"
                             ContentOpacity="1" HorizontalAlignment="CellContentHorizontalAlignment.Center"
                             PaddingTop="10" PaddingBottom="10"/>
                <IgbTextColumn Field="Status" HeaderText="Status" Width="@("*>120")"
                            HorizontalAlignment="CellContentHorizontalAlignment.Center" />
            </IgbDataGrid>
        }
    </div>
</div>

@code {

    private List<Product> Data;

    protected override void OnInitialized()
    {
        this.Data = Products.GetData(20);
    }
}
```


<div class="divider--half"></div>

## Code Snippet

The following code example shows how to embed [`IgbSparkline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html) component in [`IgbTemplateColumn`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbTemplateColumn.html) of the [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html) component :

```razor
<IgbDataGrid Height="100%" Width="100%"
          RowHeight="90"
          AutoGenerateColumns="false"
          DataSource="DataSource">
    <IgbTemplateColumn Field="OrderHistory" Width="@("*>180")" HeaderText="Order History" >
        <Template>
            <RenderFragment>
                 <div style="width: 100%; height: 70px; background: transparent">
                     <Sparkline Height="100%" Width="100%"
                                DataSource="@((context.RowItem as Product).OrderHistory)"
                                DisplayType="SparklineDisplayType.Line"
                                ValueMemberPath="Sold"
                                LabelMemberPath="Week"
                                Brush="rgb(21, 190, 6)">
                     </Sparkline>
                 </div>
            </RenderFragment>
        </Template>
    </IgbTemplateColumn>
</IgbDataGrid>
```

## API References

- [`IgbDataGrid`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbDataGrid.html)
- [`IgbSparkline`](https://www.infragistics.com/blazor/docs/api/api/IgniteUI.Blazor.Controls.IgbSparkline.html)
