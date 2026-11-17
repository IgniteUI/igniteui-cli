---
title: "Chip"
description: "The Ignite UI for Blazor Chip is a compact element for tags, filters, and recipients that users can select or remove, with style variants and icon slots."
keywords: "Blazor Chip, chip component, selectable chip, removable chip, tags, filters, Ignite UI for Blazor, Infragistics"
license: MIT
last_updated: "2026-10-07"
mentionedTypes: ["Chip", "Icon"]
relatedComponents: ["Button", "Checkbox", "Badge"]
llms:
  description: "The Ignite UI for Blazor Chip is a compact element that represents a tag, filter, or person and that users can select or remove."
_tocName: Chip
---
# Chip Component

The Ignite UI for Blazor Chip is a compact element that represents a tag, filter, or person and that users can select or remove.

A chip can be selectable, removable, or both, and can show icons or other content before and after its label.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS

<div class="container sample chip-overview">
    <div class="profile-card">
        <div>
            <span class="section-header" id="name-header">Name</span>
            <IgbInput class="name-input" Outlined="true" Value="Jordan Lee" aria-labelledby="name-header" />
        </div>
        <div>
            <span class="section-header" id="skills-header">Skills &middot; @SelectedSkills.Count selected</span>
            <div class="chip-group" id="chip-overview-skills" role="group" aria-labelledby="skills-header">
                @foreach (var skill in Skills)
                {
                    <IgbChip @key="skill" class="skill" Selectable="true" Selected="@SelectedSkills.Contains(skill)" Select="@(args => ToggleSkill(skill, args.Detail))">@skill</IgbChip>
                }
            </div>
        </div>
        <div>
            <span class="section-header" id="selected-header">Selected</span>
            <div class="chip-group" id="chip-overview-selected" role="group" aria-labelledby="selected-header">
                @foreach (var skill in SelectedInOrder)
                {
                    <IgbChip @key="skill" class="skill" Removable="true" Remove="@(args => RemoveSkill(skill))">@skill</IgbChip>
                }
            </div>
        </div>
        <div class="actions">
            <IgbButton>Save profile</IgbButton>
        </div>
    </div>
</div>

