---
title: "Web Components Accessibility Compliance | Ignite UI for Web Components | Infragistics"
description: "Accessibility support in Ignite UI for Web Components - the standards we target, per-component keyboard and screen reader status, and how to report an accessibility issue."
keywords: "Ignite UI for Web Components, Infragistics, Accessibility, WCAG, Section 508, EN 301 549, ARIA, Keyboard"
license: MIT
last_updated: "2026-08-27"
mentionedTypes: []
llms:
  description: "Accessibility support in Ignite UI for Web Components: the conformance standards targeted, the per-component keyboard and screen-reader documentation index, required configuration, and the channel for reporting accessibility issues."
_tocName: Accessibility Compliance
---
# Accessibility Compliance

This page records the accessibility standards Ignite UI for Web Components targets, what each component's own documentation covers today, and how to report an accessibility problem.

Accessibility support is delivered by two layers — the components themselves and the theming engine that styles them. Use this page to find the status of a specific component; use [Theming Accessibility](../themes/accessibility.md) for contrast, text scaling, and chart color behavior.

**Note:** 
**Scope of this page.** The information below reflects the **Default theme** and the current documented behavior of each component. It is a support summary, not a formal conformance statement. Custom themes, typography changes, and animation or color overrides can change the result.

## Standards We Target

| Standard | Region | What it requires |
|---|---|---|
| <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 Level AA</a> | International | The success criteria listed below. The baseline referenced by the other two. |
| <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">Section 508 (Revised)</a> | United States | Federal procurement. Since the Revised Section 508 Standards (published 2017, compliance date January 2018) it incorporates WCAG 2.0 Level AA by reference, so it is satisfied by the same work. |
| <a href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/" target="_blank" rel="noopener noreferrer">EN 301 549</a> | Europe | The European standard referenced for ICT accessibility, built on WCAG. The European Accessibility Act, which builds on it, applies from 28 June 2025. |

**Note:** 
Section 508 previously defined its own 16 rules under §1194.22. Those were superseded by the Revised Standards, which adopt WCAG directly. Targeting WCAG 2.1 Level AA therefore addresses all three frameworks above.

### Success criteria that apply to UI components

WCAG conformance is claimed against individual **success criteria**, not against the broader guidelines. These are the criteria that a UI component library can affect:

| Criterion | Level | What it means for a component |
|---|:--:|---|
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html" target="_blank" rel="noopener noreferrer">1.1.1 Non-text Content</a> | A | Icons and images carry a text alternative. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html" target="_blank" rel="noopener noreferrer">1.3.1 Info and Relationships</a> | A | Structure conveyed visually is also conveyed in markup. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html" target="_blank" rel="noopener noreferrer">1.3.2 Meaningful Sequence</a> | A | Reading order matches visual order. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">1.4.3 Contrast (Minimum)</a> | AA | Text meets 4.5:1 against its background. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html" target="_blank" rel="noopener noreferrer">1.4.4 Resize Text</a> | AA | Text scales to 200% without loss of content. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html" target="_blank" rel="noopener noreferrer">1.4.11 Non-text Contrast</a> | AA | Control boundaries and states meet 3:1. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html" target="_blank" rel="noopener noreferrer">1.4.13 Content on Hover or Focus</a> | AA | Tooltips and popovers are dismissible and persistent. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html" target="_blank" rel="noopener noreferrer">2.1.1 Keyboard</a> | A | All functionality is reachable by keyboard. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html" target="_blank" rel="noopener noreferrer">2.1.2 No Keyboard Trap</a> | A | Focus can always move back out. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html" target="_blank" rel="noopener noreferrer">2.4.3 Focus Order</a> | A | Tab order follows a meaningful sequence. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html" target="_blank" rel="noopener noreferrer">2.4.7 Focus Visible</a> | AA | The focused control is visibly indicated. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html" target="_blank" rel="noopener noreferrer">2.5.3 Label in Name</a> | A | The accessible name contains the visible label. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html" target="_blank" rel="noopener noreferrer">3.2.1 On Focus</a> | A | Focus alone does not trigger a change of context. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/on-input.html" target="_blank" rel="noopener noreferrer">3.2.2 On Input</a> | A | Changing a value alone does not trigger a change of context. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html" target="_blank" rel="noopener noreferrer">3.3.2 Labels or Instructions</a> | A | Inputs carry labels or instructions. |
| <a href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" target="_blank" rel="noopener noreferrer">4.1.2 Name, Role, Value</a> | A | Every control exposes a name, a role, and its current state. |

## How Accessibility Is Delivered

| Layer | Responsible for | Where it is documented |
|---|---|---|
| **Component library** (`igniteui-angular` on Angular) | Keyboard operability, focus movement, ARIA roles and states, screen-reader announcements. | The index below, and each component topic. |
| **Theming engine** (`igniteui-theming`) | Color contrast, text sizing, chart color palettes, styling utilities for custom controls. | [Theming Accessibility](../themes/accessibility.md) |

