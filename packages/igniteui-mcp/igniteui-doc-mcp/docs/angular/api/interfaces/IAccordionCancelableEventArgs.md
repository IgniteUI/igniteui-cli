# Interface: IAccordionCancelableEventArgs

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:20](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L20)

## Extends

- [`IExpansionPanelCancelableEventArgs`](IExpansionPanelCancelableEventArgs.md)

## Properties

### cancel

> **cancel**: `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L25)

Enables canceling the expansion/collapse operation.

#### Overrides

[`IExpansionPanelCancelableEventArgs`](IExpansionPanelCancelableEventArgs.md).[`cancel`](IExpansionPanelCancelableEventArgs.md#cancel)

***

### event

> **event**: `Event`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.common.ts:25](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/expansion-panel/src/expansion-panel/expansion-panel.common.ts#L25)

#### Inherited from

[`IExpansionPanelCancelableEventArgs`](IExpansionPanelCancelableEventArgs.md).[`event`](IExpansionPanelCancelableEventArgs.md#event)

***

### owner

> **owner**: [`IgxAccordionComponent`](../classes/IgxAccordionComponent.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:21](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L21)

Provides reference to the owner component.

#### Overrides

[`IExpansionPanelCancelableEventArgs`](IExpansionPanelCancelableEventArgs.md).[`owner`](IExpansionPanelCancelableEventArgs.md#owner)

***

### panel

> **panel**: [`IgxExpansionPanelBase`](IgxExpansionPanelBase.md)

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:23](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L23)

Provides a reference to the `IgxExpansionPanelComponent` which is currently expanding/collapsing.
