# Class: IgxComboAddItemDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.directives.ts:138](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.directives.ts#L138)

Defines the custom template that will be used to display the `ADD` button

## Remarks

To show the `ADD` button, the `allowCustomValues` option must be enabled

## Igx Module

IgxComboModule

## Igx Theme

igx-combo-theme

## Igx Keywords

combobox, combo selection

## Igx Group

Grids & Lists

## Example

```ts
<igx-combo #combo>
     <ng-template igxComboAddItem>
         <button type="button" class="combo__add-button">
             Click to add item
         </button>
     </ng-template>
 </igx-combo>
```

## Constructors

### Constructor

> **new IgxComboAddItemDirective**(): `IgxComboAddItemDirective`

#### Returns

`IgxComboAddItemDirective`
