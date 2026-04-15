# Class: IgxComboItemDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/combo/src/combo/combo.directives.ts:69](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/combo/src/combo/combo.directives.ts#L69)

Allows the combo's items to be modified with a custom template

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
	<ng-template igxComboItem let-display let-key="valueKey">
		<div class="item">
			<span class="state">State: {{ display[key] }}</span>
	 		<span class="region">Region: {{ display.region }}</span>
	 	</div>
	 </ng-template>
 * </igx-combo>
```

## Constructors

### Constructor

> **new IgxComboItemDirective**(): `IgxComboItemDirective`

#### Returns

`IgxComboItemDirective`
