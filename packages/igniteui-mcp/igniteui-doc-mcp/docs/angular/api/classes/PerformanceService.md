# Class: PerformanceService

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:74](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L74)

## Constructors

### Constructor

> **new PerformanceService**(): `PerformanceService`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:78](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L78)

#### Returns

`PerformanceService`

## Methods

### attachObserver()

> **attachObserver**(`options?`): () => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:102](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L102)

#### Parameters

##### options?

`PerformanceObserverInit`

#### Returns

() => `void`

***

### clearAll()

> **clearAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:98](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L98)

#### Returns

`void`

***

### clearMeasures()

> **clearMeasures**(`name?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:94](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L94)

#### Parameters

##### name?

`string`

#### Returns

`void`

***

### getMeasures()

> **getMeasures**(`name?`): `PerformanceEntryList`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L90)

#### Parameters

##### name?

`string`

#### Returns

`PerformanceEntryList`

***

### setLogEnabled()

> **setLogEnabled**(`state`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:82](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L82)

#### Parameters

##### state

`boolean`

#### Returns

`void`

***

### start()

> **start**(`name`): () => `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/performance.service.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/performance.service.ts#L86)

#### Parameters

##### name

`string`

#### Returns

() => `void`
