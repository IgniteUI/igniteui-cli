# Class: IgxDropDownItemNavigationDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:14](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L14)

Navigation Directive that handles keyboard events on its host and controls a targeted IgxDropDownBaseDirective component

## Extended by

- [`IgxAutocompleteDirective`](IgxAutocompleteDirective.md)

## Implements

- [`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md)

## Constructors

### Constructor

> **new IgxDropDownItemNavigationDirective**(): `IgxDropDownItemNavigationDirective`

#### Returns

`IgxDropDownItemNavigationDirective`

## Properties

### \_target

> `protected` **\_target**: [`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:18](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L18)

***

### dropdown

> **dropdown**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:15](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L15)

## Accessors

### activeDescendant

#### Get Signature

> **get** **activeDescendant**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:57](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L57)

##### Returns

`string`

***

### target

#### Get Signature

> **get** **target**(): [`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:34](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L34)

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

##### Returns

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md)

#### Set Signature

> **set** **target**(`target`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L52)

Sets the target of the navigation directive;
If no valid target is passed, it falls back to the drop down context

```html
<!-- Set -->
<input [igxDropDownItemNavigation]="dropdown" />
...
<igx-drop-down #dropdown>
...
</igx-drop-down>
```

##### Parameters

###### target

[`IgxDropDownBaseDirective`](IgxDropDownBaseDirective.md)

##### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`target`](../interfaces/IDropDownNavigationDirective.md#target)

## Methods

### handleKeyDown()

> **handleKeyDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L65)

Captures keydown events and calls the appropriate handlers on the target component

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`handleKeyDown`](../interfaces/IDropDownNavigationDirective.md#handlekeydown)

***

### onArrowDownKeyDown()

> **onArrowDownKeyDown**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L120)

Navigates to previous item

#### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`onArrowDownKeyDown`](../interfaces/IDropDownNavigationDirective.md#onarrowdownkeydown)

***

### onArrowUpKeyDown()

> **onArrowUpKeyDown**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:127](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L127)

Navigates to previous item

#### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`onArrowUpKeyDown`](../interfaces/IDropDownNavigationDirective.md#onarrowupkeydown)

***

### onEndKeyDown()

> **onEndKeyDown**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L134)

Navigates to target's last item

#### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`onEndKeyDown`](../interfaces/IDropDownNavigationDirective.md#onendkeydown)

***

### onHomeKeyDown()

> **onHomeKeyDown**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts:141](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-navigation.directive.ts#L141)

Navigates to target's first item

#### Returns

`void`

#### Implementation of

[`IDropDownNavigationDirective`](../interfaces/IDropDownNavigationDirective.md).[`onHomeKeyDown`](../interfaces/IDropDownNavigationDirective.md#onhomekeydown)