@code {
    private readonly string[] Skills = { "Figma", "React", "CSS", "Prototyping", "Motion Design" };
    private readonly HashSet<string> SelectedSkills = new HashSet<string> { "Prototyping", "Motion Design" };
    private (string Skill, int Index)? Removed;

    // Both groups list the selected skills in the order of the skills list.
    private IEnumerable<string> SelectedInOrder => Skills.Where(SelectedSkills.Contains);

    private void ToggleSkill(string skill, bool selected)
    {
        if (selected)
        {
            SelectedSkills.Add(skill);
        }
        else
        {
            SelectedSkills.Remove(skill);
        }
    }

    private void RemoveSkill(string skill)
    {
        Removed = (skill, SelectedInOrder.ToList().IndexOf(skill));
        SelectedSkills.Remove(skill);
    }

    // The removed chip is gone, so move focus to the next selected skill, or back to the skill itself when none is left.
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (Removed is { } removed)
        {
            Removed = null;
            await JS.InvokeVoidAsync("chipOverviewSample.focusAfterRemove", removed.Index, Array.IndexOf(Skills, removed.Skill));
        }
    }
}
```

## Anatomy

The Blazor Chip is a container that holds a label and optional icons in a single row.

**Blazor Chip anatomy anatomy:** The chip anatomy labels the container, selection icon, left icon, label, right icon, and remove icon.

<style>{`
  .chip-anatomy {
    --igd-anatomy-padding: 72px 32px;
  }

  .chip-anatomy .igd-anatomy__image {
    max-width: 282.5px;
  }

  .chip-anatomy-legend {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    margin-bottom: 24px;
  }

  .chip-anatomy-legend span {
    display: block;
  }

  @media (max-width: 768px) {
    .chip-anatomy-legend {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-anatomy-legend ig-typography__body-2">
  <div>
    <span><strong>1. Container:</strong> holds all chip elements and defines its visual boundary</span>
    <span><strong>2. Selection Icon:</strong> indicates the chip is selected</span>
    <span><strong>3. Left Icon (optional):</strong> displayed on the left side of the label</span>
  </div>
  <div>
    <span><strong>4. Label:</strong> the text that identifies or describes the chip's value</span>
    <span><strong>5. Right Icon (optional):</strong> displayed on the right side of the label</span>
    <span><strong>6. Remove Icon:</strong> cancel icon indicates when a chip can be removed</span>
  </div>
</div>

```text
igc-chip                              // host
└─ div[part="base"]                   // chip wrapper
   ├─ button[part="action"]           // selection control; aria-pressed when selectable
   │  ├─ span[part="prefix"]          // hidden when empty and not selected
   │  │  ├─ slot[name="select"]       // default select icon, shown when selectable and selected
   │  │  ├─ slot[name="start"]        // content before the prefix content
   │  │  └─ slot[name="prefix"]       // content before the label
   │  ├─ span[part="content"]
   │  │  └─ slot                      // label (default slot)
   │  └─ span[part="suffix"]          // hidden when empty
   │     ├─ slot[name="end"]          // content before the suffix content
   │     └─ slot[name="suffix"]       // content after the label
   └─ span[part="remove"]             // rendered when removable and not disabled
      └─ slot[name="remove"]          // default remove icon button
```

## Getting Started

Install Ignite UI for Blazor and configure a theme, as described in the [Getting Started](../general-getting-started.md) topic, before you add the Blazor Chip to an application.

Register the Ignite UI for Blazor services:

```csharp
// in Program.cs file

builder.Services.AddIgniteUIBlazor();
```

Registering [`IgbChipModule`](mcp:get_api_reference?platform=blazor&component=IgbChipModule), the client resource module of the [`IgbChip`](mcp:get_api_reference?platform=blazor&component=IgbChip), is **optional**: the component loads its resources when it first renders. Listing it in `builder.Services.AddIgniteUIBlazor(typeof(IgbChipModule))` can be used to preload resources or to support elements created only on the client (see [Component Modules](../general-getting-started.md#component-modules)).

Add the theme stylesheet to your host page.

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

### Prerequisites and Version Compatibility

Some Blazor Chip features depend on the package version that your application uses.

Use the `IgniteUI.Blazor` package. `IgniteUI.Blazor` 26.1 ships an earlier version of the chip:

- `IgbChip` doesn't expose the `Outlined`, `Locale`, or `ResourceStrings` properties.
- The `base` part is the selection button, and the remove icon renders inside it. The chip has no `action` or `remove` parts.
- The focus styles read `--ig-chip-focus-outline-color` and `--ig-chip-focus-selected-outline-color`.
- The keyboard and screen reader behavior differs, as described in [Accessibility](#accessibility).

## Usage

Add a label to the Blazor Chip, then add icons, a type, a size, and selection or removal as your layout needs.

### Layout

The Blazor Chip supports content templating around its label. Place content in the `prefix` and `suffix` slots to show it before and after the label, such as text or an [Icon](../layouts/icon.md). Icons in the chip follow its size, so they also come in three sizes: large, medium, and small.

```razor
@using IgniteUI.Blazor.Controls

@* The chips only show their look, so inert keeps them out of the tab order and ignores pointer input. *@
<div class="container sample chip-layout" inert>
    <div class="chip-layout-item">
        <span>Text</span>
        <IgbChip>Chip</IgbChip>
    </div>
    <div class="chip-layout-item">
        <span>Prefix</span>
        <IgbChip>
            <IgbIcon @ref="IconRef" slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
        </IgbChip>
    </div>
    <div class="chip-layout-item">
        <span>Prefix+Suffix</span>
        <IgbChip>
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
            <IgbIcon slot="suffix" IconName="account_circle" Collection="material" />
        </IgbChip>
    </div>
    <div class="chip-layout-item">
        <span>Suffix</span>
        <IgbChip>
            Chip
            <IgbIcon slot="suffix" IconName="account_circle" Collection="material" />
        </IgbChip>
    </div>
</div>

@code {
    private IgbIcon IconRef { get; set; }

    private const string ArrowUpwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z'/></svg>";
    private const string AccountCircleIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("arrow_upward", ArrowUpwardIcon, "material");
            await IconRef.RegisterIconFromTextAsync("account_circle", AccountCircleIcon, "material");
        }
    }
}
```

Place the label in the default slot. The `start` slot renders before the prefix content, and the `end` slot renders before the suffix content. Use the `select` and `remove` slots to replace the default select and remove icons.

```razor
<IgbChip Selectable="true" Removable="true">
    <IgbIcon slot="select" IconName="check" Collection="material" />
    <IgbIcon slot="prefix" IconName="person" Collection="material" />
    Ana Zane
    <IgbIcon slot="suffix" IconName="mail" Collection="material" />
    <IgbIcon slot="remove" IconName="close" Collection="material" />
</IgbChip>
```

Custom content in the `remove` slot replaces the default remove icon, including its focus and accessible label. Make the replacement focusable and give it an accessible name.

### Types

The Blazor Chip provides two types: Default and Primary.

```razor
@using IgniteUI.Blazor.Controls

@* The chips only show their look, so inert keeps them out of the tab order and ignores pointer input. *@
<div class="container sample chip-types" inert>
    <div class="chip-types-item">
        <span>Default</span>
        <IgbChip Removable="true">Chip</IgbChip>
    </div>
    <div class="chip-types-item">
        <span>Primary</span>
        <IgbChip Removable="true" Variant="StyleVariant.Primary">Chip</IgbChip>
    </div>
</div>

@code {
}
```

Leave [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=variant) unset for the default type, or set it to `StyleVariant.Primary` for the primary type. The variant also accepts `StyleVariant.Info`, `StyleVariant.Success`, `StyleVariant.Warning`, and `StyleVariant.Danger` for status colors.

```razor
<IgbChip>Default</IgbChip>
<IgbChip Variant="StyleVariant.Primary">Primary</IgbChip>
```

### Size

The Blazor Chip comes in three sizes:

- Large: suitable for interactive scenarios, such as action triggers.
- Medium: suitable for short areas, such as the recipient field of an email composer.
- Small: suitable for data-dense scenarios, such as the values in a grid cell.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample chip-size">
    <div class="chip-size-item">
        <span>Small</span>
        <IgbChip class="size-small" Selectable="true" Selected="true" Removable="true">
            <IgbIcon @ref="IconRef" slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
            <IgbIcon slot="suffix" IconName="account_circle" Collection="material" />
        </IgbChip>
    </div>
    <div class="chip-size-item">
        <span>Medium</span>
        <IgbChip class="size-medium" Selectable="true" Selected="true" Removable="true">
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
            <IgbIcon slot="suffix" IconName="account_circle" Collection="material" />
        </IgbChip>
    </div>
    <div class="chip-size-item">
        <span>Large</span>
        <IgbChip class="size-large" Selectable="true" Selected="true" Removable="true">
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
            <IgbIcon slot="suffix" IconName="account_circle" Collection="material" />
        </IgbChip>
    </div>
</div>

@code {
    private IgbIcon IconRef { get; set; }

    private const string ArrowUpwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z'/></svg>";
    private const string AccountCircleIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("arrow_upward", ArrowUpwardIcon, "material");
            await IconRef.RegisterIconFromTextAsync("account_circle", AccountCircleIcon, "material");
        }
    }
}
```

Set `--ig-size` to `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)` to change the chip size. Set it on a chip, or on a container to size all chips inside it.

```css
.filter-chips {
  --ig-size: var(--ig-size-small);
}
```

### Interaction State

The Blazor Chip can be enabled or disabled.

```razor
@using IgniteUI.Blazor.Controls

@* The chips only show their look, so inert keeps them out of the tab order and ignores pointer input. *@
<div class="container sample chip-states" inert>
    <div class="chip-states-item">
        <span>Enabled</span>
        <IgbChip Removable="true">Chip</IgbChip>
    </div>
    <div class="chip-states-item">
        <span>Disabled</span>
        <IgbChip Removable="true" Disabled="true">Chip</IgbChip>
    </div>
</div>

@code {
}
```

Set [`Disabled`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=disabled) to prevent interaction. A disabled chip can't receive focus or be selected, and it doesn't render the remove icon, even when `removable` is set.

```razor
<IgbChip Disabled="true">Archived</IgbChip>
```

### State

When users interact with the Blazor Chip, it changes from its default idle state to hover, focused, and selected.

```razor
@using IgniteUI.Blazor.Controls

@* The chips only show their look, so inert keeps them out of the tab order and ignores pointer input. *@
<div class="container sample chip-state" inert>
    <div class="chip-state-item">
        <span>Idle</span>
        <IgbChip Removable="true">
            <IgbIcon @ref="IconRef" slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
        </IgbChip>
    </div>
    <div class="chip-state-item">
        <span>Hover</span>
        <IgbChip class="state-hover" Removable="true">
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
        </IgbChip>
    </div>
    <div class="chip-state-item">
        <span>Focused</span>
        <IgbChip class="state-focused" Removable="true">
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
        </IgbChip>
    </div>
    <div class="chip-state-item">
        <span>Selected</span>
        <IgbChip Removable="true" Selectable="true" Selected="true">
            <IgbIcon slot="prefix" IconName="arrow_upward" Collection="material" />
            Chip
        </IgbChip>
    </div>
</div>

@code {
    private IgbIcon IconRef { get; set; }

    private const string ArrowUpwardIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("arrow_upward", ArrowUpwardIcon, "material");
        }
    }
}
```

The selected state needs selection to be enabled. Set [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=selectable) to let users toggle the chip by clicking it or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>. Each toggle updates [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=selected) and emits a selection event with the new state. Set `selected` to define the initial state.

The select icon and the pressed state appear only when `selectable` is set.

```razor
<IgbChip Selectable="true" Selected="@isBold" SelectedChanged="OnSelectedChanged">Bold</IgbChip>

