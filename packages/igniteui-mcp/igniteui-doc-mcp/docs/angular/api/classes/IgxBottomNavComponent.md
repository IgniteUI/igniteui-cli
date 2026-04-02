# Class: IgxBottomNavComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/bottom-nav/src/bottom-nav/bottom-nav.component.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/bottom-nav/src/bottom-nav/bottom-nav.component.ts#L46)

Bottom Navigation component enables the user to navigate among a number of contents displayed in a single view.

## Igx Module

IgxBottomNavModule

## Igx Theme

igx-bottom-nav-theme

## Igx Keywords

bottom navigation

## Igx Group

Layouts

## Remarks

The Ignite UI for Angular Bottom Navigation component enables the user to navigate among a number of contents
displayed in a single view. The navigation through the contents is accomplished with the tab buttons located at bottom.

## Example

```html
<igx-bottom-nav>
    <igx-bottom-nav-item>
        <igx-bottom-nav-header>
            <igx-icon igxBottomNavHeaderIcon>folder</igx-icon>
            <span igxBottomNavHeaderLabel>Tab 1</span>
        </igx-bottom-nav-header>
        <igx-bottom-nav-content>
            Content 1
        </igx-bottom-nav-content>
    </igx-bottom-nav-item>
    ...
</igx-bottom-nav>
```

## Extends

- [`IgxTabsDirective`](IgxTabsDirective.md)

## Constructors

### Constructor

> **new IgxBottomNavComponent**(): `IgxBottomNavComponent`

#### Returns

`IgxBottomNavComponent`

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`constructor`](IgxTabsDirective.md#constructor)

## Properties

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/carousel/src/carousel/carousel-base.ts#L25)

#### Inherited from

[`IgxTabsDirective`](IgxTabsDirective.md).[`cdr`](IgxTabsDirective.md#cdr)

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

[`IgxTabsComponent`](IgxTabsComponent.md).[`selectedIndexChange`](IgxTabsComponent.md#selectedindexchange)

***

### selectedIndexChanging

> **selectedIndexChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:79](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L79)

Emitted when the selected index is about to change.

#### Inherited from

[`IgxTabsComponent`](IgxTabsComponent.md).[`selectedIndexChanging`](IgxTabsComponent.md#selectedindexchanging)

***

### selectedItemChange

> **selectedItemChange**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/tabs/src/tabs/tabs.directive.ts#L85)

Emitted when the selected item is changed.

#### Inherited from

[`IgxTabsComponent`](IgxTabsComponent.md).[`selectedItemChange`](IgxTabsComponent.md#selecteditemchange)

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