## Component Support

This index records what each component's documentation covers today. **Not documented yet** means the component's own documentation does not describe this behavior — it is a statement about the documentation, not about the component.

| Status | Meaning |
|---|---|
| **Documented** | The behavior is described in the component's own documentation, linked in the row. |
| **Requires configuration** | Available once the setting named in [Configuration Required](#configuration-required) is applied. |
| **Not documented yet** | The component's documentation does not yet describe this behavior. |

| Component | Keyboard interaction | Screen reader / ARIA | Reference |
|---|---|---|---|
| [Grid](../grids/data-grid.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../grids/data-grid.md#keyboard-navigation) |
| [Hierarchical Grid](../grids/hierarchical-grid/overview.md) | Documented | Not documented yet | [Keyboard navigation](../grids/data-grid.md#keyboard-navigation) |
| [Tree Grid](../grids/tree-grid/overview.md) | Documented | Not documented yet | [Keyboard navigation](../grids/data-grid.md#keyboard-navigation) |
| [Tree](../grids/tree.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../grids/tree.md#keyboard-navigation) |
| [List](../grids/list.md) | Not documented yet | Not documented yet | — |
| [Avatar](../layouts/avatar.md#accessibility) | Documented | Documented | [Accessibility](../layouts/avatar.md#accessibility) |
| [Badge](../inputs/badge.md#accessibility) | Documented | Documented | [Accessibility](../inputs/badge.md#accessibility) |
| [Banner](../notifications/banner.md) | Not documented yet | Not documented yet | — |
| [Button](../inputs/button.md) | Not documented yet | Not documented yet | — |
| [Button Group](../inputs/button-group.md) | Not documented yet | Not documented yet | — |
| [Calendar](../scheduling/calendar.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../scheduling/calendar.md#keyboard-navigation) |
| [Card](../layouts/card.md) | Not documented yet | Not documented yet | — |
| [Carousel](../layouts/carousel.md#accessibility) | Documented | Documented | [Accessibility](../layouts/carousel.md#accessibility) |
| [Checkbox](../inputs/checkbox.md) | Not documented yet | Not documented yet | — |
| [Chip](../inputs/chip.md) | Not documented yet | Not documented yet | — |
| [Circular Progress](../inputs/circular-progress.md) | Not documented yet | Not documented yet | — |
| [Combo](../inputs/combo/overview.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../inputs/combo/overview.md#keyboard-navigation) |
| [Date Time Input](../inputs/date-time-input.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../inputs/date-time-input.md#keyboard-navigation) |
| [Date Picker](../scheduling/date-picker.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../scheduling/date-picker.md#keyboard-navigation) |
| [Dialog](../notifications/dialog.md) | Not documented yet | Not documented yet | — |
| [Divider](../layouts/divider.md) | Not documented yet | Not documented yet | — |
| [Dock Manager](../layouts/dock-manager.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../layouts/dock-manager.md#keyboard-navigation) |
| [Dropdown](../inputs/dropdown.md) | Not documented yet | Not documented yet | — |
| [Expansion Panel](../layouts/expansion-panel.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../layouts/expansion-panel.md#keyboard-navigation) |
| [File Input](../inputs/file-input.md#accessibility--aria-support) | Documented | Documented | [Accessibility](../inputs/file-input.md#accessibility--aria-support) |
| [Icon](../layouts/icon.md) | Not documented yet | Not documented yet | — |
| [Icon Button](../inputs/icon-button.md) | Not documented yet | Not documented yet | — |
| [Input](../inputs/input.md) | Not documented yet | Not documented yet | — |
| [Linear Progress](../inputs/linear-progress.md) | Not documented yet | Not documented yet | — |
| [Navbar](../menus/navbar.md) | Not documented yet | Not documented yet | — |
| [Navigation Drawer](../menus/navigation-drawer.md) | Not documented yet | Not documented yet | — |
| [Radio](../inputs/radio.md) | Not documented yet | Not documented yet | — |
| [Rating](../inputs/rating.md) | Not documented yet | Not documented yet | — |
| [Select](../inputs/select.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../inputs/select.md#keyboard-navigation) |
| [Slider](../inputs/slider.md) | Not documented yet | Not documented yet | — |
| [Snackbar](../notifications/snackbar.md) | Not documented yet | Not documented yet | — |
| [Stepper](../layouts/stepper.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../layouts/stepper.md#keyboard-navigation) |
| [Switch](../inputs/switch.md) | Not documented yet | Not documented yet | — |
| [Tabs](../layouts/tabs.md#keyboard-navigation) | Documented | Not documented yet | [Keyboard navigation](../layouts/tabs.md#keyboard-navigation) |
| [Text Area](../inputs/text-area.md) | Not documented yet | Not documented yet | — |
| [Toast](../notifications/toast.md) | Not documented yet | Not documented yet | — |
| [Tooltip](../inputs/tooltip.md#accessibility--aria-support) | Documented | Documented | [Accessibility](../inputs/tooltip.md#accessibility--aria-support) |

**Warning:** 
Rows marked **Not documented yet** are a gap in this documentation, not a known defect. If you need a conformance answer for a specific component before the next review cycle, [open an issue](#reporting-an-accessibility-issue) and ask.

## Configuration Required

Some accessibility outcomes depend on how you configure the application rather than on the component alone.

| Concern | Criterion | What to configure |
|---|---|---|
| Animation and motion | <a href="https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html" target="_blank" rel="noopener noreferrer">2.3.1 Three Flashes or Below</a> | No configuration required. The animation player reads the operating system's `prefers-reduced-motion: reduce` setting and plays animations with a duration of `0` when it is set. |

The remaining items apply to every platform.

| Concern | Criterion | What to configure |
|---|---|---|
| Time limits on transient messages | <a href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html" target="_blank" rel="noopener noreferrer">2.2.1 Timing Adjustable</a> | Components that auto-dismiss — such as Snackbar and Toast — expose a display-duration setting. Extend it, or disable auto-dismiss, so a user has time to read the message. |
| Color contrast after theming | <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">1.4.3 Contrast (Minimum)</a> | Set foreground colors with `contrast-color()` or `adaptive-contrast()` rather than fixed values. See [Theming Accessibility](../themes/accessibility.md). |
| Accessible names on icon-only controls | <a href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html" target="_blank" rel="noopener noreferrer">4.1.2 Name, Role, Value</a> | Supply an accessible name in your own markup. A control showing only an icon has no name until you give it one. |

## Formal Conformance Documentation

This page is a documentation index, not a conformance claim. It records what our own documentation covers; it does not certify any component against a standard.

For procurement, contract, or audit purposes — where a traceable, per-criterion conformance statement is required — request the current accessibility conformance report (VPAT) through your account manager or Infragistics support. Cite the product, version, and the standard the report must address (WCAG 2.1 Level AA, Section 508, or EN 301 549).

**Note:** 
Earlier revisions of this page carried per-component conformance matrices. Those tables asserted a level of conformance that was not backed by a traceable, per-criterion assessment, and have been removed rather than restated. The conformance report is the authoritative source for that information.

## Reporting an Accessibility Issue

If you find an accessibility problem in a component, report it on the <a href="https://github.com/IgniteUI/igniteui-webcomponents/issues" target="_blank" rel="noopener noreferrer">Ignite UI for Web Components issue tracker</a>.

Include the component, the assistive technology and browser you used, the expected behavior, and the WCAG success criterion you believe is affected. Accessibility reports are triaged against the criteria listed above.

## Additional Resources

- [Theming Accessibility](../themes/accessibility.md) — contrast, text scaling, and chart palettes.
- <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 Quick Reference</a> — all success criteria with techniques.
- <a href="https://www.w3.org/WAI/ARIA/apg/patterns/" target="_blank" rel="noopener noreferrer">WAI-ARIA Authoring Practices</a> — expected keyboard and ARIA behavior per interaction pattern.
- <a href="https://www.section508.gov/" target="_blank" rel="noopener noreferrer">Section 508</a> — United States federal procurement requirements.
- [Formal Conformance Documentation](#formal-conformance-documentation) — how to request a conformance report (VPAT) for procurement.

## FAQ

  **Q: Is Ignite UI for Web Components WCAG compliant?**

    Conformance is a property of a finished application, not of a component library on its own. Ignite UI for Web Components targets WCAG 2.1 Level AA and documents per-component behavior in the index above, but the markup, content, and configuration you add determine the result. Use the index above to check the components you rely on, and report anything that does not behave as documented.
  

  **Q: Why do some components say &quot;Not documented yet&quot;?**

    That status means the component's own documentation does not yet describe the behavior. It is not a statement that the component fails a criterion - it records what the documentation covers, so you can tell the difference between a behavior that is documented and one that is not.
  

  **Q: Does Section 508 still have its own separate rules?**

    No. The Revised Section 508 Standards (published 2017, compliance date January 2018) replaced the earlier §1194.22 rules and adopt WCAG Level AA by reference, so meeting WCAG also addresses Section 508.
  

  **Q: Does the compliance information apply to custom themes?**

    Partly. Keyboard and ARIA behavior is unaffected by theming. Color contrast is not — overriding colors can move text below the required ratio. Verify custom palettes as described in Theming Accessibility.
  

  **Q: Where do I find the keyboard shortcuts for a component?**

    On the component's own topic, linked from the Reference column above. The grid family shares a dedicated keyboard navigation topic.
  

