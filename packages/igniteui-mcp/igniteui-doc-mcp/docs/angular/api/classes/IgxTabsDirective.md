# Abstract Class: IgxTabsDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L28)

## Extended by

- [`IgxBottomNavComponent`](IgxBottomNavComponent.md)
- [`IgxTabsComponent`](IgxTabsComponent.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTabsDirective**(): `IgxTabsDirective`

#### Returns

`IgxTabsDirective`

#### Inherited from

`IgxCarouselComponentBase.constructor`

## Properties

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts#L25)

#### Inherited from

`IgxCarouselComponentBase.cdr`

***

### disableAnimation

> **disableAnimation**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L67)

Enables/disables the transition animation of the contents.

***

### items

> **items**: `QueryList`\<[`IgxTabItemDirective`](IgxTabItemDirective.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L91)

Returns the items.

#### Implementation of

`IgxTabsBase.items`

***

### selectedIndexChange

> **selectedIndexChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L73)

Output to enable support for two-way binding on [(selectedIndex)]

***

### selectedIndexChanging

> **selectedIndexChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L79)

Emitted when the selected index is about to change.

***

### selectedItemChange

> **selectedItemChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L85)

Emitted when the selected item is changed.

## Accessors

### selectedIndex

#### Get Signature

> **get** **selectedIndex**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L37)

Gets/Sets the index of the selected item.
Default value is 0 if contents are defined otherwise defaults to -1.

##### Returns

`number`

#### Set Signature

> **set** **selectedIndex**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L41)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IgxTabsBase.selectedIndex`

***

### selectedItem

#### Get Signature

> **get** **selectedItem**(): [`IgxTabItemDirective`](IgxTabItemDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L96)

Gets the selected item.

##### Returns

[`IgxTabItemDirective`](IgxTabItemDirective.md)
