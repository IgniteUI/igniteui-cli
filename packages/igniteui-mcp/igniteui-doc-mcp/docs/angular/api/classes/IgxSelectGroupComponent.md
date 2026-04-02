# Class: IgxSelectGroupComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/select/src/select/select-group.component.ts:16](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/select/src/select/select-group.component.ts#L16)

The `<igx-select-item>` is a container intended for row items in
a `<igx-select>` container.

## Extends

- [`IgxDropDownGroupComponent`](IgxDropDownGroupComponent.md)

## Constructors

### Constructor

> **new IgxSelectGroupComponent**(): `IgxSelectGroupComponent`

#### Returns

`IgxSelectGroupComponent`

#### Inherited from

[`IgxDropDownGroupComponent`](IgxDropDownGroupComponent.md).[`constructor`](IgxDropDownGroupComponent.md#constructor)

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts:66](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts#L66)

Sets/gets if the item group is disabled

```typescript
const myDropDownGroup: IgxDropDownGroupComponent = this.dropdownGroup;
// get
...
const groupState: boolean = myDropDownGroup.disabled;
...
//set
...
myDropDownGroup,disabled = false;
...
```

```html
<igx-drop-down-item-group [label]="'My Items'" [disabled]="true">
    <igx-drop-down-item *ngFor="let item of items[index]" [value]="item.value">
        {{ item.text }}
    </igx-drop-down-item>
</igx-drop-down-item-group>
```

**NOTE:** All items inside of a disabled drop down group will be treated as disabled

#### Inherited from

[`IgxDropDownGroupComponent`](IgxDropDownGroupComponent.md).[`disabled`](IgxDropDownGroupComponent.md#disabled)

***

### label

> **label**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts:90](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts#L90)

Sets/gets the label of the item group

```typescript
const myDropDownGroup: IgxDropDownGroupComponent = this.dropdownGroup;
// get
...
const myLabel: string = myDropDownGroup.label;
...
// set
...
myDropDownGroup.label = 'My New Label';
...
```

```html
<igx-drop-down-item-group [label]="'My new Label'">
     ...
</igx-drop-down-item-group>
```

#### Inherited from

[`IgxDropDownGroupComponent`](IgxDropDownGroupComponent.md).[`label`](IgxDropDownGroupComponent.md#label)

## Accessors

### labelledBy

#### Get Signature

> **get** **labelledBy**(): `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/drop-down/src/drop-down/drop-down-group.component.ts#L25)

##### Returns

`string`

#### Inherited from

[`IgxDropDownGroupComponent`](IgxDropDownGroupComponent.md).[`labelledBy`](IgxDropDownGroupComponent.md#labelledby)
