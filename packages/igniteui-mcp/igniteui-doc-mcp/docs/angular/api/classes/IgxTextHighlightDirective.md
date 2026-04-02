# Class: IgxTextHighlightDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:41](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L41)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxTextHighlightDirective**(): `IgxTextHighlightDirective`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:196](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L196)

#### Returns

`IgxTextHighlightDirective`

## Properties

### activeCssClass

> **activeCssClass**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:72](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L72)

Determines the `CSS` class of the active highlight element.
This allows the developer to provide custom `CSS` to customize the highlight.

```html
<div
  igxTextHighlight
  [activeCssClass]="activeHighlightClass">
</div>
```

***

### column

> **column**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L147)

The identifier of the column on which the directive is currently on.

```html
<div
  igxTextHighlight
  [column]="0">
</div>
```

***

### cssClass

> **cssClass**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L58)

Determines the `CSS` class of the highlight elements.
This allows the developer to provide custom `CSS` to customize the highlight.

```html
<div
  igxTextHighlight
  [cssClass]="myClass">
</div>
```

***

### groupName

> **groupName**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:93](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L93)

Identifies the highlight within a unique group.
This allows it to have several different highlight groups,
with each of them having their own active highlight.

```html
<div
  igxTextHighlight
  [groupName]="myGroupName">
</div>
```

***

### metadata

> **metadata**: `Map`\<`string`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:168](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L168)

A map that contains all additional conditions, that you need to activate a highlighted
element. To activate the condition, you will have to add a new metadata key to
the `metadata` property of the IActiveHighlightInfo interface.

#### Example

```typescript
 // Set a property, which would disable the highlight for a given element on a certain condition
 const metadata = new Map<string, any>();
 metadata.set('highlightElement', false);
```
```html
<div
  igxTextHighlight
  [metadata]="metadata">
</div>
```

***

### row

> **row**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:134](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L134)

The identifier of the row on which the directive is currently on.

```html
<div
  igxTextHighlight
  [row]="0">
</div>
```

## Accessors

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:112](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L112)

The underlying value of the element that will be highlighted.

```typescript
// get
const elementValue = this.textHighlight.value;
```

```html
<!--set-->
<div
  igxTextHighlight
  [value]="newValue">
</div>
```

##### Returns

`any`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L115)

##### Parameters

###### value

`any`

##### Returns

`void`

## Methods

### activateIfNecessary()

> **activateIfNecessary**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:314](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L314)

Activates the highlight if it is on the currently active row and column.

#### Returns

`void`

***

### clearHighlight()

> **clearHighlight**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:302](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L302)

Clears any existing highlight.

#### Returns

`void`

***

### highlight()

> **highlight**(`text`, `caseSensitive?`, `exactMatch?`): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:274](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L274)

Clears the existing highlight and highlights the searched text.
Returns how many times the element contains the searched text.

#### Parameters

##### text

`string`

##### caseSensitive?

`boolean`

##### exactMatch?

`boolean`

#### Returns

`number`

***

### observe()

> **observe**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts:326](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/directives/src/directives/text-highlight/text-highlight.directive.ts#L326)

Attaches a MutationObserver to the parentElement and watches for when the container element is removed/readded to the DOM.
Should be used only when necessary as using many observers may lead to performance degradation.

#### Returns

`void`
