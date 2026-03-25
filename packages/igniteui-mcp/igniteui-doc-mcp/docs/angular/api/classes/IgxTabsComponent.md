# Class: IgxTabsComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts:65](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts#L65)

Tabs component is used to organize or switch between similar data sets.

## Igx Module

IgxTabsModule

## Igx Theme

igx-tabs-theme

## Igx Keywords

tabs

## Igx Group

Layouts

## Remarks

The Ignite UI for Angular Tabs component places tabs at the top and allows for scrolling when there are multiple tab items on the screen.

## Example

```html
<igx-tabs>
    <igx-tab-item>
        <igx-tab-header>
            <igx-icon igxTabHeaderIcon>folder</igx-icon>
            <span igxTabHeaderLabel>Tab 1</span>
        </igx-tab-header>
        <igx-tab-content>
            Content 1
        </igx-tab-content>
    </igx-tab-item>
    ...
</igx-tabs>
```

## Extends

- [`IgxTabsDirective`](IgxTabsDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTabsComponent**(): `IgxTabsComponent`

#### Returns

`IgxTabsComponent`

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`constructor`](IgxTabsDirective.md#constructor)

## Properties

### activation

> **activation**: `"auto"` \| `"manual"` = `'auto'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts#L93)

Determines the tab activation.
When set to auto, the tab is instantly selected while navigating with the Left/Right Arrows, Home or End keys and the corresponding panel is displayed.
When set to manual, the tab is only focused. The selection happens after pressing Space or Enter.
Defaults is auto.

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts#L25)

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`cdr`](IgxTabsDirective.md#cdr)

***

### disableAnimation

> **disableAnimation**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L67)

Enables/disables the transition animation of the contents.

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`disableAnimation`](IgxTabsDirective.md#disableanimation)

***

### items

> **items**: `QueryList`\<[`IgxTabItemDirective`](IgxTabItemDirective.md)\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:91](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L91)

Returns the items.

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`items`](IgxTabsDirective.md#items)

***

### selectedIndexChange

> **selectedIndexChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L73)

Output to enable support for two-way binding on [(selectedIndex)]

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`selectedIndexChange`](IgxTabsDirective.md#selectedindexchange)

***

### selectedIndexChanging

> **selectedIndexChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L79)

Emitted when the selected index is about to change.

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`selectedIndexChanging`](IgxTabsDirective.md#selectedindexchanging)

***

### selectedItemChange

> **selectedItemChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L85)

Emitted when the selected item is changed.

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`selectedItemChange`](IgxTabsDirective.md#selecteditemchange)

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

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`selectedIndex`](IgxTabsDirective.md#selectedindex)

***

### selectedItem

#### Get Signature

> **get** **selectedItem**(): [`IgxTabItemDirective`](IgxTabItemDirective.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:96](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L96)

Gets the selected item.

##### Returns

[`IgxTabItemDirective`](IgxTabItemDirective.md)

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`selectedItem`](IgxTabsDirective.md#selecteditem)

***

### tabAlignment

#### Get Signature

> **get** **tabAlignment**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts#L74)

Gets/Sets the tab alignment. Defaults to `start`.

##### Returns

`string`

#### Set Signature

> **set** **tabAlignment**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs/tabs.component.ts#L78)

##### Parameters

###### value

`string`

##### Returns

`void`
