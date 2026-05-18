---
title: Web Components Tree Grid Cell Merging - Ignite UI for Web Components
_description: Position and size columns in a more powerful way, using the multi-row layout functionality in the Ignite UI for Web Components for Web Components Tree Grid. Check out examples and demos!
_keywords: cell merging, Web Components, Tree Grid, IgcTreeGrid, Ignite UI for Web Components, Infragistics
_license: commercial
mentionedTypes: ["Infragistics.Controls.TreeGrid", "Infragistics.Controls.GridCell", "Infragistics.Controls.TreeGridRow", "Infragistics.Controls.Column"]
sharedComponents: ["Grid", "TreeGrid", "HierarchicalGrid"]
namespace: Infragistics.Controls
_canonicalLink: {CanonicalLinkToGridCellMerging}
_tocName: Cell Merging
_premium: true
---

# Web Components Tree Grid Cell Merging

The Ignite UI for Web Components Tree Grid provides a Cell Merging feature that combines two or more adjacent cells with the same value into a single, larger cell. Merging is applied vertically within a column and helps improve readability by reducing duplicate values. The feature can be configured to merge cells either by default matching data values or by applying a custom condition.

## Web Components Tree Grid Cell Merging Example

<!-- ComponentStart: TreeGrid -->

```typescript
export class EmployeesFlatDetailsItem {
    public constructor(init: Partial<EmployeesFlatDetailsItem>) {
        Object.assign(this, init);
    }

    public Address: string;
    public Age: number;
    public City: string;
    public Country: string;
    public Fax: string;
    public HireDate: string;
    public ID: number;
    public Name: string;
    public ParentID: number;
    public Phone: string;
    public PostalCode: number;
    public Title: string;
    public LastName: string;
    public FullAddress: string;

}
export class EmployeesFlatDetails extends Array<EmployeesFlatDetailsItem> {
    public constructor(items: Array<EmployeesFlatDetailsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new EmployeesFlatDetailsItem({ Address: `Obere Str. 57`, Age: 55, City: `Berlin`, Country: `Germany`, Fax: `030-0076545`, HireDate: `2008-03-20`, ID: 1, Name: `Johnathan Winchester`, ParentID: -1, Phone: `030-0074321`, PostalCode: 12209, Title: `Development Manager`, LastName: `Winchester`, FullAddress: `Obere Str. 57, Berlin, Germany` }),
                new EmployeesFlatDetailsItem({ Address: `Avda. de la Constitución 2222`, Age: 42, City: `México D.F.`, Country: `Mexico`, Fax: `(51) 555-3745`, HireDate: `2014-01-22`, ID: 4, Name: `Ana Sanders`, ParentID: -1, Phone: `(5) 555-4729`, PostalCode: 5021, Title: `CEO`, LastName: `Sanders`, FullAddress: `Avda. de la Constitución 2222, México D.F., Mexico` }),
                new EmployeesFlatDetailsItem({ Address: `Mataderos 2312`, Age: 49, City: `México D.F.`, Country: `Mexico`, Fax: `(5) 555-3995`, HireDate: `2014-01-22`, ID: 18, Name: `Victoria Lincoln`, ParentID: -1, Phone: `(5) 555-3932`, PostalCode: 5023, Title: `Accounting Manager`, LastName: `Lincoln`, FullAddress: `Mataderos 2312, México D.F., Mexico` }),
                // ... 15 more items
            ];
            super(...newItems.slice(0));
        }
    }
}
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<!-- ComponentEnd: TreeGrid -->

## Enabling and Using Cell Merging

Cell merging in the grid is controlled at two levels:

- Grid-level merge mode – determines when merging is applied.
- Column-level merge toggle – determines which columns can merge cells.

### Grid Merge Mode

The grid exposes a `cellMergeMode` property that accepts values from the `GridCellMergeMode` enum:

- `always` - Merges any adjacent cells that meet the merging condition, regardless of sort state.
- `onSort` - Merges adjacent cells only when the column is sorted **(default value)**.

```html
<igc-tree-grid cell-merge-mode="always">
    ...
