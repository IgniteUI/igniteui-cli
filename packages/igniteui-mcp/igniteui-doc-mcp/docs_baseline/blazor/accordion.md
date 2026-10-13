---
title: "Blazor Accordion Component | Layouts | Infragistics"
description: "Blazor Accordion is a layout component for organizing expandable and collapsible content panels in a vertical container."
keywords: "Blazor Accordion, accordion component, expandable panels, Ignite UI for Blazor, Infragistics"
license: MIT
last_updated: "2026-07-30"
mentionedTypes: ["Accordion", "ExpansionPanel"]
namespace: Infragistics.Controls
relatedComponents: ["ExpansionPanel"]
llms:
  description: "The Ignite UI for Blazor Accordion helps developers group related content into expandable and collapsible panels inside a vertical layout."
_tocName: Accordion
---
# Accordion Component

The Ignite UI for Blazor Accordion is a layout component for organizing expandable content panels in a single vertical container.

## Live Demo

```razor
@using IgniteUI.Blazor.Controls

<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <IgbSwitch Change="OnSwitchChange">
                <span>Single Expand</span>
            </IgbSwitch>
        </div>

        <IgbAccordion SingleExpand="@SingleExpand">
            <IgbExpansionPanel Open>
                <span slot="title">Account</span>
                <span slot="subtitle">Profile and security settings</span>
                <p>Update your profile details, password, and sign-in preferences.</p>
            </IgbExpansionPanel>
            <IgbExpansionPanel>
                <span slot="title">Notifications</span>
                <span slot="subtitle">Email and product updates</span>
                <p>Choose which notifications you receive and how often they are delivered.</p>
            </IgbExpansionPanel>
            <IgbExpansionPanel>
                <span slot="title">Billing</span>
                <span slot="subtitle">Payment and invoice settings</span>
                <p>Manage payment methods, billing contacts, and invoice delivery options.</p>
            </IgbExpansionPanel>
        </IgbAccordion>
    </div>
</div>

@code {
    public bool SingleExpand { get; set; }

    public void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        SingleExpand = args.Detail.Checked;
    }
}
```

## Anatomy

The accordion structure consists of an accordion container with one or more expansion panel children.

**Blazor Accordion anatomy anatomy:** The accordion anatomy labels the accordion host and child expansion panel structure.

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Header:</strong> displays the section title and description and can be clicked to reveal or hide the panel's content<br />
<strong>2. Icon:</strong> indicates if the panel is open or closed. Could be placed on the left or on the right side of the header<br />
<strong>3. Panel:</strong> the section of content linked to an accordion header</span>

<style>{`
  .accordion-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .accordion-anatomy .igd-anatomy__image {
    max-width: 640px;
  }
`}</style>

```text
igc-accordion                    // host - manages a set of expansion panels
└─ igc-expansion-panel            // child panel
   ├─ [slot="title"]              // panel header title
   ├─ [slot="subtitle"]           // optional header subtitle
   ├─ [slot="indicator"]          // custom collapsed/default indicator
   ├─ [slot="indicator-expanded"] // optional custom expanded-state indicator
   └─ default slot                // expandable panel content
```

## Getting Started

Use the accordion with the Ignite UI for Blazor version installed in your application. Complete the shared [Getting Started](../general-getting-started.md) topic before adding framework-specific imports or registration.

Register the accordion module in `Program.cs` and add the theme stylesheet to your host page.

```csharp
builder.Services.AddIgniteUIBlazor(typeof(IgbAccordionModule));
```

```razor
<link href="_content/IgniteUI.Blazor/themes/light/bootstrap.css" rel="stylesheet" />
```

## Usage

Build the accordion by placing one or more [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) components inside an [`IgbAccordion`](mcp:get_api_reference?platform=blazor&component=IgbAccordion) container.

### Single Expansion

Set [`SingleExpand`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=singleExpand) to switch between one-open-panel behavior and multiple-open-panel behavior.

```razor
<IgbAccordion SingleExpand=true>
  <IgbExpansionPanel>
    <span slot="title">Title Panel 1</span>
    <p>Content Panel 1</p>
  </IgbExpansionPanel>
  <IgbExpansionPanel>
    <span slot="title">Title Panel 2</span>
    <p>Content Panel 2</p>
  </IgbExpansionPanel>
</IgbAccordion>
```

### Programmatic Expansion

Use [`HideAll`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=hideAll) and [`ShowAll`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=showAll) to collapse or expand all available panels programmatically.

**Note:** 
Calling [`ShowAll`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=showAll) expands all panels, even when [`SingleExpand`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=singleExpand) is `true`.


