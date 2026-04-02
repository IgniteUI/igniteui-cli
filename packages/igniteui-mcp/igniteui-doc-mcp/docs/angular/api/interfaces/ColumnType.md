# Interface: ColumnType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L164)

Represents a column in the `GridType`. It is essentially the blueprint to a column object.
Contains definitions of properties and methods, relevant to a column

## Extends

- [`FieldType`](FieldType.md)

## Properties

### additionalTemplateContext

> **additionalTemplateContext**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:337](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L337)

***

### applySelectableClass

> **applySelectableClass**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:344](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L344)

***

### calcWidth

> **calcWidth**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:209](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L209)

Custom CSS styling, applied to every column
calcWidth, minWidthPx, maxWidthPx, minWidth, maxWidth, minWidthPercent, maxWidthPercent, resolvedWidth

***

### ~~children~~

> **children**: `QueryList`\<`ColumnType`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L171)

A list containing all the child columns under this column (if any).

#### Deprecated

in version 18.1.0. Use the `childColumns` property instead.

***

### colEnd

> **colEnd**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:314](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L314)

***

### collapsible?

> `optional` **collapsible?**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:251](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L251)

Optional
Indicated whether the column can be collapsed. If the value is true, the column can be collapsed
It is used in tree grid and for navigation

***

### collapsibleIndicatorTemplate?

> `optional` **collapsibleIndicatorTemplate?**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:195](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L195)

The template reference for the collapsible indicator of the column.
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### colStart

> **colStart**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:313](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L313)

***

### columnGroup

> **columnGroup**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:259](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L259)

Specifies whether the column belongs to a group of columns.

***

### columnLayout

> **columnLayout**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:308](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L308)

***

### columnLayoutChild

> **columnLayoutChild**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:319](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L319)

***

### dataType

> **dataType**: `GridColumnDataType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:232](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L232)

Represents the type of data for the column:
string, number, boolean, currency, date, time, etc.

#### Overrides

[`FieldType`](FieldType.md).[`dataType`](FieldType.md#datatype)

***

### defaultDateTimeFormat?

> `optional` **defaultDateTimeFormat?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:148](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L148)

Default date/time format for Date/Time fields.

#### Inherited from

[`FieldType`](FieldType.md).[`defaultDateTimeFormat`](FieldType.md#defaultdatetimeformat)

***

### defaultTimeFormat?

> `optional` **defaultTimeFormat?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:143](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L143)

Default time format for Date/Time fields.

#### Inherited from

[`FieldType`](FieldType.md).[`defaultTimeFormat`](FieldType.md#defaulttimeformat)

***

### disabledSummaries?

> `optional` **disabledSummaries?**: `string`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:293](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L293)

***

### disableHiding

> **disableHiding**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:271](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L271)

Indicates whether a column can be hidden. If the value is true, the column cannot be hidden

***

### disablePinning

> **disablePinning**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:269](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L269)

Indicates whether a column can be pinned. If the value is true, the column cannot be pinned

***

### editable

> **editable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:253](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L253)

Indicated whether the column can be edited. If the value is true, the column can be edited

***

### editorOptions

> **editorOptions**: [`IColumnEditorOptions`](IColumnEditorOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:236](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L236)

Sets properties on the default column editors

#### Overrides

[`FieldType`](FieldType.md).[`editorOptions`](FieldType.md#editoroptions)

***

### expanded

> **expanded**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L302)

Indicates if the column is currently expanded or collapsed. If the value is true, the column is expanded

***

### field

> **field**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L112)

The internal field name, used in expressions and queries.

#### Inherited from

[`FieldType`](FieldType.md).[`field`](FieldType.md#field)

***

### filterable

> **filterable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:265](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L265)

Indicates whether a column can be filtered. If the value is true, the column can be filtered

***

### filterCellTemplate

> **filterCellTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:355](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L355)

Represents a custom template for filtering
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### filteringExpressionsTree

> **filteringExpressionsTree**: [`FilteringExpressionsTree`](../classes/FilteringExpressionsTree.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:290](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L290)

The filtering expressions for the column.
The type contains properties and methods for filtering: filteringOperands, operator (logic), fieldName, etc.

***

### filteringIgnoreCase

> **filteringIgnoreCase**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:285](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L285)

***

### filters?

> `optional` **filters?**: [`IgxFilteringOperand`](../classes/IgxFilteringOperand.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:133](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L133)

Optional filtering operands that apply to this field.

#### Inherited from

[`FieldType`](FieldType.md).[`filters`](FieldType.md#filters)

***

### grid

> **grid**: [`GridTypeBase`](GridTypeBase.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:166](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L166)

Represents the instance of the parent `GridType` that contains this column.

***

### groupable

> **groupable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:261](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L261)

Indicates whether a column can be put in a group. If the value is true, the column can be put in a group

***

### groupingComparer

> **groupingComparer**: (`a`, `b`) => `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:349](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L349)