</igc-tree-grid>
```

### Column Merge Toggle

At the column level, merging can be enabled or disabled with the `merge` property.

```html
<igc-column field="OrderID" merge="true"></igc-column>
<igc-column field="ShipperName" merge="false"></igc-column>
```

In the above example:

- The **OrderID** column will merge adjacent duplicate values.
- The **ShipperName** column will render normally without merging.

### Combined Example

```html
<igc-tree-grid cell-merge-mode="onSort" auto-generate="false">
    <igc-column field="OrderID" header="Order ID" merge="true"></igc-column>
    <igc-column field="ShipperName" header="Shipper Name" merge="false"></igc-column>
    <igc-column field="Salesperson" header="Salesperson"></igc-column>
</igc-tree-grid>
```

Here, the grid is set to merge only when columns are sorted, and both Category and Product columns are configured for merging.

## Custom Merge Conditions

In addition to the built-in `always` and `onSort` modes, the grid allows you to define a custom condition for merging cells through the `mergeStrategy` property. This strategy controls both how cells are compared and how merged ranges are calculated.

### Merge Strategy Class

A custom merge strategy must implement the [`IgcGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcgridmergestrategy.html) class:

```ts
export declare class IgcGridMergeStrategy {
    merge: (
        data: any[],
        field: string,
        comparer: (prevRecord: any, currentRecord: any, field: string) => boolean,
        result: any[],
        activeRowIndex?: number,
        grid?: GridType
    ) => any[];

    comparer: (prevRecord: any, record: any, field: string) => boolean;
}
```

- `merge` - defines how merged cells are produced.
- `comparer` - defines the condition to decide if two adjacent records should be merged.

<!-- ComponentStart: TreeGrid -->

The [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html) provides two built-in strategies that implement the `IGridMergeStrategy` interface: [`IgcDefaultTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdefaulttreegridmergestrategy.html) and [`IgcByLevelTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbyleveltreegridmergestrategy.html). [`IgcDefaultTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdefaulttreegridmergestrategy.html) merges all cells with the same value, regardless of their hierarchical level. In contrast, [`IgcByLevelTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbyleveltreegridmergestrategy.html) only merges cells if they have the same value and are located at the same level, making level a required condition for merging.

### Extending the Default Strategy

