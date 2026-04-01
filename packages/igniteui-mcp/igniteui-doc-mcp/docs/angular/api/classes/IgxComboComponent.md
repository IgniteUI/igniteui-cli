# Class: IgxComboComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:122](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L122)

Represents a drop-down list that provides editable functionalities, allowing users to choose an option from a predefined list.

## Igx Module

IgxComboModule

## Igx Theme

igx-combo-theme

## Igx Keywords

combobox, combo selection

## Igx Group

Grids & Lists

## Remarks

It provides the ability to filter items as well as perform selection with the provided data.
Additionally, it exposes keyboard navigation and custom styling capabilities.

## Example

```html
<igx-combo [itemsMaxHeight]="250" [data]="locationData"
 [displayKey]="'field'" [valueKey]="'field'"
 placeholder="Location(s)" searchPlaceholder="Search...">
</igx-combo>
```

## Extends

- [`IgxComboBaseDirective`](IgxComboBaseDirective.md)

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxComboComponent**(): `IgxComboComponent`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L187)

#### Returns

`IgxComboComponent`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`constructor`](IgxComboBaseDirective.md#constructor)

## Properties

### \_data

> `protected` **\_data**: `any`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:953](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L953)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_data`](IgxComboBaseDirective.md#_data)

***

### \_defaultResourceStrings

> `protected` **\_defaultResourceStrings**: `PrefixedResourceStrings`\<`IAComboResourceStrings`, `any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:962](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L962)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_defaultResourceStrings`](IgxComboBaseDirective.md#_defaultresourcestrings)

***

### \_displayKey

> `protected` **\_displayKey**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:959](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L959)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_displayKey`](IgxComboBaseDirective.md#_displaykey)

***

### \_displayValue

> `protected` **\_displayValue**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:955](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L955)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_displayValue`](IgxComboBaseDirective.md#_displayvalue)

***

### \_filteredData

> `protected` **\_filteredData**: `any`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:958](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L958)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_filteredData`](IgxComboBaseDirective.md#_filtereddata)

***

### \_groupKey

> `protected` **\_groupKey**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:956](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L956)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_groupKey`](IgxComboBaseDirective.md#_groupkey)

***

### \_iconService

> `protected` **\_iconService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:120](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L120)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_iconService`](IgxComboBaseDirective.md#_iconservice)

***

### \_injector

> `protected` **\_injector**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:119](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L119)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_injector`](IgxComboBaseDirective.md#_injector)

***

### \_inputGroupType

> `protected` **\_inputGroupType**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:118](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L118)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_inputGroupType`](IgxComboBaseDirective.md#_inputgrouptype)

***

### \_onChangeCallback

> `protected` **\_onChangeCallback**: (`_`) => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:967](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L967)

#### Parameters

##### \_

`any`

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_onChangeCallback`](IgxComboBaseDirective.md#_onchangecallback)

***

### \_onTouchedCallback

> `protected` **\_onTouchedCallback**: () => `void` = `noop`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:966](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L966)

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_onTouchedCallback`](IgxComboBaseDirective.md#_ontouchedcallback)

***

### \_prevInputValue

> `protected` **\_prevInputValue**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L183)

***

### \_remoteSelection

> `protected` **\_remoteSelection**: `object` = `{}`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:960](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L960)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_remoteSelection`](IgxComboBaseDirective.md#_remoteselection)

***

### \_resourceStrings

> `protected` **\_resourceStrings**: `PrefixedResourceStrings` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:961](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L961)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_resourceStrings`](IgxComboBaseDirective.md#_resourcestrings)

***

### \_searchValue

> `protected` **\_searchValue**: `string` = `''`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:957](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L957)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_searchValue`](IgxComboBaseDirective.md#_searchvalue)

***

### \_valid

> `protected` **\_valid**: [`IgxInputState`](../enumerations/IgxInputState.md) = `IgxInputState.INITIAL`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:963](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L963)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_valid`](IgxComboBaseDirective.md#_valid)

***

### \_value

> `protected` **\_value**: `any`[] = `[]`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:954](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L954)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`_value`](IgxComboBaseDirective.md#_value)

***

### addItemTemplate

> **addItemTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:671](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L671)

