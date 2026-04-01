# Class: IgxGridToolbarExporterComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:50](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L50)

Provides a pre-configured exporter component for the grid.

## Remarks

This component still needs the actual exporter service(s) provided in the DI chain
in order to export something.

## Igx Module

IgxGridToolbarModule

## Igx Parent

IgxGridToolbarComponent, IgxGridToolbarActionsComponent

## Extends

- `BaseToolbarDirective`

## Constructors

### Constructor

> **new IgxGridToolbarExporterComponent**(): `IgxGridToolbarExporterComponent`

#### Returns

`IgxGridToolbarExporterComponent`

#### Inherited from

`BaseToolbarDirective.constructor`

## Properties

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L79)

Emits an event after the toggle container is closed.

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`closed`](IgxGridToolbarHidingComponent.md#closed)

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L73)

Emits an event before the toggle container is closed.

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`closing`](IgxGridToolbarHidingComponent.md#closing)

***

### columnListHeight

> **columnListHeight**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L29)

Sets the height of the column list in the dropdown.

#### Inherited from

`BaseToolbarDirective.columnListHeight`

***

### columnToggle

> **columnToggle**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L85)

Emits when after a column's checked state is changed

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`columnToggle`](IgxGridToolbarHidingComponent.md#columntoggle)

***

### exportCSV

> **exportCSV**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L59)

Show entry for CSV export.

***

### exportEnded

> **exportEnded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L90)

Emitted on successful ending of an export operation.

***

### exportExcel

> **exportExcel**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L65)

Show entry for Excel export.

***

### exportPDF

> **exportPDF**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:71](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L71)

Show entry for PDF export.

***

### exportStarted

> **exportStarted**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L84)

Emitted when starting an export operation. Re-emitted additionally
by the grid itself.

***

### filename

> **filename**: `string` = `'ExportedData'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L77)

The name for the exported file.

***

### isExporting

> `protected` **isExporting**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:95](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L95)

Indicates whether there is an export in progress.

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L67)

Emits an event after the toggle container is opened.

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`opened`](IgxGridToolbarHidingComponent.md#opened)

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L61)

Emits an event before the toggle container is opened.

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`opening`](IgxGridToolbarHidingComponent.md#opening)

***

### prompt

> **prompt**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L41)

The placeholder text for the search input.

#### Inherited from

`BaseToolbarDirective.prompt`

***

### title

> **title**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:35](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L35)

Title text for the column action component

#### Inherited from

`BaseToolbarDirective.title`

***

### toolbar

> `protected` **toolbar**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L23)

#### Inherited from

[`IgxGridToolbarHidingComponent`](IgxGridToolbarHidingComponent.md).[`toolbar`](IgxGridToolbarHidingComponent.md#toolbar)

## Accessors

### overlaySettings

#### Get Signature

> **get** **overlaySettings**(): [`OverlaySettings`](../interfaces/OverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L54)

Returns overlay settings

##### Returns

[`OverlaySettings`](../interfaces/OverlaySettings.md)

#### Set Signature

> **set** **overlaySettings**(`overlaySettings`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts:47](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar.base.ts#L47)

Sets overlay settings

##### Parameters

###### overlaySettings

[`OverlaySettings`](../interfaces/OverlaySettings.md)

##### Returns

`void`

#### Inherited from

`BaseToolbarDirective.overlaySettings`

## Methods

### export()

> **export**(`type`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L107)

Export the grid's data

#### Parameters

##### type

`"excel"` \| `"csv"` \| `"pdf"`

File type to export

#### Returns

`void`

***

### exportClicked()

> `protected` **exportClicked**(`type`, `toggleRef?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts:97](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/toolbar/grid-toolbar-exporter.component.ts#L97)

#### Parameters

##### type

`"excel"` \| `"csv"` \| `"pdf"`

##### toggleRef?

[`IgxToggleDirective`](IgxToggleDirective.md)

#### Returns

`void`
