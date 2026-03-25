# Class: IgxExpansionPanelBodyComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:9](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L9)

## Constructors

### Constructor

> **new IgxExpansionPanelBodyComponent**(): `IgxExpansionPanelBodyComponent`

#### Returns

`IgxExpansionPanelBodyComponent`

## Properties

### cdr

> **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:12](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L12)

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:11](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L11)

***

### panel

> **panel**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L10)

***

### role

> **role**: `string` = `'region'`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:37](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L37)

Gets/sets the `role` attribute of the panel body
Default is 'region';
Get
```typescript
 const currentRole = this.panel.body.role;
```
Set
```typescript
 this.panel.body.role = 'content';
```
```html
 <igx-expansion-panel-body [role]="'custom'"></igx-expansion-panel-body>
```

## Accessors

### label

#### Get Signature

> **get** **label**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L52)

Gets the `aria-label` attribute of the panel body
Defaults to the panel id with '-region' in the end;
Get
```typescript
 const currentLabel = this.panel.body.label;
```

##### Returns

`string`

#### Set Signature

> **set** **label**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:64](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L64)

Sets the `aria-label` attribute of the panel body
```typescript
 this.panel.body.label = 'my-custom-label';
```
```html
 <igx-expansion-panel-body [label]="'my-custom-label'"></igx-expansion-panel-body>
```

##### Parameters

###### val

`string`

##### Returns

`void`

***

### labelledBy

#### Get Signature

> **get** **labelledBy**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L78)

Gets the `aria-labelledby` attribute of the panel body
Defaults to the panel header id;
Get
```typescript
 const currentLabel = this.panel.body.labelledBy;
```

##### Returns

`string`

#### Set Signature

> **set** **labelledBy**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel-body.component.ts#L90)

Sets the `aria-labelledby` attribute of the panel body
```typescript
 this.panel.body.labelledBy = 'my-custom-id';
```
```html
 <igx-expansion-panel-body [labelledBy]="'my-custom-id'"></igx-expansion-panel-body>
```

##### Parameters

###### val

`string`

##### Returns

`void`