The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.addItemTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboAddItem>
         <button type="button" igxButton="contained" class="combo__add-button">
             Click to add item
         </button>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`addItemTemplate`](IgxComboBaseDirective.md#additemtemplate)

***

### addition

> **addition**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:537](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L537)

Emitted when an item is being added to the data collection

```html
<igx-combo (addition)='handleAdditionEvent($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`addition`](IgxComboBaseDirective.md#addition)

***

### allowCustomValues

> **allowCustomValues**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:230](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L230)

Controls whether custom values can be added to the collection

```typescript
// get
let comboAllowsCustomValues = this.combo.allowCustomValues;
```

```html
<!--set-->
<igx-combo [allowCustomValues]='true'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`allowCustomValues`](IgxComboBaseDirective.md#allowcustomvalues)

***

### ariaLabelledBy

> **ariaLabelledBy**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:444](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L444)

Sets aria-labelledby attribute value.
```html
<igx-combo [ariaLabelledBy]="'label1'">
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`ariaLabelledBy`](IgxComboBaseDirective.md#arialabelledby)

***

### autoFocusSearch

> **autoFocusSearch**: `boolean` = `true`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L129)

Whether the combo's search box should be focused after the dropdown is opened.
When `false`, the combo's list item container will be focused instead

***

### cdr

> `protected` **cdr**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:114](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L114)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`cdr`](IgxComboBaseDirective.md#cdr)

***

### clearIconTemplate

> **clearIconTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:736](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L736)

The custom template, if any, that should be used when rendering the combo CLEAR button

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.clearIconTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboClearIcon>
         <igx-icon>clear</igx-icon>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`clearIconTemplate`](IgxComboBaseDirective.md#clearicontemplate)

***

### closed

> **closed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:527](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L527)

Emitted after the dropdown is closed

```html
<igx-combo (closed)='handleClosed($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`closed`](IgxComboBaseDirective.md#closed)

***

### closing

> **closing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:517](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L517)

Emitted before the dropdown is closed

```html
<igx-combo (closing)='handleClosing($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`closing`](IgxComboBaseDirective.md#closing)

***

### comboAPI

> `protected` **comboAPI**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:116](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L116)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`comboAPI`](IgxComboBaseDirective.md#comboapi)

***

### compareCollator

> `protected` **compareCollator**: `Collator`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:968](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L968)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`compareCollator`](IgxComboBaseDirective.md#comparecollator)

***

### complexTemplate

> `protected` **complexTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:767](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L767)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`complexTemplate`](IgxComboBaseDirective.md#complextemplate)

***

### computedStyles

> `protected` **computedStyles**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:969](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L969)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`computedStyles`](IgxComboBaseDirective.md#computedstyles)

***

### containerSize

> `protected` **containerSize**: `any` = `undefined`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:951](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L951)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`containerSize`](IgxComboBaseDirective.md#containersize)

***

### dataPreLoad

> **dataPreLoad**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:557](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L557)

Emitted when new chunk of data is loaded from the virtualization

```html
<igx-combo (dataPreLoad)='handleDataPreloadEvent($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`dataPreLoad`](IgxComboBaseDirective.md#datapreload)

***

### destroy$

> `protected` **destroy$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:965](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L965)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`destroy$`](IgxComboBaseDirective.md#destroy)

***

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:457](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L457)

Disables the combo. The default is `false`.
```html
<igx-combo [disabled]="'true'">
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`disabled`](IgxComboBaseDirective.md#disabled)

***

### document

> **document**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L117)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`document`](IgxComboBaseDirective.md#document)

***

### dropdownContainer

> `protected` **dropdownContainer**: `ElementRef` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:761](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L761)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`dropdownContainer`](IgxComboBaseDirective.md#dropdowncontainer)

***

### elementRef

> `protected` **elementRef**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L113)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`elementRef`](IgxComboBaseDirective.md#elementref)

***

### emptyTemplate

> **emptyTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:694](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L694)

The custom template, if any, that should be used when rendering the ADD BUTTON in the combo drop down

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.emptyTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboEmpty>
         <div class="combo--empty">
             There are no items to display
         </div>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`emptyTemplate`](IgxComboBaseDirective.md#emptytemplate)

***

### filterFunction

> **filterFunction**: (`collection`, `searchValue`, `filteringOptions`) => `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:435](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L435)