```razor
<IgbButton @onclick="ShowAll">Show All</IgbButton>
<IgbButton @onclick="HideAll">Hide All</IgbButton>

<IgbAccordion @ref="accordion">
  <IgbExpansionPanel>
    <span slot="title">Title Panel 1</span>
    <p>Content Panel 1</p>
  </IgbExpansionPanel>
  <IgbExpansionPanel>
    <span slot="title">Title Panel 2</span>
    <p>Content Panel 2</p>
  </IgbExpansionPanel>
</IgbAccordion>

@code {
    private IgbAccordion accordion;

    private async Task ShowAll() => await accordion.ShowAllAsync();

    private async Task HideAll() => await accordion.HideAllAsync();
}
```

```razor
@using IgniteUI.Blazor.Controls

<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <IgbButton class="action-button" Variant="ButtonVariant.Contained" @onclick="ShowAll">
                <span>Show All</span>
            </IgbButton>
            <IgbButton class="action-button" Variant="ButtonVariant.Contained" @onclick="HideAll">
                <span>Hide All</span>
            </IgbButton>
        </div>

        <IgbAccordion @ref="Accordion">
            <IgbExpansionPanel Open>
                <span slot="title">Billing</span>
                <span slot="subtitle">Invoices and payment settings</span>
                <p>Review invoices, update payment methods, and manage billing contacts.</p>
            </IgbExpansionPanel>

            <IgbExpansionPanel Open>
                <span slot="title">Security</span>
                <span slot="subtitle">Password and access controls</span>
                <p>Configure password rules, multi-factor authentication, and recovery options.</p>
            </IgbExpansionPanel>

            <IgbExpansionPanel Open>
                <span slot="title">Notifications</span>
                <span slot="subtitle">Product updates and account alerts</span>
                <p>Choose which product updates and account alerts are sent to your team.</p>
            </IgbExpansionPanel>
        </IgbAccordion>
    </div>
</div>

@code {
    private IgbAccordion Accordion { get; set; }

    private void ShowAll()
    {
        Accordion.ShowAll();
    }

    private void HideAll()
    {
        Accordion.HideAll();
    }
}
```

### Customize Panel Content

Customize the panel headers and content through the underlying [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) slots.

