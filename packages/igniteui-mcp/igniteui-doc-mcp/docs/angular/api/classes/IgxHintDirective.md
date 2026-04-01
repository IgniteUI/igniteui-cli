# Class: IgxHintDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts:12](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts#L12)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxHintDirective**(): `IgxHintDirective`

#### Returns

`IgxHintDirective`

## Properties

### isPositionEnd

> **isPositionEnd**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts:44](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts#L44)

Sets/gets whether the hint position is at the end.
Default value is `false`.
```typescript
@ViewChild('hint', {read: IgxHintDirective})
public igxHint: IgxHintDirective;
this.igxHint.isPositionEnd = true;
```
```typescript
let isHintPositionEnd = this.igxHint.isPositionEnd;
```

#### Memberof

IgxHintDirective

***

### isPositionStart

> **isPositionStart**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts:28](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts#L28)

Sets/gets whether the hint position is at the start.
Default value is `false`.
```typescript
@ViewChild('hint', {read: IgxHintDirective})
public igxHint: IgxHintDirective;
this.igxHint.isPositionStart = true;
```
```typescript
let isHintPositionStart = this.igxHint.isPositionStart;
```

#### Memberof

IgxHintDirective

## Accessors

### position

#### Get Signature

> **get** **position**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts:76](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts#L76)

Gets the position of the hint.
```typescript
@ViewChild('hint', {read: IgxHintDirective})
public igxHint: IgxHintDirective;
let hintPosition =  this.igxHint.position;
```

##### Memberof

IgxHintDirective

##### Returns

`string`

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/directives-hint/hint.directive.ts#L59)

Sets the position of the hint.
```html
<igx-input-group>
 <input igxInput type="text"/>
 <igx-hint #hint [position]="'start'">IgxHint displayed at the start</igx-hint>
</igx-input-group>
```

##### Memberof

IgxHintDirective

##### Parameters

###### value

`string`

##### Returns

`void`
