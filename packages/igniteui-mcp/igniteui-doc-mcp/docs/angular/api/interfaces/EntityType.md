# Interface: EntityType

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:381](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L381)

Describes an entity in the QueryBuilder.
An entity represents a logical grouping of fields and can have nested child entities.

## Properties

### childEntities?

> `optional` **childEntities?**: `EntityType`[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:397](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L397)

Optional child entities.
This allows building hierarchical or nested query structures.

***

### fields

> **fields**: [`FieldType`](FieldType.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:391](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L391)

The list of fields that belong to this entity.

***

### name

> **name**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/core/src/data-operations/grid-types.ts:386](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/core/src/data-operations/grid-types.ts#L386)

The name of the entity.
Typically used as an identifier in expressions.