```razor
<IgbAccordion>
  <IgbExpansionPanel Open>
    <span slot="title">Billing</span>
    <span slot="subtitle">Payment and invoice settings</span>
    <p>Update payment methods, billing contacts, and invoice delivery options.</p>
  </IgbExpansionPanel>
</IgbAccordion>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="accordion-sample">
    <div class="accordion-content">
        <IgbAccordion>
            <IgbExpansionPanel Open>
                <span slot="title">@TransportationTitle</span>
                <span slot="subtitle">Choose how you want to travel</span>
                <span>
                    <p class="panel-description">Select one or more transportation options for your trip.</p>
                    <div class="categories-container">
                        @foreach (var category in Categories)
                        {
                            <IgbCheckbox class="category-option" Value="@category.Id" Checked="@category.Selected" Change="OnCategoryChange">@category.Label</IgbCheckbox>
                        }
                    </div>
                </span>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">Budget: $@SliderLower - $@SliderUpper</span>
                <span slot="subtitle">Set the price range</span>
                <span>
                    <p class="panel-description">Adjust the minimum and maximum cost for available options.</p>
                    <div class="range-summary">
                        <span>$@SliderLower</span>
                        <span>$@SliderUpper</span>
                    </div>
                    <IgbRangeSlider class="cost-slider" Min="0" Max="1000" Lower="@SliderLower" Upper="@SliderUpper" Change="OnSliderChange"></IgbRangeSlider>
                </span>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">@RatingTitle</span>
                <span slot="subtitle">Filter by review score</span>
                <span>
                    <p class="panel-description">Choose the lowest rating you want to include in the results.</p>
                    <IgbRadioGroup class="rating-options">
                        @foreach (var rating in Ratings)
                        {
                            <IgbRadio class="rating-option" name="rating" Value="@rating.Id" Change="OnRadioChange">
                                <IgbRating Label="@rating.Label" Value="@rating.Value" Max="5" class="rating-control size-small" ReadOnly="true"></IgbRating>
                            </IgbRadio>
                        }
                    </IgbRadioGroup>
                </span>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">@ArrivalTimeTitle</span>
                <span slot="subtitle">Set the latest arrival time</span>
                <span>
                    <p class="panel-description">Pick the latest acceptable arrival time for your trip.</p>
                    <IgbDateTimeInput @ref="DateTimeInputRef" InputFormat="hh:mm tt" Label="Arrive before" class="time-input size-small" Change="OnTimeChange">
                        <IgbIcon IconName="clock" Collection="material" slot="prefix"></IgbIcon>
                        <IgbIcon IconName="clear" Collection="material" slot="suffix" @onclick="OnTimeClear"></IgbIcon>
                    </IgbDateTimeInput>
                </span>
            </IgbExpansionPanel>
        </IgbAccordion>

        <IgbIcon @ref="RegisterIconRef" />
    </div>
</div>

@code {
    private IgbIcon? RegisterIconRef;
    private IgbDateTimeInput? DateTimeInputRef;
    private double SliderLower = 200;
    private double SliderUpper = 800;
    private string SelectedRating = string.Empty;
    private string ArrivalTime = "Any time";

    private List<Category> Categories { get; } = [
        new() { Id = "0", Label = "Bike" },
        new() { Id = "1", Label = "Motorcycle" },
        new() { Id = "2", Label = "Car" },
        new() { Id = "3", Label = "Taxi" },
        new() { Id = "4", Label = "Public Transport" }
    ];

    private List<Rating> Ratings { get; } = [
        new() { Id = "2", Label = "2 stars or more", Value = 2 },
        new() { Id = "3", Label = "3 stars or more", Value = 3 },
        new() { Id = "4", Label = "4 stars or more", Value = 4 },
        new() { Id = "5", Label = "5 stars or more", Value = 5 }
    ];

    private string TransportationTitle => Categories.Where(category => category.Selected).Select(category => category.Label) is var selected && selected.Any()
        ? $"Transportation: {string.Join(", ", selected)}"
        : "Transportation";

    private string RatingTitle => string.IsNullOrEmpty(SelectedRating) ? "Minimum Rating" : $"Minimum Rating: {SelectedRating}";

    private string ArrivalTimeTitle => ArrivalTime == "Any time" ? "Arrival Time" : $"Arrival Time: {ArrivalTime}";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender && RegisterIconRef is not null)
        {
            await RegisterIconRef.EnsureReady();
            const string clearIcon = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /></svg>";
            const string clockIcon = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
            await RegisterIconRef.RegisterIconFromTextAsync("clear", clearIcon, "material");
            await RegisterIconRef.RegisterIconFromTextAsync("clock", clockIcon, "material");
        }
    }

    private void OnCategoryChange(IgbCheckboxChangeEventArgs args)
    {
        var id = (args.Parent as IgbCheckbox)?.Value;
        var category = Categories.FirstOrDefault(item => item.Id == id);
        if (category is not null)
        {
            category.Selected = args.Detail.Checked;
        }
    }

    private void OnSliderChange(IgbRangeSliderValueEventArgs args)
    {
        if (args.Detail is not null)
        {
            SliderLower = args.Detail.Lower;
            SliderUpper = args.Detail.Upper;
        }
    }

    private void OnRadioChange(IgbRadioChangeEventArgs args)
    {
        var id = (args.Parent as IgbRadio)?.Value;
        var rating = Ratings.FirstOrDefault(item => item.Id == id);
        if (rating is not null)
        {
            SelectedRating = rating.Label;
        }
    }

    private Task OnTimeChange(IgbComponentDateValueChangedEventArgs args)
    {
        ArrivalTime = args.Detail.ToShortTimeString();
        return Task.CompletedTask;
    }

    private async Task OnTimeClear()
    {
        if (DateTimeInputRef is not null)
        {
            await DateTimeInputRef.ClearAsync();
        }

        ArrivalTime = "Any time";
    }

    private sealed class Category
    {
        public string Id { get; init; } = string.Empty;
        public bool Selected { get; set; }
        public string Label { get; init; } = string.Empty;
    }

    private sealed class Rating
    {
        public string Id { get; init; } = string.Empty;
        public string Label { get; init; } = string.Empty;
        public double Value { get; init; }
    }
}
```

### Nest Accordions

Nest an accordion inside an expansion panel when you need a second level of grouped disclosure.

```razor
<IgbAccordion>
  <IgbExpansionPanel Open>
    <span slot="title">Workspace Settings</span>
    <IgbAccordion>
      <IgbExpansionPanel>
        <span slot="title">Notifications</span>
        <p>Configure email and product notification preferences.</p>
      </IgbExpansionPanel>
    </IgbAccordion>
  </IgbExpansionPanel>
</IgbAccordion>
```