@code {
    private bool isBold = true;

    private void OnSelectedChanged(bool selected) => isBold = selected;
}
```

### Remove Chip

A removable Blazor Chip shows a remove icon at its end that users activate to request the chip's removal.

```razor
@using IgniteUI.Blazor.Controls
@inject IJSRuntime JS

<div class="container sample chip-remove">
    <div class="chip-remove-slot">
        @if (IsVisible)
        {
            <IgbChip id="chip-remove-chip" Removable="true" Remove="@(args => ToggleChip(false))">Chip</IgbChip>
        }
        else
        {
            <IgbButton id="chip-remove-restore" class="restore-button" Variant="ButtonVariant.Flat" @onclick="@(() => ToggleChip(true))">Restore chip</IgbButton>
        }
    </div>
</div>

@code {
    private bool IsVisible = true;
    private bool HasToggled;

    private void ToggleChip(bool visible)
    {
        HasToggled = true;
        IsVisible = visible;
    }

    // The control the user activated is gone, so move focus to the one that replaced it.
    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (HasToggled)
        {
            HasToggled = false;
            await JS.InvokeVoidAsync("chipRemoveSample.focus", IsVisible ? "chip-remove-chip" : "chip-remove-restore");
        }
    }
}
```

Set [`Removable`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=removable) to show the icon. Activating the icon emits a remove event, but the chip stays on the page. Remove the chip, or the item it represents, in the event handler.

```razor
@foreach (var tag in Tags)
{
    <IgbChip @key="tag" Removable="true" Remove="@(() => Tags.Remove(tag))">@tag</IgbChip>
}

