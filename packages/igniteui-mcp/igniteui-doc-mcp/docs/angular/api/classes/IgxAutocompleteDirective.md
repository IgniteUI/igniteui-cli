# Class: IgxAutocompleteDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:61](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L61)

**Ignite UI for Angular Autocomplete** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/autocomplete.html)

The igxAutocomplete directive provides a way to enhance a text input
by showing a drop down of suggested options, provided by the developer.

Example:
```html
<input type="text" [igxAutocomplete]="townsPanel" #autocompleteRef="igxAutocomplete"/>
<igx-drop-down #townsPanel>
    <igx-drop-down-item *ngFor="let town of towns | startsWith:townSelected" [value]="town">
        {{town}}
    </igx-drop-down-item>
</igx-drop-down>
```

## Extends

- [`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxAutocompleteDirective**(): `IgxAutocompleteDirective`

#### Returns

`IgxAutocompleteDirective`

#### Inherited from

[`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md).[`constructor`](IgxDropDownItemNavigationDirective.md#constructor)

## Properties

### \_composing

> `protected` **\_composing**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L199)

***

### \_target

> `protected` **\_target**: [`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L18)

#### Inherited from

[`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md).[`_target`](IgxDropDownItemNavigationDirective.md#_target)

***

### autocompleteSettings

> **autocompleteSettings**: [`AutocompleteOverlaySettings`](../interfaces/AutocompleteOverlaySettings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L110)

Provide overlay settings for the autocomplete drop down

```typescript
// get
let settings = this.autocomplete.autocompleteSettings;
```
```html
<!--set-->
<input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteSettings]="settings"/>
```
```typescript
// set
this.settings = {
 positionStrategy: new ConnectedPositioningStrategy({
     closeAnimation: null,
     openAnimation: null
 })
};
```

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L66)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:137](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L137)

Enables/disables autocomplete component

```typescript
// get
let disabled = this.autocomplete.disabled;
```
```html
<!--set-->
<input type="text" [igxAutocomplete]="townsPanel" [igxAutocompleteDisabled]="disabled"/>
```
```typescript
// set
public disabled = true;
```

***

### dropdown

> **dropdown**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L15)

#### Inherited from

[`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md).[`dropdown`](IgxDropDownItemNavigationDirective.md#dropdown)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L65)

***

### formControl

> `protected` **formControl**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:63](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L63)

***

### group

> `protected` **group**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L64)

***

### id

> `protected` **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:200](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L200)

***

### ngModel

> `protected` **ngModel**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L62)

***

### selectionChanging

> **selectionChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L147)

Emitted after item from the drop down is selected

```html
<input igxInput [igxAutocomplete]="townsPanel" (selectionChanging)='selectionChanging($event)' />
```

## Accessors

### activeDescendant

#### Get Signature

> **get** **activeDescendant**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L57)

##### Returns

`string`

#### Inherited from

[`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md).[`activeDescendant`](IgxDropDownItemNavigationDirective.md#activedescendant)

***

### model

#### Get Signature

> **get** `protected` **model**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L201)

##### Returns

`any`

***

### target

#### Get Signature

> **get** **target**(): [`IgxDropDownComponent`](IgxDropDownComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:81](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L81)

Sets the target of the autocomplete directive

```html
<!-- Set -->
<input [igxAutocomplete]="dropdown" />
...
<igx-drop-down #dropdown>
...
</igx-drop-down>
```

##### Returns

[`IgxDropDownComponent`](IgxDropDownComponent.md)

#### Set Signature

> **set** **target**(`v`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:84](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L84)

Gets the target of the navigation directive;

```typescript
// Get
export class MyComponent {
 ...
 @ContentChild(IgxDropDownNavigationDirective)
 navDirective: IgxDropDownNavigationDirective = null
 ...
 const navTarget: IgxDropDownBaseDirective = navDirective.navTarget
}
```

##### Parameters

###### v

[`IgxDropDownComponent`](IgxDropDownComponent.md)

##### Returns

`void`

#### Overrides

[`IgxDropDownItemNavigationDirective`](IgxDropDownItemNavigationDirective.md).[`target`](IgxDropDownItemNavigationDirective.md#target)

## Methods

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L286)

Closes autocomplete drop down

#### Returns

`void`

***

### ngAfterViewInit()

> **ngAfterViewInit**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L326)

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/autocomplete/autocomplete.directive.ts#L297)

Opens autocomplete drop down

#### Returns

`void`