Gets/Sets the custom filtering function of the combo.

#### Parameters

##### collection

`any`[]

##### searchValue

`any`

##### filteringOptions

[`IComboFilteringOptions`](../interfaces/IComboFilteringOptions.md)

#### Returns

`any`[]

#### Example

```html
 <igx-comb #combo [data]="localData" [filterFunction]="filterFunction"></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`filterFunction`](IgxComboBaseDirective.md#filterfunction)

***

### footerTemplate

> **footerTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:627](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L627)

The custom template, if any, that should be used when rendering the FOOTER for the combo items list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.footerTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboFooter>
         <div class="combo__footer">
             This is a custom footer
         </div>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`footerTemplate`](IgxComboBaseDirective.md#footertemplate)

***

### headerItemTemplate

> **headerItemTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:648](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L648)

The custom template, if any, that should be used when rendering HEADER ITEMS for groups in the combo list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.headerItemTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboHeaderItem let-item let-key="groupKey">
         <div class="custom-item--group">Group header for {{ item[key] }}</div>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`headerItemTemplate`](IgxComboBaseDirective.md#headeritemtemplate)

***

### headerTemplate

> **headerTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:604](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L604)

The custom template, if any, that should be used when rendering the HEADER for the combo items list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.headerTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboHeader>
         <div class="combo__header">
             This is a custom header
         </div>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`headerTemplate`](IgxComboBaseDirective.md#headertemplate)

***

### internalSuffixes

> `protected` **internalSuffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:776](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L776)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`internalSuffixes`](IgxComboBaseDirective.md#internalsuffixes)

***

### itemSize

> `protected` **itemSize**: `any` = `undefined`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:952](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L952)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`itemSize`](IgxComboBaseDirective.md#itemsize)

***

### itemsWidth

> **itemsWidth**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:300](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L300)

Configures the drop down list width

```typescript
// get
let myComboItemsWidth = this.combo.itemsWidth;
```

```html
<!--set-->
<igx-combo [itemsWidth] = '"180px"'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`itemsWidth`](IgxComboBaseDirective.md#itemswidth)

***

### itemTemplate

> **itemTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:581](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L581)

The custom template, if any, that should be used when rendering ITEMS in the combo list

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.itemTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboItem let-item let-key="valueKey">
         <div class="custom-item">
             <div class="custom-item__name">{{ item[key] }}</div>
             <div class="custom-item__cost">{{ item.cost }}</div>
         </div>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`itemTemplate`](IgxComboBaseDirective.md#itemtemplate)

***

### ngControl

> `protected` **ngControl**: `NgControl` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:964](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L964)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`ngControl`](IgxComboBaseDirective.md#ngcontrol)

***

### opened

> **opened**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:507](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L507)

Emitted after the dropdown is opened

```html
<igx-combo (opened)='handleOpened($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`opened`](IgxComboBaseDirective.md#opened)

***

### opening

> **opening**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:497](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L497)

Emitted before the dropdown is opened

```html
<igx-combo opening='handleOpening($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`opening`](IgxComboBaseDirective.md#opening)

***

### overlaySettings

> **overlaySettings**: [`OverlaySettings`](../interfaces/OverlaySettings.md) = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:166](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L166)

Set custom overlay settings that control how the combo's list of items is displayed.
Set:
```html
<igx-combo [overlaySettings]="customOverlaySettings"></igx-combo>
```

