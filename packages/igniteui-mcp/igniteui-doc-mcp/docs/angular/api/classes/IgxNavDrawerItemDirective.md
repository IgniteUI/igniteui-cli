# Class: IgxNavDrawerItemDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts#L8)

## Constructors

### Constructor

> **new IgxNavDrawerItemDirective**(): `IgxNavDrawerItemDirective`

#### Returns

`IgxNavDrawerItemDirective`

## Properties

### active

> **active**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts:19](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts#L19)

Styles a navigation drawer item as selected.
If not set, `active` will have default value `false`.

#### Example

```html
<span igxDrawerItem [active]="true">Active Item</span>
```

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts:30](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts#L30)

Disables a navigation drawer item.
If not set, `disabled` will have default value `false`.

#### Example

```html
<span igxDrawerItem [disabled]="true">Disabled Item</span>
```

***

### isHeader

> **isHeader**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navigation-drawer/src/navigation-drawer/navigation-drawer.directives.ts#L41)

Styles a navigation drawer item as a group header.
If not set, `isHeader` will have default value `false`.

#### Example

```html
<span igxDrawerItem [isHeader]="true">Header</span>
```