Represents a method with custom grouping comparator to determine the members of the group.

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`number`

***

### hasNestedPath

> **hasNestedPath**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:336](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L336)

***

### hasSummary

> **hasSummary**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:291](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L291)

***

### header?

> `optional` **header?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:222](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L222)

Optional
Represents the header text of the column

#### Overrides

[`FieldType`](FieldType.md).[`header`](FieldType.md#header)

***

### headerClasses

> **headerClasses**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:197](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L197)

Represents custom CSS classes applied to the header element. When added, they take different styling

***

### headerGroupClasses

> **headerGroupClasses**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L201)

Represents custom CSS classes applied to the header group. When added, they take different styling

***

### headerGroupStyles

> **headerGroupStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:203](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L203)

Represents custom CSS styles applied to the header group. When added, they take different styling

***

### headerStyles

> **headerStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L199)

Represents custom CSS styles applied to the header element. When added, they take different styling

***

### headerTemplate

> **headerTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:190](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L190)

The template reference for the custom header of the column
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### hidden

> **hidden**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:267](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L267)

Indicates whether a column is currently hidden (not visible). If the value is true, the column is not visible

***

### index

> **index**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:227](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L227)

The index of the column within the grid.
Includes the hidden columns when counting

***

### inlineEditorTemplate

> **inlineEditorTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:241](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L241)

The template reference for the custom inline editor of the column
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### isFirstPinned

> **isFirstPinned**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:343](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L343)

Indicates whether the current column is the first for the grid to be pinned.
If the value is false, there are columns, that have been pinned before the current

***

### isLastPinned

> **isLastPinned**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:340](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L340)

Indicates whether the current column is the last to be pinned.
If the value is false, there are columns, that have been pinned after the current

***

### label?

> `optional` **label?**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:107](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L107)

Display label for the field.

#### Inherited from

[`FieldType`](FieldType.md).[`label`](FieldType.md#label)

***

### level

> **level**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:310](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L310)

Represents the hierarchical level of the column in the column layout

***

### maxWidth

> **maxWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:213](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L213)

***

### maxWidthPercent

> **maxWidthPercent**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:215](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L215)

***

### maxWidthPx

> **maxWidthPx**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:211](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L211)

***

### merge

> **merge**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:303](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L303)

***

### mergingComparer

> **mergingComparer**: (`prevRecord`, `record`, `field`) => `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L184)

#### Parameters

##### prevRecord

`any`

##### record

`any`

##### field

`string`

#### Returns

`boolean`

***

### minWidth

> **minWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:212](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L212)

***

### minWidthPercent

> **minWidthPercent**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L214)

***

### minWidthPx

> **minWidthPx**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:210](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L210)

***

### parent

> **parent**: `ColumnType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:334](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L334)

Optional
The immediate parent (right above) column of this column (if any).
If there is no parent, that means the current column is the root parent

***

### pinned

> **pinned**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:300](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L300)

Indicates if the column is currently pinned. If the value is true, the column is pinned

***

### pipeArgs

> **pipeArgs**: [`IColumnPipeArgs`](IColumnPipeArgs.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:335](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L335)

Optional arguments for any pipe applied to the field.

#### Overrides

[`FieldType`](FieldType.md).[`pipeArgs`](FieldType.md#pipeargs)

***

### resizable

> **resizable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:255](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L255)

Specifies whether the column can be resized. If the value is true, the column can be resized

***

### resolvedWidth

> **resolvedWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:216](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L216)