```razor
@using IgniteUI.Blazor.Controls

<div class="accordion-sample">
    <div class="accordion-content">
        <div class="accordion-toolbar">
            <IgbSwitch Change="OnSwitchChange">
                <span>Single Expand</span>
            </IgbSwitch>
        </div>

        <IgbAccordion SingleExpand="@SingleExpand">
            <IgbExpansionPanel Open>
                <span slot="title">Workspace Settings</span>
                <span slot="subtitle">Nested account, access, and billing options</span>

                <IgbAccordion SingleExpand="@SingleExpand">
                    <IgbExpansionPanel Open>
                        <span slot="title">Profile</span>
                        <span slot="subtitle">Name, photo, and contact details</span>
                        <p>Update the public information shown to other workspace members.</p>
                    </IgbExpansionPanel>

                    <IgbExpansionPanel>
                        <span slot="title">Security</span>
                        <span slot="subtitle">Password and sign-in preferences</span>
                        <p>Review active sessions, change your password, and configure sign-in requirements.</p>
                    </IgbExpansionPanel>

                    <IgbExpansionPanel>
                        <span slot="title">Notifications</span>
                        <span slot="subtitle">Email and product updates</span>
                        <p>Choose the messages you receive for comments, assignments, and releases.</p>
                    </IgbExpansionPanel>
                </IgbAccordion>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">Team Access</span>
                <span slot="subtitle">Members, roles, and permissions</span>
                <p>Invite teammates, assign roles, and review workspace permissions.</p>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">Billing</span>
                <span slot="subtitle">Plan, invoices, and payment method</span>
                <p>Manage subscription details, billing contacts, and invoice delivery.</p>
            </IgbExpansionPanel>
        </IgbAccordion>
    </div>
</div>

@code {
    private bool SingleExpand { get; set; }

    private void OnSwitchChange(IgbCheckboxChangeEventArgs args)
    {
        SingleExpand = args.Detail.Checked;
    }
}
```

### Do/Don't

**When to use:** Use the accordion when you need to organize secondary content, FAQ entries, settings groups, or other related vertical sections that users expand on demand. Keep panel titles short and descriptive, and enable single-expansion behavior when users should focus on one section at a time.

**When not to use:** Use the [Expansion Panel](./expansion-panel.md) when you need a single standalone expandable section instead of a coordinated container that manages multiple panels together. Do not use an accordion to hide essential primary content or to group unrelated sections.

<div class="table-responsive">
  <table class="table" style="width: 100%; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin-bottom: 24px;">
    <thead>
      <tr>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Do</th>
        <th style="width: 50%; background-color: #d3d3d3; text-align: left; padding: 16px 20px; font-size: 18px; font-weight: 500;">Don't</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
        <td style="border: 1px solid #d3d3d3; padding: 16px 20px;"></td>
      </tr>
    </tbody>
  </table>
</div>

## Properties

The accordion exposes container-level controls; panel-specific state is configured on each [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel).

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`SingleExpand`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=singleExpand) | `boolean` | `false` | Controls whether one or multiple panels can stay expanded at the same time. |
| [`Panels`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=panels) | [`ExpansionPanel[]`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) | n/a | Returns the collection of child expansion panels in the accordion. |

## Methods

Use the accordion methods when you need to change panel state from your code.

| Name | Description |
| -- | -- |
| [`ShowAll`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=showAll) | Expands all available panels. |
| [`HideAll`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=hideAll) | Collapses the available panels. |

## Styling

Style the Blazor accordion with CSS parts and Ignite UI theme variables.

```razor
@using IgniteUI.Blazor.Controls

<div class="accordion-sample">
    <div class="accordion-content">
        <IgbAccordion>
            <IgbExpansionPanel Open>
                <span slot="title">Getting Started</span>
                <span slot="subtitle">Setup and onboarding</span>
                <p>Find installation steps, project setup guidance, and resources for building your first application.</p>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">Billing</span>
                <span slot="subtitle">Invoices and payment methods</span>
                <p>Review invoices, update payment methods, and manage billing contacts for your account.</p>
            </IgbExpansionPanel>

            <IgbExpansionPanel>
                <span slot="title">Security</span>
                <span slot="subtitle">Access and authentication</span>
                <p>Configure password rules, multi-factor authentication, and recovery options for your team.</p>
            </IgbExpansionPanel>
        </IgbAccordion>
    </div>
</div>
```

Style the accordion by targeting the parts exposed by its child [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) components.

### Styling Variables

Use Ignite UI for Blazor theme CSS variables as values when styling the expansion panel parts.

