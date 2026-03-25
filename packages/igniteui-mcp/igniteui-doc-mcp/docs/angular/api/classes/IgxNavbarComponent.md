# Class: IgxNavbarComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:60](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L60)

**Ignite UI for Angular Navbar** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/navbar.html)

The Ignite UI Navbar is most commonly used to provide an app header with a hamburger menu and navigation
state such as a "Go Back" button. It also supports other actions represented by icons.

Example:
```html
<igx-navbar title="Sample App" actionButtonIcon="menu">
  <igx-icon>search</igx-icon>
  <igx-icon>favorite</igx-icon>
  <igx-icon>more_vert</igx-icon>
</igx-navbar>
```

## Constructors

### Constructor

> **new IgxNavbarComponent**(): `IgxNavbarComponent`

#### Returns

`IgxNavbarComponent`

## Properties

### action

> **action**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L100)

The event that will be thrown when the action is executed,
provides reference to the `IgxNavbar` component as argument
```typescript
public actionExc(event){
    alert("Action Execute!");
}
 //..
```
```html
<igx-navbar (action)="actionExc($event)" title="Sample App" actionButtonIcon="menu">
```

***

### actionButtonIcon

> **actionButtonIcon**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:77](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L77)

Sets the icon of the `IgxNavbarComponent`.
```html
<igx-navbar [title]="currentView" actionButtonIcon="arrow_back"></igx-navbar>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L69)

Sets the value of the `id` attribute. If not provided it will be automatically generated.
```html
<igx-navbar [id]="'igx-navbar-12'" title="Sample App" actionButtonIcon="menu">
```

***

### title

> **title**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L85)

Sets the title of the `IgxNavbarComponent`.
```html
<igx-navbar title="Sample App" actionButtonIcon="menu">
```

***

### titleId

> **titleId**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:109](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L109)

Sets the titleId of the `IgxNavbarComponent`. If not set it will be automatically generated.
```html
<igx-navbar [titleId]="'igx-navbar-7'" title="Sample App" actionButtonIcon="menu">
```

## Accessors

### isActionButtonVisible

#### Get Signature

> **get** **isActionButtonVisible**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:146](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L146)

Returns whether the `IgxNavbarComponent` action button is visible, true/false.
```typescript
 @ViewChild("MyChild")
public navBar: IgxNavbarComponent;
ngAfterViewInit(){
    let actionButtonVisibile = this.navBar.isActionButtonVisible;
}
```

##### Returns

`boolean`

#### Set Signature

> **set** **isActionButtonVisible**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:131](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L131)

Sets whether the action button of the `IgxNavbarComponent` is visible.
```html
<igx-navbar [title]="currentView" [isActionButtonVisible]="'false'"></igx-navbar>
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isTitleContentVisible

#### Get Signature

> **get** **isTitleContentVisible**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts:153](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/navbar/src/navbar/navbar.component.ts#L153)

##### Returns

`boolean`
