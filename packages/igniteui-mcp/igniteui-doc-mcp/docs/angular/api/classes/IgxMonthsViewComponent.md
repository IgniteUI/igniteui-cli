# Class: IgxMonthsViewComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L37)

## Extends

- `IgxCalendarViewDirective`

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxMonthsViewComponent**(): `IgxMonthsViewComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts:193](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/common/calendar-view.directive.ts#L193)

#### Returns

`IgxMonthsViewComponent`

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:38](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L38)

***

### formatView

> **formatView**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:108](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L108)

Gets/sets whether the view should be rendered
according to the locale and format, if any.

#### Overrides

`IgxCalendarViewDirective.formatView`

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L57)

Sets/gets the `id` of the months view.
If not set, the `id` will have value `"igx-months-view-0"`.
```html
<igx-months-view id="my-months-view"></igx-months-view>
```
```typescript
let monthsViewId =  this.monthsView.id;
```

#### Memberof

IgxMonthsViewComponent

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

### monthFormat

#### Get Signature

> **get** **monthFormat**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:87](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L87)

Gets the month format option of the months view.
```typescript
let monthFormat = this.monthsView.monthFormat.
```

##### Returns

`any`

#### Set Signature

> **set** **monthFormat**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:99](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L99)

Sets the month format option of the months view.
```html
<igx-months-view> [monthFormat]="short'"</igx-months-view>
```

##### Memberof

IgxMonthsViewComponent

##### Parameters

###### value

`any`

##### Returns

`void`

***

### standalone

#### Set Signature

> **set** **standalone**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/calendar/src/calendar/months-view/months-view.component.ts#L76)

##### Parameters

###### value

`boolean`

##### Returns

`void`