@code {
    private readonly List<string> Tags = new() { "Angular", "React", "Blazor" };
}
```

### Chips Area

To organize a collection of chips, place them in a container that lays them out with a gap, such as a wrapping flex container.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample chips-area-sample">
    <div class="chips-area">
        @foreach (var label in Chips)
        {
            <IgbChip>@label</IgbChip>
        }
    </div>
</div>

@code {
    private readonly string[] Chips = { "Chip", "Chip", "Chip" };
}
```

The Blazor Chip has no separate chips area component, so the container's CSS sets the layout.

```css
.chips-area {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

### Do/Don't

When using a Chip, the obround will automatically size itself to fit the content and you only need to adjust the size of the instance accordingly. If the Chip is used as an action trigger for related content, avoid using it in scenarios where there is only one available action, or for configurations presenting only one selectable option.

<style>{`
  .chip-guidance {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-bottom: 24px;
  }

  .chip-guidance span {
    display: block;
  }

  .chip-guidance__image {
    display: block;
    width: 100%;
    height: auto;
    margin: 0 0 24px;
    border: 1px solid #D2DBE8;
  }

  .chip-guidance__label {
    margin-bottom: 12px;
    font-weight: 600;
  }

  .chip-guidance__label--do {
    color: light-dark(var(--ig-success-900), var(--ig-success-100));
  }

  .chip-guidance__label--dont {
    color: light-dark(var(--ig-error-700), var(--ig-error-300));
  }

  @media (max-width: 768px) {
    .chip-guidance {
      grid-template-columns: 1fr;
    }
  }