```typescript
 const customSettings = { positionStrategy: { settings: { target: myTarget } } };
 combo.overlaySettings = customSettings;
```
Get any custom overlay settings used by the combo:
```typescript
 const comboOverlaySettings: OverlaySettings = myCombo.overlaySettings;
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`overlaySettings`](IgxComboBaseDirective.md#overlaysettings)

***

### placeholder

> **placeholder**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:316](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L316)

Defines the placeholder value for the combo value field

```typescript
// get
let myComboPlaceholder = this.combo.placeholder;
```

```html
<!--set-->
<igx-combo [placeholder]='newPlaceHolder'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`placeholder`](IgxComboBaseDirective.md#placeholder)

***

### prefixes

> `protected` **prefixes**: `QueryList`\<`IgxPrefixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:770](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L770)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`prefixes`](IgxComboBaseDirective.md#prefixes)

***

### primitiveTemplate

> `protected` **primitiveTemplate**: `TemplateRef`\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:764](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L764)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`primitiveTemplate`](IgxComboBaseDirective.md#primitivetemplate)

***

### searchInputUpdate

> **searchInputUpdate**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:547](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L547)

Emitted when the value of the search input changes (e.g. typing, pasting, clear, etc.)

```html
<igx-combo (searchInputUpdate)='handleSearchInputEvent($event)'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`searchInputUpdate`](IgxComboBaseDirective.md#searchinputupdate)

***

### ~~searchPlaceholder~~

> **searchPlaceholder**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:147](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L147)

Defines the placeholder value for the combo dropdown search field

#### Deprecated

in version 18.2.0. Replaced with values in the localization resource strings.

```typescript
// get
let myComboSearchPlaceholder = this.combo.searchPlaceholder;
```

```html
<!--set-->
<igx-combo [searchPlaceholder]='newPlaceHolder'></igx-combo>
```

***

### selectionChanged

> **selectionChanged**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:167](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L167)

Emitted when item selection is changed, after the selection completes

```html
<igx-combo (selectionChanged)='handleSelection()'></igx-combo>
```

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`selectionChanged`](IgxComboBaseDirective.md#selectionchanged)

***

### selectionChanging

> **selectionChanging**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:157](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L157)

Emitted when item selection is changing, before the selection completes

```html
<igx-combo (selectionChanging)='handleSelection()'></igx-combo>
```

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`selectionChanging`](IgxComboBaseDirective.md#selectionchanging)

***

### selectionService

> `protected` **selectionService**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:115](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L115)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`selectionService`](IgxComboBaseDirective.md#selectionservice)

***

### showSearchCaseIcon

> **showSearchCaseIcon**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:136](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L136)

Defines whether the caseSensitive icon should be shown in the search input

```typescript
// get
let myComboShowSearchCaseIcon = this.combo.showSearchCaseIcon;
```

```html
<!--set-->
<igx-combo [showSearchCaseIcon]='true'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`showSearchCaseIcon`](IgxComboBaseDirective.md#showsearchcaseicon)

***

### suffixes

> `protected` **suffixes**: `QueryList`\<`IgxSuffixDirective`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:773](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L773)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`suffixes`](IgxComboBaseDirective.md#suffixes)

***

### toggleIconTemplate

> **toggleIconTemplate**: `TemplateRef`\<`any`\> = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:715](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L715)

The custom template, if any, that should be used when rendering the combo TOGGLE(open/close) button

```typescript
// Set in typescript
const myCustomTemplate: TemplateRef<any> = myComponent.customTemplate;
myComponent.combo.toggleIconTemplate = myCustomTemplate;
```
```html
<!-- Set in markup -->
 <igx-combo #combo>
     ...
     <ng-template igxComboToggleIcon let-collapsed>
         <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
     </ng-template>
 </igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`toggleIconTemplate`](IgxComboBaseDirective.md#toggleicontemplate)

***

### valueKey

> **valueKey**: `string` = `null`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:354](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L354)

Determines which column in the data source is used to determine the value.

```typescript
// get
let myComboValueKey = this.combo.valueKey;
```

