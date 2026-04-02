# Class: IgxAccordionComponent

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:58](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L58)

IgxAccordion is a container-based component that contains that can house multiple expansion panels.

## Igx Module

IgxAccordionModule

## Igx Keywords

accordion

## Igx Group

Layouts

## Remarks

The Ignite UI for Angular Accordion component enables the user to navigate among multiple collapsing panels
displayed in a single container.
The accordion offers keyboard navigation and API to control the underlying panels' expansion state.

## Example

```html
<igx-accordion>
  <igx-expansion-panel *ngFor="let panel of panels">
      ...
  </igx-expansion-panel>
</igx-accordion>
```

## Implements

- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)
- [`setCurrentI18n`](../variables/setCurrentI18n.md)

## Constructors

### Constructor

> **new IgxAccordionComponent**(): `IgxAccordionComponent`

#### Returns

`IgxAccordionComponent`

## Properties

### id

> **id**: `string`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:73](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L73)

Get/Set the `id` of the accordion component.
Default value is `"igx-accordion-0"`;
```html
<igx-accordion id="my-first-accordion"></igx-accordion>
```
```typescript
const accordionId = this.accordion.id;
```

***

### panelCollapsed

> **panelCollapsed**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:199](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L199)

Emitted after a panel has been collapsed.

```html
<igx-accordion (panelCollapsed)="handlePanelCollapsed($event)">
</igx-accordion>
```

***

### panelCollapsing

> **panelCollapsing**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:188](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L188)

Emitted before a panel is collapsed.

#### Remarks

This event is cancelable.

```html
<igx-accordion (panelCollapsing)="handlePanelCollapsing($event)">
</igx-accordion>
```

***

### panelExpanded

> **panelExpanded**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:174](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L174)

Emitted after a panel has been expanded.

```html
<igx-accordion (panelExpanded)="handlePanelExpanded($event)">
</igx-accordion>
```

```typescript
public handlePanelExpanded(event: IExpansionPanelCancelableEventArgs) {
 const expandedPanel: IgxExpansionPanelComponent = event.panel;
 console.log("Panel is expanded: ", expandedPanel.id);
}
```

***

### panelExpanding

> **panelExpanding**: `any`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:156](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L156)

Emitted before a panel is expanded.

#### Remarks

This event is cancelable.

```html
<igx-accordion (panelExpanding)="handlePanelExpanding($event)">
</igx-accordion>
```

```typescript
public handlePanelExpanding(event: IExpansionPanelCancelableEventArgs){
 const expandedPanel: IgxExpansionPanelComponent = event.panel;
 if (expandedPanel.disabled) {
     event.cancel = true;
 }
}
```

## Accessors

### animationSettings

#### Get Signature

> **get** **animationSettings**(): `ToggleAnimationSettings`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:100](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L100)

Get/Set the animation settings that panels should use when expanding/collpasing.

```html
<igx-accordion [animationSettings]="customAnimationSettings"></igx-accordion>
```

```typescript
const customAnimationSettings: ToggleAnimationSettings = {
     openAnimation: growVerIn,
     closeAnimation: growVerOut
};

this.accordion.animationSettings = customAnimationSettings;
```

##### Returns

`ToggleAnimationSettings`

#### Set Signature

> **set** **animationSettings**(`value`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:104](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L104)

##### Parameters

###### value

`ToggleAnimationSettings`

##### Returns

`void`

***

### panels

#### Get Signature

> **get** **panels**(): [`IgxExpansionPanelComponent`](IgxExpansionPanelComponent.md)[]

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:208](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L208)

Get all panels.

```typescript
const panels: IgxExpansionPanelComponent[] = this.accordion.panels;
```

##### Returns

[`IgxExpansionPanelComponent`](IgxExpansionPanelComponent.md)[]

***

### singleBranchExpand

#### Get Signature

> **get** **singleBranchExpand**(): `boolean`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:124](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L124)

Get/Set how the accordion handles the expansion of the projected expansion panels.
If set to `true`, only a single panel can be expanded at a time, collapsing all others

```html
<igx-accordion [singleBranchExpand]="true">
...
</igx-accordion>
```

```typescript
this.accordion.singleBranchExpand = false;
```

##### Returns

`boolean`

#### Set Signature

> **set** **singleBranchExpand**(`val`): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:128](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L128)

##### Parameters

###### val

`boolean`

##### Returns

`void`

## Methods

### collapseAll()

> **collapseAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:274](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L274)

Collapses all expanded expansion panels.

```typescript
accordion.collapseAll();
```

#### Returns

`void`

***

### expandAll()

> **expandAll**(): `void`

Defined in: [angular/igniteui-angular/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts:255](https://github.com/IgniteUI/igniteui-angular/blob/28ea802da6e8bd841b82e336a16781159d69e779/projects/igniteui-angular/accordion/src/accordion/accordion.component.ts#L255)

Expands all collapsed expansion panels.

```typescript
accordion.expandAll();
```

#### Returns

`void`
