# Class: IgxFocusDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts:10](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts#L10)

## Constructors

### Constructor

> **new IgxFocusDirective**(): `IgxFocusDirective`

#### Returns

`IgxFocusDirective`

## Accessors

### focused

#### Get Signature

> **get** **focused**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts:29](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts#L29)

Returns the state of the igxFocus.
```typescript
@ViewChild('focusContainer', {read: IgxFocusDirective})
public igxFocus: IgxFocusDirective;
let isFocusOn = this.igxFocus.focused;
```

##### Memberof

IgxFocusDirective

##### Returns

`boolean`

#### Set Signature

> **set** **focused**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts:43](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts#L43)

Sets the state of the igxFocus.
```html
<igx-input-group >
 <input #focusContainer igxInput [igxFocus]="true"/>
</igx-input-group>
```

##### Memberof

IgxFocusDirective

##### Parameters

###### val

`boolean`

##### Returns

`void`

***

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts#L58)

Gets the native element of the igxFocus.
```typescript
@ViewChild('focusContainer', {read: IgxFocusDirective})
public igxFocus: IgxFocusDirective;
let igxFocusNativeElement = this.igxFocus.nativeElement;
```

##### Memberof

IgxFocusDirective

##### Returns

`any`

## Methods

### trigger()

> **trigger**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts:80](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/focus/focus.directive.ts#L80)

Triggers the igxFocus state.
```typescript
@ViewChild('focusContainer', {read: IgxFocusDirective})
public igxFocus: IgxFocusDirective;
this.igxFocus.trigger();
```

#### Returns

`void`

#### Memberof

IgxFocusDirective
