# Class: IgxYearsViewComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts:33](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts#L33)

## Extends

- `IgxCalendarViewDirective`

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxYearsViewComponent**(): `IgxYearsViewComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L193)

#### Returns

`IgxYearsViewComponent`

#### Inherited from

`IgxCalendarViewDirective.constructor`

## Properties

### dayInterval

> `protected` **dayInterval**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L54)

#### Inherited from

`IgxCalendarViewDirective.dayInterval`

***

### el

> **el**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts#L34)

***

### formatView

> **formatView**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L76)

Gets/sets whether the view should be rendered
according to the locale and format, if any.

#### Inherited from

`IgxCalendarViewDirective.formatView`

***

### role

> **role**: `string` = `'grid'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L58)

#### Inherited from

`IgxCalendarViewDirective.role`

***

### selected

> **selected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L90)

Emits an event when a selection is made in the view.
Provides reference the `date` property in the component.

#### Memberof

IgxCalendarViewDirective

#### Inherited from

`IgxCalendarViewDirective.selected`

***

### showActive

> **showActive**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L82)

Applies styles to the active item on view focus.

#### Inherited from

`IgxCalendarViewDirective.showActive`

***

### tabIndex

> **tabIndex**: `number` = `0`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L62)

#### Inherited from

`IgxCalendarViewDirective.tabIndex`

## Accessors

### activeDescendant

#### Get Signature

> **get** `protected` **activeDescendant**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L65)

##### Returns

`number`

#### Inherited from

`IgxCalendarViewDirective.activeDescendant`

***

### date

#### Get Signature

> **get** **date**(): `Date`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:164](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L164)

##### Returns

`Date`

#### Set Signature

> **set** **date**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:158](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L158)

Gets/sets the selected date of the view.
By default it's the current date.
```typescript
let date = this.view.date;
```

##### Memberof

IgxYearsViewComponent

##### Parameters

###### value

`Date`

##### Returns

`void`

#### Inherited from

`IgxCalendarViewDirective.date`

***

### locale

#### Get Signature

> **get** **locale**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:178](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L178)

Gets the `locale` of the view.
Default value is `"en"`.
```typescript
let locale = this.view.locale;
```

##### Memberof

IgxCalendarViewDirective

##### Returns

`string`

#### Set Signature

> **set** **locale**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L189)

Sets the `locale` of the view.
Expects a valid BCP 47 language tag.
Default value is `"en"`.

##### Memberof

IgxCalendarViewDirective

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`IgxCalendarViewDirective.locale`

***

### standalone

#### Set Signature

> **set** **standalone**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts:56](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts#L56)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### yearFormat

#### Get Signature

> **get** **yearFormat**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts#L84)

Gets the year format option of the years view.
```typescript
let yearFormat = this.yearsView.yearFormat.
```

##### Returns

`any`

#### Set Signature

> **set** **yearFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/years-view/years-view.component.ts#L96)

Sets the year format option of the years view.
```html
<igx-years-view [yearFormat]="numeric"></igx-years-view>
```

##### Memberof

IgxYearsViewComponent

##### Parameters

###### value

`any`

##### Returns

`void`