***

### rowEnd

> **rowEnd**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:312](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L312)

***

### rowStart

> **rowStart**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:311](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L311)

***

### searchable

> **searchable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L257)

Specifies whether the data of the column can be searched. If the value is true, the column data can be searched

***

### selectable

> **selectable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:307](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L307)

Indicates if the column can be selected. If the value is true, the column can be selected

***

### selected

> **selected**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:305](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L305)

Indicates if the column is currently selected. If the value is true, the column is selected

***

### sortable

> **sortable**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:263](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L263)

Indicates whether a column can be sorted. If the value is true, the column can be sorted.

***

### sortingIgnoreCase

> **sortingIgnoreCase**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L282)

Indicates whether the search should match results, no matter the case of the letters (upper and lower)
If the value is false, the result will depend on the case (example: `E` will not match `e`)
If the value is true, the result will not depend on the case (example: `E` will match `e`)

***

### sortStrategy

> **sortStrategy**: [`ISortingStrategy`](ISortingStrategy.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:276](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L276)

The sorting strategy used for sorting this column.
The interface contains a method sort that sorts the provided data based on the given sorting expressions

***

### summaries

> **summaries**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:292](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L292)

***

### summaryTemplate

> **summaryTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:298](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L298)

The template reference for a summary of the column
It is of type TemplateRef, which represents an embedded template, used to instantiate embedded views

***

### title

> **title**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:346](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L346)

The title of the column, used for accessibility purposes

***

### topLevelParent?

> `optional` **topLevelParent?**: `ColumnType`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L326)

Optional
The root parent of this column (if any).
If there is no root parent, that means the current column is the root parent

***

### validators

> **validators**: `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L183)

***

### visibleIndex

> **visibleIndex**: `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L246)

The index of the column within the grid.
Does not include the hidden columns when counting

***

### width

> **width**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:320](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L320)

## Accessors

### childColumns

#### Get Signature

> **get** **childColumns**(): `ColumnType`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:176](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L176)

A list containing all the child columns under this column (if any).
Empty without children or if this column is not Group or Layout.

##### Returns

`ColumnType`[]

## Methods

### formatter()?

> `optional` **formatter**(`value`, `rowData?`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L157)

Optional formatter function to transform the value before display.

#### Parameters

##### value

`any`

The value of the field.

##### rowData?

`any`

Optional row data that contains this field.

#### Returns

`any`

The formatted value.

#### Inherited from

[`FieldType`](FieldType.md).[`formatter`](FieldType.md#formatter)

***

### getAutoSize()

> **getAutoSize**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:363](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L363)

A method definition to retrieve the set CSS size

#### Returns

`string`

***

### getCellWidth()

> **getCellWidth**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:366](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L366)

A method definition to retrieve the set CSS width of the cells under the column

#### Returns

`string`

***

### getGridTemplate()

> **getGridTemplate**(`isRow`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:367](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L367)

#### Parameters

##### isRow

`boolean`

#### Returns

`string`

***

### getResizableColUnderEnd()

> **getResizableColUnderEnd**(): `MRLResizeColumnInfo`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:364](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L364)

#### Returns

`MRLResizeColumnInfo`[]

***

### move()

> **move**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:361](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L361)

A method definition to move the column to the specified index.
It takes the index of type number as a parameter

#### Parameters

##### index

`number`

#### Returns

`void`

***

### pin()

> **pin**(`index?`, `pinningPosition?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:372](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L372)

Pins the column at the specified index (if not already pinned).

#### Parameters

##### index?

`number`

##### pinningPosition?

[`ColumnPinningPosition`](../enumerations/ColumnPinningPosition.md)

#### Returns

`boolean`

***

### populateVisibleIndexes()?

> `optional` **populateVisibleIndexes**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:370](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L370)

#### Returns

`void`

***

### toggleVisibility()

> **toggleVisibility**(`value?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:369](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L369)

A method definition to toggle column visibility (hidden or visible)

#### Parameters

##### value?

`boolean`

#### Returns

`void`

***

### unpin()

> **unpin**(`index?`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:374](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L374)

Unpins the column at the specified index (if not already unpinned).

#### Parameters

##### index?

`number`

#### Returns

`boolean`
