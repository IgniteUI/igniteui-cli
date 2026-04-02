# Class: IgxTextSelectionDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts:8](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts#L8)

## Constructors

### Constructor

> **new IgxTextSelectionDirective**(): `IgxTextSelectionDirective`

#### Returns

`IgxTextSelectionDirective`

## Properties

### selected

> **selected**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts:31](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts#L31)

Determines whether the input element could be selected through the directive.

```html
<!--set-->
<input
  type="text"
  id="firstName"
  [igxTextSelection]="true">
</input>

<input
  type="text"
  id="lastName"
  igxTextSelection
  [selected]="true">
</input>
```

## Accessors

### nativeElement

#### Get Signature

> **get** **nativeElement**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts#L54)

Returns the nativeElement of the element where the directive was applied.

```html
<input
  type="text"
  id="firstName"
  igxTextSelection>
</input>
```

```typescript
@ViewChild('firstName',
 {read: IgxTextSelectionDirective})
public inputElement: IgxTextSelectionDirective;

public getNativeElement() {
 return this.inputElement.nativeElement;
}
```

##### Returns

`any`

## Methods

### trigger()

> **trigger**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts:88](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-selection/text-selection.directive.ts#L88)

Triggers the selection of the element if it is marked as selectable.

```html
<input
  type="text"
  id="firstName"
  igxTextSelection>
</input>
```

```typescript
@ViewChild('firstName',
 {read: IgxTextSelectionDirective})
public inputElement: IgxTextSelectionDirective;

public triggerElementSelection() {
 this.inputElement.trigger();
}
```

#### Returns

`void`
