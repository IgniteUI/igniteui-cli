# Class: IgxQueryBuilderSearchValueTemplateDirective

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts:22](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts#L22)

Defines the custom template that will be used for the search value input of condition in edit mode

## Igx Module

IgxQueryBuilderModule

## Igx Keywords

query builder, query builder search value

## Igx Group

Data entry and display

## Example

```ts
<igx-query-builder>
     <ng-template igxQueryBuilderSearchValue let-expression="expression">
         <input type="text" required [(ngModel)]="expression.searchVal"/>
     </ng-template>
 </igx-query-builder>
```

## Constructors

### Constructor

> **new IgxQueryBuilderSearchValueTemplateDirective**(): `IgxQueryBuilderSearchValueTemplateDirective`

#### Returns

`IgxQueryBuilderSearchValueTemplateDirective`

## Properties

### template

> **template**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts#L23)

## Methods

### ngTemplateContextGuard()

> `static` **ngTemplateContextGuard**(`_directive`, `context`): `context is IgxQueryBuilderSearchValueContext`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/query-builder/src/query-builder/query-builder.directives.ts#L25)

#### Parameters

##### \_directive

`IgxQueryBuilderSearchValueTemplateDirective`

##### context

`unknown`

#### Returns

`context is IgxQueryBuilderSearchValueContext`
