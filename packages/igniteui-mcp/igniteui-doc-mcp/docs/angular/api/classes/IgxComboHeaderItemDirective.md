# Class: IgxComboHeaderItemDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.directives.ts:113](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.directives.ts#L113)

Defines the custom template that will be used when rendering header items for groups in the combo's list

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
<igx-combo>
     <ng-template igxComboHeaderItem let-item let-key="groupKey">
         <div class="custom-item--group">Group header for {{ item[key] }}</div>
     </ng-template>
 </igx-combo>
```

## Constructors

### Constructor

> **new IgxComboHeaderItemDirective**(): `IgxComboHeaderItemDirective`

#### Returns

`IgxComboHeaderItemDirective`