```html
<!--set-->
<igx-combo [valueKey]='myKey'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`valueKey`](IgxComboBaseDirective.md#valuekey)

***

### virtDir

> `protected` **virtDir**: [`IgxForOfDirective`](IgxForOfDirective.md)\<`any`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:758](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L758)

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`virtDir`](IgxComboBaseDirective.md#virtdir)

***

### width

> **width**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:214](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L214)

Sets the style width of the element

```typescript
// get
let myComboWidth = this.combo.width;
```

```html
<!--set-->
<igx-combo [width]='250px'></igx-combo>
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`width`](IgxComboBaseDirective.md#width)

## Accessors

### collapsed

#### Get Signature

> **get** **collapsed**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:881](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L881)

Gets drop down state.

```typescript
let state = this.combo.collapsed;
```

##### Returns

`boolean`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`collapsed`](IgxComboBaseDirective.md#collapsed)

***

### data

#### Get Signature

> **get** **data**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:327](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L327)

Combo data source.

```html
<!--set-->
<igx-combo [data]='items'></igx-combo>
```

##### Returns

`any`[]

#### Set Signature

> **set** **data**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:330](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L330)

##### Parameters

###### val

`any`[]

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`data`](IgxComboBaseDirective.md#data)

***

### disableFiltering

#### Get Signature

> **get** **disableFiltering**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:142](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L142)

Enables/disables filtering in the list. The default is `false`.

##### Returns

`boolean`

#### Set Signature

> **set** **disableFiltering**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:145](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L145)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`disableFiltering`](IgxComboBaseDirective.md#disablefiltering)

***

### displayKey

#### Get Signature

> **get** **displayKey**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:378](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L378)

Determines which column in the data source is used to determine the display value.

```typescript
// get
let myComboDisplayKey = this.combo.displayKey;

// set
this.combo.displayKey = 'val';

```

```html
<!--set-->
<igx-combo [displayKey]='myDisplayKey'></igx-combo>
```

##### Returns

`string`

#### Set Signature

> **set** **displayKey**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:357](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L357)

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`displayKey`](IgxComboBaseDirective.md#displaykey)

***

### displayValue

#### Get Signature

> **get** **displayValue**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:847](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L847)

The text displayed in the combo input

```typescript
// get
let comboDisplayValue = this.combo.displayValue;
```

##### Returns

`string`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`displayValue`](IgxComboBaseDirective.md#displayvalue)

***

### filteringOptions

#### Get Signature

> **get** **filteringOptions**(): [`IComboFilteringOptions`](../interfaces/IComboFilteringOptions.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:944](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L944)

Configures the way combo items will be filtered.

```typescript
// get
let myFilteringOptions = this.combo.filteringOptions;
```

```html
<!--set-->
<igx-combo [filteringOptions]='myFilteringOptions'></igx-combo>
```

##### Returns

[`IComboFilteringOptions`](../interfaces/IComboFilteringOptions.md)

#### Set Signature

> **set** **filteringOptions**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:947](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L947)

##### Parameters

###### value

[`IComboFilteringOptions`](../interfaces/IComboFilteringOptions.md)

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`filteringOptions`](IgxComboBaseDirective.md#filteringoptions)

***

### groupKey

#### Get Signature

> **get** **groupKey**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:403](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L403)

The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].

```typescript
// get
let currentGroupKey = this.combo.groupKey;
```

##### Returns

`string`

#### Set Signature

> **set** **groupKey**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:391](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L391)

The item property by which items should be grouped inside the items list. Not usable if data is not of type Object[].

```html
<!--set-->
<igx-combo [groupKey]='newGroupKey'></igx-combo>
```

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`groupKey`](IgxComboBaseDirective.md#groupkey)

***

### groupSortingDirection

#### Get Signature

> **get** **groupSortingDirection**(): [`SortingDirection`](../enumerations/SortingDirection.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:419](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L419)

Sets groups sorting order.

##### Example

```html
<igx-combo [groupSortingDirection]="groupSortingDirection"></igx-combo>
```
```typescript
public groupSortingDirection = SortingDirection.Asc;
```

##### Returns

[`SortingDirection`](../enumerations/SortingDirection.md)

#### Set Signature

> **set** **groupSortingDirection**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:422](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L422)

##### Parameters