| Variable | What it changes |
| -- | -- |
| `--ig-secondary-900` | Supplies the dark background color used by the panel and header in the example below. |
| `--ig-secondary-900-contrast` | Supplies a readable foreground color for content on `--ig-secondary-900`. |
| `--ig-warn-500` | Supplies the accent color used by the indicator, title, and subtitle in the example below. |

```css
igc-expansion-panel {
  background-color: var(--ig-secondary-900);
  color: var(--ig-secondary-900-contrast);
}

igc-expansion-panel::part(header) {
  background-color: var(--ig-secondary-900);
}

igc-expansion-panel::part(indicator),
igc-expansion-panel::part(title),
igc-expansion-panel::part(subtitle) {
  color: var(--ig-warn-500);
}
```

### CSS Parts

| Part | What it changes |
| -- | -- |
| `header` | The container for the expansion indicator, title, and subtitle. |
| `title` | The title container. |
| `subtitle` | The subtitle container. |
| `indicator` | The indicator container. |
| `content` | The expansion panel content wrapper. |

### Styling with Tailwind

Use Tailwind utility classes with CSS part selectors when you want to keep the styling close to the component markup.

```css
@tailwind utilities;

.accordion-tailwind-sample {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
```

## Accessibility

The accordion supports keyboard interaction for moving focus between panels and changing their expanded state.

### Keyboard Interaction

Use the keyboard shortcuts below to move through the accordion and open or close panels.

| Key | Action |
| -- | -- |
| <kbd>Down Arrow</kbd> | Moves focus to the panel below. |
| <kbd>Up Arrow</kbd> | Moves focus to the panel above. |
| <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens the focused panel. |
| <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes the focused panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Opens all enabled panels. If [`SingleExpand`](mcp:get_api_reference?platform=blazor&component=IgbAccordion&member=singleExpand) is `true`, opens only the focused panel. |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Closes all enabled panels. |
| <kbd>Home</kbd> | Moves focus to the first enabled panel. |
| <kbd>End</kbd> | Moves focus to the last enabled panel. |

### Screen Readers / ARIA

The accordion's accessibility semantics are provided through its child expansion panels and their headers.

- Each panel header exposes `role="button"`, `aria-expanded`, and `aria-controls`.
- Each panel body exposes `role="region"` and a label through `aria-labelledby` or `aria-label`.
- Use clear title text for each panel so assistive technologies can announce a meaningful label.
- Keep interactive content inside panel bodies in a logical tab order.

### Accessibility Compliance

Infragistics documents Ignite UI for Blazor accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic. The accordion's compliance evidence comes from the child [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) components that provide the interactive headers and regions.

| Criterion | How the component complies |
| -- | -- |
| [2.1.1 Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard) | The accordion supports keyboard commands for moving focus and opening or closing panels. |
| [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order) | Focus moves through enabled panels in sequence, with shortcuts for jumping to the first and last panel. |

Your responsibilities:

- Provide panel titles that describe the content behind each disclosure area.
- Preserve a logical focus order in the surrounding page layout.
- Validate any custom styling against your application's contrast and focus-indicator requirements.

## API References

[`IgbAccordion`](mcp:get_api_reference?platform=blazor&component=IgbAccordion)
[`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel)

## Dependencies

The accordion depends on [`IgbExpansionPanel`](mcp:get_api_reference?platform=blazor&component=IgbExpansionPanel) for its visible sections.

The accordion also depends on the shared theme stylesheet for its default appearance.

## Additional Resources

Use these resources to continue with Ignite UI for Blazor Accordion support, source, and related layout guidance.

- [Ignite UI for Blazor **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-blazor)
- [Ignite UI for Blazor **GitHub**](https://github.com/IgniteUI/igniteui-blazor)

## Related Components

- [Expansion Panel](./expansion-panel.md) - The collapsible section the accordion is built from. See it for configuring individual panels.

## FAQ

  **Q: Should multiple accordion panels be open at the same time?**

    Allow multiple panels to stay open when users need to compare or cross-reference their content. Use single-expansion behavior when the workflow is clearer with one active section at a time.
  
  **Q: When should I avoid using an accordion?**

    Avoid using an accordion for essential, long, or comparison-heavy content that users need to read at once. Use clear headings, a separate page, or another layout when hiding the content would make it harder to find or compare.
  
  **Q: How should I write accordion headers?**

    Use short, descriptive headers that clearly identify the content revealed by each panel. Users should be able to scan the headers and decide which section to open.
  
  **Q: Can an accordion header contain other buttons or links?**

    Avoid placing other interactive controls inside an accordion header. Keep secondary actions outside the header so the panel trigger remains clear and does not contain nested interactive elements.
  

