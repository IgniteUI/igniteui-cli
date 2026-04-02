# Class: IgxExpansionPanelHeaderComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L22)

## Constructors

### Constructor

> **new IgxExpansionPanelHeaderComponent**(): `IgxExpansionPanelHeaderComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L206)

#### Returns

`IgxExpansionPanelHeaderComponent`

## Properties

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:24](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L24)

***

### elementRef

> **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L25)

***

### iconPosition

> **iconPosition**: `ExpansionPanelHeaderIconPosition` = `ExpansionPanelHeaderIconPosition.LEFT`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L116)

Gets/sets the position of the expansion-panel-header expand/collapse icon
Accepts `left`, `right` or `none`
```typescript
 const currentIconPosition = this.panel.header.iconPosition;
```
Set
```typescript
 this.panel.header.iconPosition = 'left';
```
```html
 <igx-expansion-panel-header [iconPosition]="'right'"></igx-expansion-panel-header>
```

***

### id

> **id**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:197](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L197)

Sets/gets the `id` of the expansion panel header.
```typescript
let panelHeaderId =  this.panel.header.id;
```

#### Memberof

IgxExpansionPanelComponent

***

### interaction

> **interaction**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L132)

Emitted whenever a user interacts with the header host
```typescript
 handleInteraction(event: IExpansionPanelCancelableEventArgs) {
 ...
}
```
```html
 <igx-expansion-panel-header (interaction)="handleInteraction($event)">
     ...
 </igx-expansion-panel-header>
```

***

### lv

> **lv**: `string` = `'3'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:67](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L67)

Gets/sets the `aria-level` attribute of the header
Get
```typescript
 const currentAriaLevel = this.panel.header.lv;
```
Set
```typescript
 this.panel.header.lv = '5';
```
```html
 <igx-expansion-panel-header [lv]="myCustomLevel"></igx-expansion-panel-header>
```

***

### panel

> **panel**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L23)

***

### role

> **role**: `string` = `'heading'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:85](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L85)

Gets/sets the `role` attribute of the header
Get
```typescript
 const currentRole = this.panel.header.role;
```
Set
```typescript
 this.panel.header.role = '5';
```
```html
 <igx-expansion-panel-header [role]="'custom'"></igx-expansion-panel-header>
```

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L167)

Gets/sets the whether the header is disabled
When disabled, the header will not handle user events and will stop their propagation

```typescript
 const isDisabled = this.panel.header.disabled;
```
Set
```typescript
 this.panel.header.disabled = true;
```
```html
 <igx-expansion-panel-header [disabled]="true">
    ...
 </igx-expansion-panel-header>
```

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:171](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L171)

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### iconRef

#### Get Signature

> **get** **iconRef**(): `ElementRef`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-header.component.ts#L31)

Returns a reference to the `igx-expansion-panel-icon` element;
If `iconPosition` is `NONE` - return null;

##### Returns

`ElementRef`