###### val

[`SortingDirection`](../enumerations/SortingDirection.md)

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`groupSortingDirection`](IgxComboBaseDirective.md#groupsortingdirection)

***

### id

#### Get Signature

> **get** **id**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:183](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L183)

Gets/gets combo id.

```typescript
// get
let id = this.combo.id;
```

```html
<!--set-->
<igx-combo [id]='combo1'></igx-combo>
```

##### Returns

`string`

#### Set Signature

> **set** **id**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:187](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L187)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`id`](IgxComboBaseDirective.md#id)

***

### itemHeight

#### Get Signature

> **get** **itemHeight**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:278](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L278)

Configures the drop down list item height

```typescript
// get
let myComboItemHeight = this.combo.itemHeight;
```

```html
<!--set-->
<igx-combo [itemHeight]='32'></igx-combo>
```

##### Returns

`number`

#### Set Signature

> **set** **itemHeight**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:282](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L282)

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`itemHeight`](IgxComboBaseDirective.md#itemheight)

***

### itemsMaxHeight

#### Get Signature

> **get** **itemsMaxHeight**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:246](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L246)

Configures the drop down list height

```typescript
// get
let myComboItemsMaxHeight = this.combo.itemsMaxHeight;
```

```html
<!--set-->
<igx-combo [itemsMaxHeight]='320'></igx-combo>
```

##### Returns

`number`

#### Set Signature

> **set** **itemsMaxHeight**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:253](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L253)

##### Parameters

###### val

`number`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`itemsMaxHeight`](IgxComboBaseDirective.md#itemsmaxheight)

***

### required

#### Get Signature

> **get** `protected` **required**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1396](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1396)

##### Returns

`boolean`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`required`](IgxComboBaseDirective.md#required)

***

### resourceStrings

#### Get Signature

> **get** **resourceStrings**(): `PrefixedResourceStrings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:482](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L482)

Gets/Sets the resource strings.

##### Remarks

By default it uses EN resources.

##### Returns

`PrefixedResourceStrings`

#### Set Signature

> **set** **resourceStrings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:485](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L485)

##### Parameters

###### value

`PrefixedResourceStrings`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`resourceStrings`](IgxComboBaseDirective.md#resourcestrings)

***

### searchValue

#### Set Signature

> **set** **searchValue**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:782](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L782)

##### Parameters

###### val

`string`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`searchValue`](IgxComboBaseDirective.md#searchvalue)

***

### selection

#### Get Signature

> **get** **selection**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1129](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1129)

Get current selection state

##### Returns

`any`[]

Array of selected items
```typescript
let mySelection = this.combo.selection;
```

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`selection`](IgxComboBaseDirective.md#selection)

***

### totalItemCount

#### Get Signature

> **get** **totalItemCount**(): `number`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:893](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L893)

Gets total count of the virtual data items, when using remote service.

```typescript
// get
let count = this.combo.totalItemCount;
```

##### Returns

`number`

#### Set Signature

> **set** **totalItemCount**(`count`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:904](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L904)

Sets total count of the virtual data items, when using remote service.

```typescript
// set
this.combo.totalItemCount(remoteService.count);
```

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`totalItemCount`](IgxComboBaseDirective.md#totalitemcount)

***

### type

#### Get Signature

> **get** **type**(): [`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:467](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L467)

Sets the visual combo type.
The allowed values are `line`, `box`, `border` and `search`. The default is `box`.
```html
<igx-combo [type]="'line'">
```

##### Returns

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

#### Set Signature

> **set** **type**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:471](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L471)

##### Parameters

###### val

[`IgxInputGroupType`](../type-aliases/IgxInputGroupType.md)

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`type`](IgxComboBaseDirective.md#type)

***

### valid

#### Get Signature

> **get** **valid**(): [`IgxInputState`](../enumerations/IgxInputState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:810](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L810)

Gets if control is valid, when used in a form

```typescript
// get
let valid = this.combo.valid;
```

##### Returns

[`IgxInputState`](../enumerations/IgxInputState.md)

#### Set Signature

> **set** **valid**(`valid`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:822](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L822)

Sets if control is valid, when used in a form

```typescript
// set
this.combo.valid = IgxInputState.INVALID;
```

##### Parameters

###### valid

[`IgxInputState`](../enumerations/IgxInputState.md)

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`valid`](IgxComboBaseDirective.md#valid)

***

### value

#### Get Signature

> **get** **value**(): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:835](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L835)