`}</style>

<div class="chip-guidance ig-typography__body-2">
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--do">Do</span>
    <span>Use chips for grouped actions or a small set of related options.</span>
  </div>
  <div>
    
    <span class="chip-guidance__label chip-guidance__label--dont">Don't</span>
    <span>Avoid using a chip for single actions or single choices.</span>
  </div>
</div>

## Properties

The Blazor Chip exposes properties for selection, removal, state, and appearance.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`Disabled`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=disabled) | `bool` | `false` | Disables the chip and hides the remove icon. |
| [`Removable`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=removable) | `bool` | `false` | Shows the remove icon. |
| [`Selectable`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=selectable) | `bool` | `false` | Lets users toggle the selected state. |
| [`Selected`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=selected) | `bool` | `false` | Sets the selected state. |
| [`Variant`](mcp:get_api_reference?platform=blazor&component=IgbChip&member=variant) | `StyleVariant` | n/a | Sets the predefined color variant. |

## Events

The Blazor Chip emits events when users select or remove it.

| Name | Description |
| -- | -- |
| `SelectedChanged` | Raised with the new selected state when the user toggles a selectable chip. |
| `Select` | Raised when the user toggles a selectable chip. Use `SelectScript` to handle it in JavaScript. |
| `Remove` | Raised when the user activates the remove icon. Use `RemoveScript` to handle it in JavaScript. |

## Styling

Style the Blazor Chip with its CSS variables for token-level changes, and with its CSS parts when you need to target a specific element.

```razor
@using IgniteUI.Blazor.Controls

<div class="container sample chip-styling">
    <IgbChip class="tag-chip" Removable="true">
        Prototyping
    </IgbChip>
    <IgbChip class="filter-chip" Selectable="true" Selected="true">
        Motion Design
    </IgbChip>
    <IgbChip class="product-chip">
        Sony Headphones
        <IgbIcon @ref="IconRef" slot="suffix" IconName="star_half" Collection="material" />
    </IgbChip>
    <IgbChip class="contact-chip">
        <IgbIcon slot="prefix" IconName="people" Collection="material" />
        Simon and Lisa
    </IgbChip>
</div>

