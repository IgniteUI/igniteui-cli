# Class: IgxGridStateBaseDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L112)

## Extended by

- [`IgxGridStateDirective`](IgxGridStateDirective.md)

## Constructors

### Constructor

> **new IgxGridStateBaseDirective**(): `IgxGridStateBaseDirective`

#### Returns

`IgxGridStateBaseDirective`

## Properties

### \_options

> `protected` **\_options**: [`IGridStateOptions`](../interfaces/IGridStateOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L123)

***

### envInjector

> `protected` **envInjector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L116)

***

### grid

> **grid**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L114)

***

### injector

> `protected` **injector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L117)

***

### viewRef

> `protected` **viewRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L115)

## Accessors

### options

#### Get Signature

> **get** **options**(): [`IGridStateOptions`](../interfaces/IGridStateOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:502](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L502)

An object with options determining if a certain feature state should be saved.
```html
<igx-grid [igxGridState]="options"></igx-grid>
```
```typescript
public options = {selection: false, advancedFiltering: false};
```

##### Returns

[`IGridStateOptions`](../interfaces/IGridStateOptions.md)

#### Set Signature

> **set** **options**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:506](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L506)

##### Parameters

###### value

[`IGridStateOptions`](../interfaces/IGridStateOptions.md)

##### Returns

`void`

## Methods

### getStateInternal()

> `protected` **getStateInternal**(`serialize?`, `features?`): `string` \| [`IGridState`](../interfaces/IGridState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:530](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L530)

Gets the state of a feature or states of all grid features, unless a certain feature is disabled through the `options` property.

#### Parameters

##### serialize?

`boolean` = `true`

##### features?

keyof IGridStateOptions \| keyof IGridStateOptions[]

#### Returns

`string` \| [`IGridState`](../interfaces/IGridState.md)

Returns the serialized to JSON string IGridState object, or the non-serialized IGridState object.
```html
<igx-grid [igxGridState]="options"></igx-grid>
```
```typescript
@ViewChild(IgxGridStateDirective, { static: true }) public state;
let state = this.state.getState(); // returns string
let state = this.state(false) // returns `IGridState` object
```

***

### setStateInternal()

> `protected` **setStateInternal**(`state`, `features?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:554](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L554)

Restores grid features' state based on the IGridState object passed as an argument.

#### Parameters

##### state

[`IGridState`](../interfaces/IGridState.md)

##### features?

keyof IGridStateOptions \| keyof IGridStateOptions[]

#### Returns

`void`

```html
<igx-grid [igxGridState]="options"></igx-grid>
```
```typescript
@ViewChild(IgxGridStateDirective, { static: true }) public state;
this.state.setState(gridState);
```

***

### stringifyCallback()

> `protected` **stringifyCallback**(`key`, `val`): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:695](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L695)

#### Parameters

##### key

`string`

##### val

`any`

#### Returns

`any`