The value of the combo

```typescript
// get
let comboValue = this.combo.value;
```

##### Returns

`any`[]

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`value`](IgxComboBaseDirective.md#value)

***

### virtualizationState

#### Get Signature

> **get** **virtualizationState**(): [`IForOfState`](../interfaces/IForOfState.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:859](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L859)

Defines the current state of the virtualized data. It contains `startIndex` and `chunkSize`

```typescript
// get
let state = this.combo.virtualizationState;
```

##### Returns

[`IForOfState`](../interfaces/IForOfState.md)

#### Set Signature

> **set** **virtualizationState**(`state`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:870](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L870)

Sets the current state of the virtualized data.

```typescript
// set
this.combo.virtualizationState(state);
```

##### Parameters

###### state

[`IForOfState`](../interfaces/IForOfState.md)

##### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`virtualizationState`](IgxComboBaseDirective.md#virtualizationstate)

## Methods

### checkMatch()

> `protected` **checkMatch**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1342](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1342)

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`checkMatch`](IgxComboBaseDirective.md#checkmatch)

***

### close()

> **close**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1110)

A method that closes the combo.

```html
<button type="button" (click)="combo.close()">Close Combo</button>
<igx-combo #combo></igx-combo>
```

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`close`](IgxComboBaseDirective.md#close)

***

### convertKeysToItems()

> `protected` **convertKeysToItems**(`keys`): `any`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1330](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1330)

if there is a valueKey - map the keys to data items, else - just return the keys

#### Parameters

##### keys

`any`[]

#### Returns