@code {
    private IgbIcon IconRef { get; set; }

    // The outline takes the chip text color, and the filled half keeps the warning color.
    private const string HalfStarIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.01 4.38.38-3.32 2.88 1 4.28L12 15.4z'/><path style='fill: var(--ig-warn-400)' d='M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z'/></svg>";
    private const string PeopleIcon = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/></svg>";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && IconRef != null)
        {
            await IconRef.EnsureReady();
            await IconRef.RegisterIconFromTextAsync("star_half", HalfStarIcon, "material");
            await IconRef.RegisterIconFromTextAsync("people", PeopleIcon, "material");
        }
    }
}
```

| Variable | What it changes |
| -- | -- |
| `--ig-chip-background` | Background of the default (not outlined) chip. |
| `--ig-chip-text-color` | Text color of the default chip. |
| `--ig-chip-outlined-background` | Background of the outlined chip. |
| `--ig-chip-outlined-text-color` | Text color of the outlined chip. |
| `--ig-chip-border-color` | Border color of the outlined chip. |
| `--ig-chip-border-radius` | Corner radius of the chip. |
| `--ig-chip-hover-background` | Background of the default chip on hover. |
| `--ig-chip-focus-background` | Background of the default chip on focus. |
| `--ig-chip-focus-shadow-color` | Focus shadow color in the Bootstrap and Indigo themes. |
| `--ig-chip-selected-background` | Background of a selected chip. |
| `--ig-chip-selected-text-color` | Text color of a selected chip. |
| `--ig-chip-disabled-background` | Background of a disabled chip. |
| `--ig-chip-disabled-text-color` | Text color of a disabled chip. |
| `--ig-chip-remove-icon-color` | Color of the remove icon. |
| `--ig-chip-remove-icon-color-focus` | Color of the remove icon on focus. |
| `--ig-chip-size` | Height of the chip. |
| `--ig-size` | Shared component size token used to derive the chip size. |

In `IgniteUI.Blazor` 26.1, the chip has no outlined style, so `--ig-chip-outlined-background` and `--ig-chip-outlined-text-color` have no effect. The chip reads `--ig-chip-focus-outline-color` and `--ig-chip-focus-selected-outline-color` instead of `--ig-chip-focus-shadow-color`.

| CSS Part | Description |
| -- | -- |
| `base` | The selection button that wraps the prefix, content, and suffix. |
| `prefix` | The container for the select icon and the `start` and `prefix` content. |
| `content` | The wrapper around the default slot. |
| `suffix` | The container for the `end` and `suffix` content, and for the remove icon. |

### Sass Theming

Use the `chip-theme` function when your application customizes Ignite UI themes through Sass. Set `$background`, or `$outlined-background` for outlined chips, and the theme derives the text, hover, focus, and selected colors from it. Override any other parameter when you need a specific value.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-chip-theme: chip-theme(
  $background: #011627,
  $remove-icon-color: #fecc47
);

:root {
  @include tokens($custom-chip-theme);
}
```

### CSS Variables

Set the chip CSS variables directly when you need local styling without a Sass build step. Set them on a chip, or on a container to style all chips inside it.

```css
.filter-chips {
  --ig-chip-background: var(--ig-primary-500);
  --ig-chip-text-color: var(--ig-primary-500-contrast);
  --ig-chip-remove-icon-color: var(--ig-primary-500-contrast);
}
```

To style a single element of the chip, target its CSS part.

```css
igc-chip::part(suffix) {
  color: var(--ig-gray-400);
}
```

### Styling with Tailwind

You can style the Blazor Chip with Tailwind utility classes, and set its CSS variables through arbitrary properties such as `[--ig-chip-background:var(--ig-primary-600)]`. Make sure to set up Tailwind first, as described in [Tailwind](../themes/tailwind.md).

```css
/* shared styles are loaded from: */
/* https://dl.infragistics.com/x/css/samples/shared.v8.css */

@import url("https://use.typekit.net/bng2zgw.css");

@tailwind utilities;

:root {
    /* The design's own palette. It lives here instead of coming from the theme
       palette, so the sample keeps its colors in every theme. */
    --color-activity-primary: #006ae6;
    --color-activity-primary-strong: #0055b8;
    --color-activity-tint: #e6f2ff;
    --color-activity-tint-strong: #cce4ff;
    --color-activity-surface: #e5ebf3;
    --color-activity-ink: #00142b;
}
```

## Accessibility

The Blazor Chip supports keyboard operation and exposes its state to assistive technology.

### Keyboard Interaction

Keyboard users reach each chip with <kbd>Tab</kbd>, followed by its remove control when the chip is removable. Disabled chips are skipped.

| Key | Action |
| -- | -- |
| <kbd>Space</kbd> / <kbd>Enter</kbd> | On a removable chip, toggles `Selected` when `Selectable` is set and raises the select event. On the remove icon, raises the remove event. |

In `IgniteUI.Blazor` 26.1, on a chip that isn't removable, <kbd>Space</kbd> doesn't toggle the selection, and <kbd>Enter</kbd> toggles it and also raises the remove event.

### Screen Readers / ARIA

The Blazor Chip exposes its state through native semantics and ARIA attributes.