If you only want to customize part of the behavior (for example, the comparer logic), you can extend one of the built-in strategies, either [`IgcDefaultTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcdefaulttreegridmergestrategy.html) or [`IgcByLevelTreeGridMergeStrategy`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igcbyleveltreegridmergestrategy.html), and override the relevant methods.

```ts
export class MyCustomStrategy extends IgcDefaultTreeGridMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
```

<!-- ComponentEnd: TreeGrid -->

### Applying a Custom Strategy

Once defined, assign the strategy to the grid through the `mergeStrategy` property:

### Demo

<!-- ComponentStart: TreeGrid -->

```typescript
/* eslint-disable @typescript-eslint/naming-convention */
export const generateEmployeeDetailedFlatData2 = () => ([
    {
        Address: 'Obere Str. 57',
        Age: 55,
        City: 'Berlin',
        Country: 'Germany',
        Fax: '030-0076545',
        HireDate: new Date(2008, 3, 20),
        ID: 1,
        Name: 'Johnathan Winchester',
        ParentID: -1,
        Phone: '030-0074321',
        PostalCode: '12209',
        Title: 'Development Manager'
    },
    {
        Address: 'Forsterstr. 57',
        Age: 29,
        City: 'Berlin',
        Country: 'Germany',
        Fax: '0621-08924',
        HireDate: new Date(2009, 6, 19),
        ID: 2,
        Name: 'Thomas Anderson',
        ParentID: 1,
        Phone: '0621-08460',
        PostalCode: '68306',
        Title: 'Senior Software Developer'
    },
    {
        Address: 'Berguvsvägen 8',
        Age: 43,
        City: 'Berlin',
        Country: 'Germany',
        Fax: '0921-12 34 67',
        HireDate: new Date(2011, 6, 3),
        ID: 3,
        Name: 'Michael Burke',
        ParentID: 1,
        Phone: '0921-12 34 65',
        PostalCode: 'S-958 22',
        Title: 'Senior Software Developer'
    },
    {
        Address: 'Hauptstr. 29',
        Age: 50,
        City: 'Berlin',
        Country: 'Germany',
        Fax: '(5) 555-6691',
        HireDate: new Date(2007, 11, 18),
        ID: 19,
        Name: 'Klaus Schmidt',
        ParentID: 1,
        Phone: '0452-076545',
        PostalCode: '3012',
        Title: 'Senior Software Developer'
    },
    {
        Address: 'Walserweg 21',
        Age: 39,
        City: 'Berlin',
        Country: 'Germany',
        Fax: '0241-059428',
        HireDate: new Date(2010, 3, 22),
        ID: 9,
        Name: 'Francisco Chang',
        ParentID: 1,
        Phone: '0241-039123',
        PostalCode: '52066',
        Title: 'Senior Software Developer'
    },
    {
        Address: 'Avda. de la Constitución 2222',
        Age: 42,
        City: 'México D.F.',
        Country: 'Mexico',
        Fax: '(5) 555-3745',
        HireDate: new Date(2014, 1, 22),
        ID: 4,
        Name: 'Ana Sanders',
        ParentID: -1,
        Phone: '(5) 555-4729',
        PostalCode: '05021',
        Title: 'CEO'
    },
    {
        Address: 'Mataderos 2312',
        Age: 49,
        City: 'México D.F.',
        Country: 'Mexico',
        Fax: '(5) 555-3995',
        HireDate: new Date(2014, 1, 22),
        ID: 18,
        Name: 'Victoria Lincoln',
        ParentID: -1,
        Phone: '(5) 555-3932',
        PostalCode: '05023',
        Title: 'Accounting Manager'
    },
    {
        Address: 'Sierras de Granada 9993',
        Age: 44,
        City: 'México D.F.',
        Country: 'Mexico',
        Fax: '(5) 555-7293',
        HireDate: new Date(2014, 4, 4),
        ID: 17,
        Name: 'Antonio Moreno',
        ParentID: 18,
        Phone: '(5) 555-3392',
        PostalCode: '05022',
        Title: 'Senior Accountant'
    },
    {
        Address: 'Cerrito 333',
        Age: 39,
        City: 'Buenos Aires',
        Country: 'Argentina',
        Fax: '(1) 135-4892',
        HireDate: new Date(2010, 3, 22),
        ID: 13,
        Name: 'Trevor Ashworth',
        ParentID: 5,
        Phone: '(1) 135-5555',
        PostalCode: '1010',
        Title: 'Director'
    },
    {
        Address: '23 Tsawassen Blvd.',
        Age: 44,
        City: 'Toronto',
        Country: 'Canada',
        Fax: '(604) 555-3745',
        HireDate: new Date(2014, 4, 4),
        ID: 14,
        Name: 'Laurence Johnson',
        ParentID: 4,
        Phone: '(604) 555-4729',
        PostalCode: 'T2F 8M4',
        Title: 'Director'
    },
    {
        Address: 'Fauntleroy Circus',
        Age: 25,
        City: 'London',
        Country: 'UK',
        Fax: '(5) 555-3798',
        HireDate: new Date(2017, 11, 9),
        ID: 5,
        Name: 'Elizabeth Richards',
        ParentID: 4,
        Phone: '(171) 555-1212',
        PostalCode: 'EC2 5NT',
        Title: 'Vice President'
    },
    {
        Address: '120 Hanover Sq.',
        Age: 61,
        City: 'London',
        Country: 'UK',
        Fax: '(171) 555-6750',
        HireDate: new Date(2010, 1, 1),
        ID: 10,
        Name: 'Yang Wang',
        ParentID: -1,
        Phone: '(171) 555-7788',
        PostalCode: 'WA1 1DP',
        Title: 'Localization Manager'
    },
    {
        Address: 'Berkeley Gardens 12',
        Age: 25,
        City: 'London',
        Country: 'UK',
        Fax: '(171) 555-9199',
        HireDate: new Date(2017, 11, 9),
        ID: 15,
        Name: 'Patricia Simpson',
        ParentID: 10,
        Phone: '(171) 555-2282',
        PostalCode: 'WX1 6LT',
        Title: 'Localization Intern'
    },
    {
        Address: '35 King George',
        Age: 25,
        City: 'London',
        Country: 'UK',
        Fax: '(171) 555-3373',
        HireDate: new Date(2018, 3, 18),
        ID: 16,
        Name: 'Peter Lewis',
        ParentID: 10,
        Phone: '(171) 555-0297',
        PostalCode: 'WX3 6FW',
        Title: 'Localization Intern'
    },
    {
        Address: 'Walserweg 21',
        Age: 39,
        City: 'London',
        Country: 'UK',
        Fax: '0241-059428',
        HireDate: new Date(2010, 3, 22),
        ID: 20,
        Name: 'Linda Brown',
        ParentID: 10,
        Phone: '0241-039123',
        PostalCode: '52066',
        Title: 'Localization Intern'
    },
    {
        Address: 'Av. dos Lusíadas, 23',
        Age: 27,
        City: 'Bern',
        Country: 'Switzerland',
        Fax: '',
        HireDate: new Date(2016, 2, 19),
        ID: 8,
        Name: 'Casey Harper',
        ParentID: 10,
        Phone: '(11) 555-7647',
        PostalCode: '05432-043',
        Title: 'Senior Localization'
    },
    {
        Address: '24, place Kléber',
        Age: 31,
        City: 'Strasbourg',
        Country: 'France',
        Fax: '88.60.15.32',
        HireDate: new Date(2014, 8, 18),
        ID: 11,
        Name: 'Monica Reyes',
        ParentID: 1,
        Phone: '88.60.15.31',
        PostalCode: '67000',
        Title: 'Software Development Team Lead'
    },
    {
        Address: 'C/ Araquil, 67',
        Age: 35,
        City: 'Madrid',
        Country: 'Spain',
        Fax: '(91) 555 91 99',
        HireDate: new Date(2015, 9, 17),
        ID: 6,
        Name: 'Roland Mendel',
        ParentID: 11,
        Phone: '(91) 555 22 82',
        PostalCode: '28023',
        Title: 'Senior Software Developer'
    },
    {
        Address: '12, rue des Bouchers',
        Age: 44,
        City: 'Marseille',
        Country: 'France',
        Fax: '91.24.45.41',
        HireDate: new Date(2009, 10, 11),
        ID: 12,
        Name: 'Sven Cooper',
        ParentID: 11,
        Phone: '91.24.45.40',
        PostalCode: '13008',
        Title: 'Senior Software Developer'
    }
]);
```
```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */
```

<!-- ComponentEnd: TreeGrid -->

## Feature Integration

Due to the specific behavior of merged cells it has to be noted how exactly it ties together with some of the other features of the grid:

- **Excel export**: merged cells remain merged when exported to Excel.
- **Column pinning**: cells remain merged when a column is pinned and are displayed in the pinned area.
- **Row pinning**: cells merge only withing their containing area, i.e. cells of pinned rows merge only with cells of other pinned rows, while cells of unpinned rows merge only with cells of unpinned rows.
- **Updating/Editing**: since activation breaks the merge sequence, only a single cell will be in edit mode.
- **Row selection**: if selected rows intersect merged cells, all related merged cells should be marked as part of the selection.
- **Navigation/Activation**: when a cell is active, all merged cells in the same row become single cells, i.e. their merge sequence is broken. This also includes activation via keyboard navigation.

> [!NOTE]
> If a merged cell is clicked, the closest cell from the merge sequence will become active.

## API References

- [`IgcTreeGridComponent`](https://www.infragistics.com/products/ignite-ui-web-components/api/docs/typescript/latest/classes/igniteui_webcomponents_grids_grids.igctreegridcomponent.html)

## Additional Resources

- [Filtering](filtering.md)
- [Excel Style Filtering](excel-style-filtering.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)

Our community is active and always welcoming to new ideas.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)
