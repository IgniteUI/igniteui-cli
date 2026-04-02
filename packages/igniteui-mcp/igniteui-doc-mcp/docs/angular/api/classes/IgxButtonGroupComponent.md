# Class: IgxButtonGroupComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:46](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L46)

**Ignite UI for Angular Button Group** -
[Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/buttongroup.html)

The Ignite UI Button Group displays a group of buttons either vertically or horizontally. The group supports
single, multi and singleRequired selection.

Example:
```html
<igx-buttongroup selectionMode="multi" [values]="fontOptions">
</igx-buttongroup>
```
The `fontOptions` value shown above is defined as:
```typescript
this.fontOptions = [
  { icon: 'format_bold', selected: false },
  { icon: 'format_italic', selected: false },
  { icon: 'format_underlined', selected: false }];
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxButtonGroupComponent**(): `IgxButtonGroupComponent`

#### Returns

`IgxButtonGroupComponent`

## Properties

### buttonClickNotifier$

> `protected` **buttonClickNotifier$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:286](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L286)

***

### deselected

> **deselected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:257](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L257)

An

#### Ouput

property that emits an event when a button is deselected.
```typescript
 @ViewChild("toast")
 private toast: IgxToastComponent;
 public deselectedHandler(buttongroup){
    this.toast.open()
}
 //...
```
```html
<igx-buttongroup> #MyChild [selectionMode]="'multi'" (deselected)="deselectedHandler($event)"></igx-buttongroup>
<igx-toast #toast>You have deselected a button!</igx-toast>
```

***

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L66)

Gets/Sets the value of the `id` attribute. If not set it will be automatically generated.
```html
 <igx-buttongroup [id]="'igx-dialog-56'" [selectionMode]="'multi'" [values]="alignOptions">
```

***

### queryListNotifier$

> `protected` **queryListNotifier$**: `Subject`\<`void`\>

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:287](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L287)

***

### selected

> **selected**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:239](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L239)

An

#### Ouput

property that emits an event when a button is selected.
```typescript
@ViewChild("toast")
private toast: IgxToastComponent;
public selectedHandler(buttongroup) {
    this.toast.open()
}
 //...
```
```html
<igx-buttongroup #MyChild [selectionMode]="'multi'" (selected)="selectedHandler($event)"></igx-buttongroup>
<igx-toast #toast>You have made a selection!</igx-toast>
```

***

### values

> **values**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:172](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L172)

Property that configures the buttons in the button group using a collection of `Button` objects.
```typescript
 public ngOnInit() {
     this.cities = [
       new Button({
         label: "Sofia"
     }),
       new Button({
         label: "London"
     }),
       new Button({
         label: "New York",
         selected: true
     }),
       new Button({
         label: "Tokyo"
     })
 ];
 }
 //..
```
```html
 <igx-buttongroup [selectionMode]="'single'" [values]="cities"></igx-buttongroup>
```

## Accessors

### alignment

#### Get Signature

> **get** **alignment**(): [`ButtonGroupAlignment`](../type-aliases/ButtonGroupAlignment.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:219](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L219)

Returns the alignment of the `igx-buttongroup`.
```typescript
@ViewChild("MyChild")
public buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   let buttonAlignment = this.buttonG.alignment;
}
```

##### Returns

[`ButtonGroupAlignment`](../type-aliases/ButtonGroupAlignment.md)

#### Set Signature

> **set** **alignment**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:206](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L206)

Allows you to set the button group alignment.
Available options are `ButtonGroupAlignment.horizontal` (default) and `ButtonGroupAlignment.vertical`.
```typescript
public alignment = ButtonGroupAlignment.vertical;
//..
```
```html
<igx-buttongroup [selectionMode]="'single'" [values]="cities" [alignment]="alignment"></igx-buttongroup>
```

##### Parameters

###### value

[`ButtonGroupAlignment`](../type-aliases/ButtonGroupAlignment.md)

##### Returns

`void`

***

### buttons

#### Get Signature

> **get** **buttons**(): [`IgxButtonDirective`](IgxButtonDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:54](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L54)

A collection containing all buttons inside the button group.

##### Returns

[`IgxButtonDirective`](IgxButtonDirective.md)[]

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:181](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L181)

Disables the `igx-buttongroup` component. By default it's false.
```html
<igx-buttongroup [disabled]="true" [selectionMode]="'multi'" [values]="fontOptions"></igx-buttongroup>
```

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:184](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L184)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isVertical

#### Get Signature

> **get** **isVertical**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:277](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L277)

Returns true if the `igx-buttongroup` alignment is vertical.
Note that in order for the accessor to work correctly the property should be set explicitly.
```html
<igx-buttongroup #MyChild [alignment]="alignment" [values]="alignOptions">
```
```typescript
//...
@ViewChild("MyChild")
private buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   let orientation = this.buttonG.isVertical;
}
```

##### Returns

`boolean`

***

### itemContentCssClass

#### Get Signature

> **get** **itemContentCssClass**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L100)

Returns the CSS class of the item content of the `IgxButtonGroup`.
```typescript
 @ViewChild("MyChild")
public buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   let buttonSelect = this.buttonG.itemContentCssClass;
}
```

##### Returns

`string`

#### Set Signature

> **set** **itemContentCssClass**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:86](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L86)

Allows you to set a style using the `itemContentCssClass` input.
The value should be the CSS class name that will be applied to the button group.
```typescript
public style1 = "styleClass";
 //..
```
 ```html
<igx-buttongroup [itemContentCssClass]="style1" [selectionMode]="'multi'" [values]="alignOptions">
```

##### Parameters

###### value

`string`

##### Returns

`void`

***

### multiSelection

#### Get Signature

> **get** **multiSelection**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:110](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L110)

Enables selecting multiple buttons. By default, multi-selection is false.

##### Deprecated

in version 16.1.0. Use the `selectionMode` property instead.

##### Returns

`boolean`

#### Set Signature

> **set** **multiSelection**(`selectionMode`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:117](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L117)

##### Parameters

###### selectionMode

`boolean`

##### Returns

`void`

***

### selectedButtons

#### Get Signature

> **get** **selectedButtons**(): [`IgxButtonDirective`](IgxButtonDirective.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:311](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L311)

Gets the selected button/buttons.
```typescript
@ViewChild("MyChild")
private buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   let selectedButton = this.buttonG.selectedButtons;
}
```

##### Returns

[`IgxButtonDirective`](IgxButtonDirective.md)[]

***

### selectionMode

#### Get Signature

> **get** **selectionMode**(): `"single"` \| `"singleRequired"` \| `"multi"`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:132](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L132)

Gets/Sets the selection mode to 'single', 'singleRequired' or 'multi' of the buttons. By default, the selection mode is 'single'.
```html
<igx-buttongroup [selectionMode]="'multi'" [alignment]="alignment"></igx-buttongroup>
```

##### Returns

`"single"` \| `"singleRequired"` \| `"multi"`

#### Set Signature

> **set** **selectionMode**(`selectionMode`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:135](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L135)

##### Parameters

###### selectionMode

`"single"` \| `"singleRequired"` \| `"multi"`

##### Returns

`void`

## Methods

### deselectButton()

> **deselectButton**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:396](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L396)

Deselects a button by its index.
```typescript
@ViewChild("MyChild")
private buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   this.buttonG.deselectButton(2);
   this.cdr.detectChanges();
}
```

#### Parameters

##### index

`number`

#### Returns

`void`

#### Member Of

IgxButtonGroupComponent

***

### selectButton()

> **selectButton**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:328](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L328)

Selects a button by its index.
```typescript
@ViewChild("MyChild")
private buttonG: IgxButtonGroupComponent;
ngAfterViewInit(){
   this.buttonG.selectButton(2);
   this.cdr.detectChanges();
}
```

#### Parameters

##### index

`number`

#### Returns

`void`

#### Member Of

IgxButtonGroupComponent

***

### updateDeselected()

> **updateDeselected**(`index`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts:368](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/button-group/src/button-group/button-group.component.ts#L368)

#### Parameters

##### index

`number`

#### Returns

`void`
