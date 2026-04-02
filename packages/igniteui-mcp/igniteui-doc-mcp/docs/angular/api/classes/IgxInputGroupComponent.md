# Class: IgxInputGroupComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:39](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L39)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxInputGroupComponent**(): `IgxInputGroupComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L230)

#### Returns

`IgxInputGroupComponent`

## Properties

### \_prefixes

> `protected` **\_prefixes**: `QueryList`\<`IgxPrefixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L122)

***

### \_suffixes

> `protected` **\_suffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:125](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L125)

***

### defaultClass

> **defaultClass**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:75](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L75)

Property that enables/disables the auto-generated class of the `IgxInputGroupComponent`.
By default applied the class is applied.
```typescript
 @ViewChild("MyInputGroup")
 public inputGroup: IgxInputGroupComponent;
 ngAfterViewInit(){
 this.inputGroup.defaultClass = false;
```
}

***

### element

> **element**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:40](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L40)

***

### suppressInputAutofocus

> **suppressInputAutofocus**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:111](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L111)

Prevents automatically focusing the input when clicking on other elements in the input group (e.g. prefix or suffix).

#### Remarks

Automatic focus causes software keyboard to show on mobile devices.

#### Example

```html
<igx-input-group [suppressInputAutofocus]="true"></igx-input-group>
```

## Accessors

### hasBorder

#### Get Signature

> **get** **hasBorder**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:315](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L315)

Returns whether the `IgxInputGroupComponent` has border.
```typescript
@ViewChild("MyInputGroup")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let inputBorder = this.inputGroup.hasBorder;
}
```

##### Returns

`boolean`

***

### hasHints

#### Get Signature

> **get** **hasHints**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:279](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L279)

Returns whether the `IgxInputGroupComponent` has hints.
```typescript
@ViewChild("MyInputGroup")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let inputHints = this.inputGroup.hasHints;
}
```

##### Returns

`boolean`

***

### isTypeBootstrap

#### Get Signature

> **get** **isTypeBootstrap**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:432](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L432)

Returns true if the `IgxInputGroupComponent` theme is Bootstrap.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeBootstrap = this.inputGroup.isTypeBootstrap;
}
```

##### Returns

`boolean`

***

### isTypeBorder

#### Get Signature

> **get** **isTypeBorder**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:402](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L402)

Returns whether the `IgxInputGroupComponent` type is border.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeBorder = this.inputGroup.isTypeBorder;
}
```

##### Returns

`boolean`

***

### isTypeBox

#### Get Signature

> **get** **isTypeBox**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L347)

Returns whether the `IgxInputGroupComponent` type is box.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeBox = this.inputGroup.isTypeBox;
}
```

##### Returns

`boolean`

***

### isTypeFluent

#### Get Signature

> **get** **isTypeFluent**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:417](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L417)

Returns true if the `IgxInputGroupComponent` theme is Fluent.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeFluent = this.inputGroup.isTypeFluent;
}
```

##### Returns

`boolean`

***

### isTypeIndigo

#### Get Signature

> **get** **isTypeIndigo**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:447](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L447)

Returns true if the `IgxInputGroupComponent` theme is Indigo.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeIndigo = this.inputGroup.isTypeIndigo;
}
```

##### Returns

`boolean`

***

### isTypeLine

#### Get Signature

> **get** **isTypeLine**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:332](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L332)

Returns whether the `IgxInputGroupComponent` type is line.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeLine = this.inputGroup.isTypeLine;
}
```

##### Returns

`boolean`

***

### isTypeSearch

#### Get Signature

> **get** **isTypeSearch**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:462](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L462)

Returns whether the `IgxInputGroupComponent` type is search.
```typescript
@ViewChild("MyInputGroup1")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let isTypeSearch = this.inputGroup.isTypeSearch;
}
```

##### Returns

`boolean`

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): [`IInputResourceStrings`](../interfaces/IInputResourceStrings.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:59](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L59)

Returns the resource strings.

##### Returns

[`IInputResourceStrings`](../interfaces/IInputResourceStrings.md)

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:52](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L52)

Sets the resource strings.
By default it uses EN resources.

##### Parameters

###### value

[`IInputResourceStrings`](../interfaces/IInputResourceStrings.md)

##### Returns

`void`

***

### theme

#### Get Signature

> **get** **theme**(): [`IgxTheme`](../type-aliases/IgxTheme.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:226](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L226)

Returns the theme of the input.
The returned value is of type IgxInputGroupType.
```typescript
@ViewChild("MyInputGroup")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit() {
 let inputTheme = this.inputGroup.theme;
}

##### Returns

[`IgxTheme`](../type-aliases/IgxTheme.md)

#### Set Signature

> **set** **theme**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:212](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L212)

Sets the theme of the input.
Allowed values of type IgxInputGroupTheme.
```typescript
@ViewChild("MyInputGroup")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit() {
 let inputTheme = 'fluent';
}

##### Parameters

###### value

[`IgxTheme`](../type-aliases/IgxTheme.md)

##### Returns

`void`

***

### type

#### Get Signature

> **get** **type**(): [`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:197](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L197)

Returns the type of the `IgxInputGroupComponent`. How the input is styled.
The default is `line`.
```typescript
@ViewChild("MyInputGroup")
public inputGroup: IgxInputGroupComponent;
ngAfterViewInit(){
   let inputType = this.inputGroup.type;
}
```

##### Returns

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

#### Set Signature

> **set** **type**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts:182](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/input-group/src/input-group/input-group.component.ts#L182)

Sets how the input will be styled.
Allowed values of type IgxInputGroupType.
```html
<igx-input-group [type]="'search'">
```

##### Parameters

###### value

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

##### Returns

`void`