- The chip is a native `button`. When `Selectable` is set, `aria-pressed` reflects the `Selected` state.
- The default select icon has the `aria-label` "select chip".
- The default remove icon, with `role="button"`, `tabindex="0"`, and the `aria-label` "remove chip", renders inside the chip's button, so it's a nested control.
- Because the icons render inside the button, the accessible name of the chip includes their labels, for example "Chip remove chip".
- A disabled chip disables its native button, so assistive technology reports the chip as unavailable.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color) | A selectable chip shows the select icon while it is selected, in addition to its selected colors. |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | On a removable chip, the chip and its remove icon both work with <kbd>Space</kbd> and <kbd>Enter</kbd>. On a chip that isn't removable, only <kbd>Enter</kbd> toggles the selection, as described in [Keyboard Interaction](#keyboard-interaction). |
| [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap) | <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> move focus out of the chip, which never holds focus. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves from the chip to the remove icon in document order. |
| [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible) | The focused chip shows a focus background, plus a focus outline in the Bootstrap and Indigo themes. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The chip is a native button that exposes its pressed state. The remove icon exposes a button role and a label, but it renders inside the chip's button, so the two aren't separate controls. |

Your responsibilities:

- Give every chip a text label that identifies the item it represents.
- Move focus to a logical place, such as the next chip, after you remove a chip in the remove event handler.
- Keep sufficient contrast between the chip background and its text and icons when you override the theme colors.
- Keep a visible focus indicator when you restyle the chip.
- Keep chips and their remove controls large enough to tap when you use the small size or a custom `--ig-chip-size`.

- Keep custom `remove` slot content focusable and labeled, as described in [Layout](#layout).

Known exceptions:

- In releases based on `igniteui-webcomponents` 7.4.1 and earlier, an `aria-label` set on the chip element doesn't reach the selection button, so it doesn't change the chip's accessible name. Name the chip through its content instead.

## Troubleshooting

Use this section when a chip doesn't behave or look as expected after a change or an upgrade.

### Why does the chip stay on the page after I click the remove icon?

The remove event only notifies your application. Remove the chip in the event handler, as shown in [Remove Chip](#remove-chip).

## API References

Use these API references for the complete chip API surface.

[`IgbChip`](mcp:get_api_reference?platform=blazor&component=IgbChip)
[`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon)

## Dependencies

The Blazor Chip renders its default select and remove icons with the [`IgbIcon`](mcp:get_api_reference?platform=blazor&component=IgbIcon) component, which is included with the chip.

Register any custom icons that you place in the chip slots.

The chip also uses the shared theme stylesheet for its default appearance.

## Additional Resources

Use these resources for support and related Ignite UI for Blazor documentation.

- [Icon](../layouts/icon.md)
- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

Use these related components when a chip isn't the best match for the interaction.

- [Button](./button.md) - A control that runs a command, such as submitting a form or opening a dialog.
- [Checkbox](./checkbox.md) - A form control for an on/off choice or a set of independent choices.
- [Badge](./badge.md) - A small, non-interactive indicator for a status, count, or notification.

## FAQ

  **Q: When should I use a Chip instead of a Button?**

    A Ignite UI for Blazor Chip represents an item, such as a tag, filter, or recipient, that users can select or remove. A Button runs a single command, so choose it when users trigger an action rather than pick or dismiss an item.
  

  **Q: How do I allow only one selected chip at a time?**

    Handle the selection event of each Ignite UI for Blazor Chip in the group. When a chip becomes selected, set `selected` to `false` on the other chips.
  

  **Q: Can I replace the Chip's remove icon?**

    Yes. Put your own content in the `remove` slot of the Ignite UI for Blazor Chip, and keep that content focusable and labeled, because it replaces the built-in control.
  

  **Q: Can users reorder chips?**

    Not directly. The Ignite UI for Blazor Chip has no drag or reorder support, so change the order of the chips in your data or markup.
  

  **Q: How do I change the size of the Chip?**

    Assign one of the shared size tokens, `var(--ig-size-small)`, `var(--ig-size-medium)`, or `var(--ig-size-large)`, to the `--ig-size` CSS variable of the Ignite UI for Blazor Chip.
  

