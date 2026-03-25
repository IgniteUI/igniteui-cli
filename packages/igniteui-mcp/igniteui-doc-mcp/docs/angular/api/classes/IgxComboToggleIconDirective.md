# Class: IgxComboToggleIconDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.directives.ts:159](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.directives.ts#L159)

The custom template that will be used when rendering the combo's toggle button

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
     <ng-template igxComboToggleIcon let-collapsed>
         <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
     </ng-template>
 </igx-combo>
```

## Constructors

### Constructor

> **new IgxComboToggleIconDirective**(): `IgxComboToggleIconDirective`

#### Returns

`IgxComboToggleIconDirective`