`any`[]

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`convertKeysToItems`](IgxComboBaseDirective.md#convertkeystoitems)

***

### createDisplayText()

> `protected` **createDisplayText**(`newSelection`, `oldSelection`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:456](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L456)

#### Parameters

##### newSelection

`any`[]

##### oldSelection

`any`[]

#### Returns

`string`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`createDisplayText`](IgxComboBaseDirective.md#createdisplaytext)

***

### deselect()

> **deselect**(`items`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:312](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L312)

Deselect defined items

#### Parameters

##### items

`any`[]

items to deselected
```typescript
this.combo.deselect(["New York", "New Jersey"]);
```

##### event?

`Event`

#### Returns

`void`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`deselect`](IgxComboBaseDirective.md#deselect)

***

### deselectAllItems()

> **deselectAllItems**(`ignoreFilter?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:341](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L341)

Deselect all (filtered) items

#### Parameters

##### ignoreFilter?

`boolean`

if set to true, deselects all items, otherwise deselects only the filtered ones.
```typescript
this.combo.deselectAllItems();
```

##### event?

`Event`

#### Returns

`void`

***

### findMatch()

> `protected` **findMatch**(`element`): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1347](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1347)

#### Parameters

##### element

`any`

#### Returns

`boolean`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`findMatch`](IgxComboBaseDirective.md#findmatch)

***

### getRemoteSelection()

> `protected` **getRemoteSelection**(`newSelection`, `oldSelection`): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1383](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1383)

#### Parameters

##### newSelection

`any`[]

##### oldSelection

`any`[]

#### Returns

`string`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`getRemoteSelection`](IgxComboBaseDirective.md#getremoteselection)

***

### getSearchPlaceholderText()

> `protected` **getSearchPlaceholderText**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:463](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L463)

#### Returns

`string`

***

### getValueDisplayPairs()

> `protected` **getValueDisplayPairs**(`ids`): `object`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1376](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1376)

For `id: any[]` returns a mapped `{ [combo.valueKey]: any, [combo.displayKey]: any }[]`

#### Parameters

##### ids

`any`[]

#### Returns

`object`[]

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`getValueDisplayPairs`](IgxComboBaseDirective.md#getvaluedisplaypairs)

***

### manageRequiredAsterisk()

> `protected` **manageRequiredAsterisk**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1353](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1353)

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`manageRequiredAsterisk`](IgxComboBaseDirective.md#managerequiredasterisk)

***

### ngAfterViewChecked()

> **ngAfterViewChecked**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:993](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L993)

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`ngAfterViewChecked`](IgxComboBaseDirective.md#ngafterviewchecked)

***

### onArrowDown()

> **onArrowDown**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:194](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L194)

#### Parameters

##### event

`Event`

#### Returns

`void`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`onArrowDown`](IgxComboBaseDirective.md#onarrowdown)

***

### onEscape()

> **onEscape**(`event`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:201](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L201)

#### Parameters

##### event

`Event`

#### Returns

`void`

***

### onStatusChanged()

> `protected` **onStatusChanged**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1299](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1299)

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`onStatusChanged`](IgxComboBaseDirective.md#onstatuschanged)

***

### open()

> **open**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1092](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1092)

A method that opens the combo.

```html
<button type="button" (click)="combo.open()">Open Combo</button>
<igx-combo #combo></igx-combo>
```

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`open`](IgxComboBaseDirective.md#open)

***

### registerRemoteEntries()

> `protected` **registerRemoteEntries**(`ids`, `add?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1360](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1360)

Contains key-value pairs of the selected valueKeys and their resp. displayKeys

#### Parameters

##### ids

`any`[]

##### add?

`boolean` = `true`

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`registerRemoteEntries`](IgxComboBaseDirective.md#registerremoteentries)

***

### select()

> **select**(`newItems`, `clearCurrentSelection?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:297](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L297)

Select defined items

#### Parameters

##### newItems

`any`[]

new items to be selected

##### clearCurrentSelection?

`boolean`

if true clear previous selected items
```typescript
this.combo.select(["New York", "New Jersey"]);
```

##### event?

`Event`

#### Returns

`void`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`select`](IgxComboBaseDirective.md#select)

***

### selectAllItems()

> **selectAllItems**(`ignoreFilter?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:327](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L327)

Select all (filtered) items

#### Parameters

##### ignoreFilter?

`boolean`

if set to true, selects all items, otherwise selects only the filtered ones.
```typescript
this.combo.selectAllItems();
```

##### event?

`Event`

#### Returns

`void`

***

### setSelectedItem()

> **setSelectedItem**(`itemID`, `select?`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L368)

Selects/Deselects a single item

#### Parameters

##### itemID

`any`

the itemID of the specific item

##### select?

`boolean` = `true`

If the item should be selected (true) or deselected (false)

Without specified valueKey;
```typescript
this.combo.valueKey = null;
const items: { field: string, region: string}[] = data;
this.combo.setSelectedItem(items[0], true);
```
With specified valueKey;
```typescript
this.combo.valueKey = 'field';
const items: { field: string, region: string}[] = data;
this.combo.setSelectedItem('Connecticut', true);
```

##### event?

`Event`

#### Returns

`void`

***

### setSelection()

> `protected` **setSelection**(`selection`, `event?`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.component.ts:408](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.component.ts#L408)

#### Parameters

##### selection

`Set`\<`any`\>

##### event?

`Event`

#### Returns

`void`

#### Overrides

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`setSelection`](IgxComboBaseDirective.md#setselection)

***

### toggle()

> **toggle**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1072](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1072)

A method that opens/closes the combo.

```html
<button type="button" (click)="combo.toggle()">Toggle Combo</button>
<igx-combo #combo></igx-combo>
```

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`toggle`](IgxComboBaseDirective.md#toggle)

***

### triggerCheck()

> **triggerCheck**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.common.ts:1117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.common.ts#L1117)

Triggers change detection on the combo view

#### Returns

`void`

#### Inherited from

[`IgxComboBaseDirective`](IgxComboBaseDirective.md).[`triggerCheck`](IgxComboBaseDirective.md#triggercheck)
