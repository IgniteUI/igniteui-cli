# Class: IgxDateRangeSeparatorDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker-inputs.common.ts:189](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/date-picker/src/date-range-picker/date-range-picker-inputs.common.ts#L189)

Replaces the default separator `to` with the provided value

## Igx Module

IgxDateRangePickerModule

## Igx Theme

igx-date-range-picker-theme

## Igx Keywords

date, range, date range, date picker

## Igx Group

scheduling

## Example

```html
<igx-date-range-picker>
     <igx-date-range-start>
         <input igxInput igxDateTimeEditor type="text">
     </igx-date-range-start>

     <ng-template igxDateRangeSeparator>-</ng-template>

     <igx-date-range-end>
         <input igxInput igxDateTimeEditor type="text">
     </igx-date-range-end>
     ...
</igx-date-range-picker>
```

## Constructors

### Constructor

> **new IgxDateRangeSeparatorDirective**(): `IgxDateRangeSeparatorDirective`

#### Returns

`IgxDateRangeSeparatorDirective`
