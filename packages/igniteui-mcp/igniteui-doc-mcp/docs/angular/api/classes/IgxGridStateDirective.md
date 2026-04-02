# Class: IgxGridStateDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L8)

## Extends

- [`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md)

## Constructors

### Constructor

> **new IgxGridStateDirective**(): `IgxGridStateDirective`

#### Returns

`IgxGridStateDirective`

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`constructor`](IgxGridStateBaseDirective.md#constructor)

## Properties

### \_options

> `protected` **\_options**: [`IGridStateOptions`](../interfaces/IGridStateOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:123](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L123)

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`_options`](IgxGridStateBaseDirective.md#_options)

***

### envInjector

> `protected` **envInjector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L116)

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`envInjector`](IgxGridStateBaseDirective.md#envinjector)

***

### grid

> **grid**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L114)

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`grid`](IgxGridStateBaseDirective.md#grid)

***

### injector

> `protected` **injector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L117)

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`injector`](IgxGridStateBaseDirective.md#injector)

***

### stateParsed

> **stateParsed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L78)

Event emitted when set state is called with a string.
Returns the parsed state object so that it can be further modified before applying to the grid.
```typescript
this.state.stateParsed.subscribe(parsedState => parsedState.sorting.forEach(x => x.strategy = NoopSortingStrategy.instance()});
```

***

### viewRef

> `protected` **viewRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state-base.directive.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state-base.directive.ts#L115)

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`viewRef`](IgxGridStateBaseDirective.md#viewref)

## Accessors

### options

#### Get Signature

> **get** **options**(): [`IGridStateOptions`](../interfaces/IGridStateOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L21)

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

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L25)

An object with options determining if a certain feature state should be saved.
```html
<igx-grid [igxGridState]="options"></igx-grid>
```
```typescript
public options = {selection: false, advancedFiltering: false};
```

##### Parameters

###### value

[`IGridStateOptions`](../interfaces/IGridStateOptions.md)

##### Returns

`void`

#### Overrides

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`options`](IgxGridStateBaseDirective.md#options)

## Methods

### getState()

> **getState**(`serialize?`, `features?`): `string` \| [`IGridState`](../interfaces/IGridState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L44)

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

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`getStateInternal`](IgxGridStateBaseDirective.md#getstateinternal)

***

### setState()

> **setState**(`state`, `features?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/grids/core/src/state.directive.ts:62](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/grids/core/src/state.directive.ts#L62)

Restores grid features' state based on the IGridState object passed as an argument.

#### Parameters

##### state

`string` \| [`IGridState`](../interfaces/IGridState.md)

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

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`setStateInternal`](IgxGridStateBaseDirective.md#setstateinternal)

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

#### Inherited from

[`IgxGridStateBaseDirective`](IgxGridStateBaseDirective.md).[`stringifyCallback`](IgxGridStateBaseDirective.md#stringifycallback)
