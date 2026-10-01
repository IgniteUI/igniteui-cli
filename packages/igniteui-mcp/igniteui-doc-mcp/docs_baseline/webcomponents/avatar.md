---
title: "Web Components Avatar Component | Layouts | Infragistics"
description: "Use the Web Components Avatar component to represent users, entities, or objects with images, initials, icons, or custom content."
keywords: "Web Components Avatar, avatar component, profile image, initials, Ignite UI for Web Components, Infragistics"
last_updated: "2026-07-29"
license: MIT
mentionedTypes: ["Avatar", "Badge", "Icon"]
relatedComponents: ["Badge"]
llms:
  description: "The Ignite UI for Web Components Avatar topic shows how to render user, entity, or object identity with images, initials, icons, custom content, shape, size, styling, and accessibility guidance."
_tocName: Avatar
---
# Avatar Component

The Ignite UI for Web Components Avatar represents a user, entity, or object with an image, initials, or custom content.

Use the avatar to provide a compact visual identity in lists, cards, profile menus, and activity feeds.

## Live Demo

```css
.avatar-overview-sample {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  padding: 2rem;
}

.avatar-overview-sample igc-avatar {
  --ig-size: var(--ig-size-large);
}

.profile-status {
  anchor-name: --profile-status;
}

.status-badge {
  --ig-size: var(--ig-size-large);
  position: absolute;
  position-anchor: --profile-status;
  inset-block-start: anchor(85%);
  inset-inline-start: anchor(85%);
  translate: -50% -50%;
}

.avatar-stack {
  display: flex;
}

.avatar-stack igc-avatar + igc-avatar {
  /* Proportional to the avatar's own rendered size (--size, set internally
     by the theme) rather than a fixed length, since themes disagree widely
     on how big a "large" avatar actually is. */
  margin-inline-start: calc(var(--size) * -0.27);
}

.avatar-stack igc-avatar::part(base) {
  box-shadow: 0 0 0 calc(var(--size) * 0.07) var(--ig-surface-500);
}

.avatar-stack igc-avatar:last-child {
  --ig-avatar-background: #e8eef6;
  --ig-avatar-color: #6f8097;
}
```

## Anatomy

The avatar is a single host element that applies image semantics and renders one of the supported content patterns.

**Web Components Avatar anatomy anatomy:** The avatar anatomy labels the image, icon, and initials containers.

<style>{`
  .avatar-anatomy {
    --igd-anatomy-padding: 64px 32px;
  }

  .avatar-anatomy .igd-anatomy__image {
    max-width: 520px;
  }
`}</style>

<span class="ig-typography__body-2" style="display: block; margin-bottom: 24px;"><strong>1. Image container:</strong> Displays image content type.<br />
<strong>2. Icon container:</strong> Displays icon content type.<br />
<strong>3. Initials container:</strong> Displays text content type.</span>

```text
igc-avatar[role="img"]           // host - exposes the avatar
└─ div[part="base"]              // avatar wrapper
   ├─ span[part="initials"]      // rendered when `initials` is set
   ├─ slot                       // rendered when `initials` is not set
   └─ img[part="image"]          // rendered while `src` is set and loads
```

## Getting Started

Register the avatar component before you use it. If you have not set up Ignite UI for Web Components yet, complete the shared [Getting Started](../general-getting-started.md) topic first.

```ts
import { defineComponents, IgcAvatarComponent } from 'igniteui-webcomponents';

defineComponents(IgcAvatarComponent);
```

## Usage

Render an avatar with an image source, initials, or custom content in the default slot.

### Variants

Set only the content source you intend to show. The avatar renders [`Initials`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=initials) when they are set, otherwise it renders default slot content, and it also renders an image element while [`Src`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=src) is set and loads successfully.

```html
<igc-avatar initials="AZ"></igc-avatar>

<igc-avatar
  src="https://static.infragistics.com/xplatform/images/people/men/1.jpg"
  alt="A photo of Ana Zane">
</igc-avatar>

<igc-avatar>
  <igc-icon name="home"></igc-icon>
</igc-avatar>
```

```css
.avatar-variants-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 3rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;

  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-variants-sample igc-avatar:nth-of-type(1) {
  anchor-name: --image;
}

.avatar-variants-sample igc-avatar:nth-of-type(2) {
  anchor-name: --icon;
}

.avatar-variants-sample igc-avatar:nth-of-type(3) {
  anchor-name: --initials;
}

.avatar-variants-sample igc-badge:nth-of-type(1) {
  position-anchor: --image;
}

.avatar-variants-sample igc-badge:nth-of-type(2) {
  position-anchor: --icon;
}

.avatar-variants-sample igc-badge:nth-of-type(3) {
  position-anchor: --initials;
}
```

### Shape

Set [`Shape`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=shape) to `square`, `rounded`, or `circle`.

```html
<igc-avatar initials="AZ" shape="circle"></igc-avatar>
```

```css
.avatar-shape-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 2.5rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;

  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-shape-sample igc-avatar:nth-of-type(1) {
  anchor-name: --circle;
}

.avatar-shape-sample igc-avatar:nth-of-type(2) {
  anchor-name: --square;
}

.avatar-shape-sample igc-avatar:nth-of-type(3) {
  anchor-name: --rounded;
}

.avatar-shape-sample igc-badge:nth-of-type(1) {
  position-anchor: --circle;
}

.avatar-shape-sample igc-badge:nth-of-type(2) {
  position-anchor: --square;
}

.avatar-shape-sample igc-badge:nth-of-type(3) {
  position-anchor: --rounded;
}
```

### Size

Set `--ig-size` to one of the shared size tokens when you need a preset avatar size.

```css
igc-avatar {
  --ig-size: var(--ig-size-large);
}
```

```css
.avatar-size-sample {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  place-content: center;
  place-items: center;
  column-gap: 3rem;
  row-gap: 0.5rem;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
}

:where(igc-avatar) {
  grid-row: 1;
}

:where(span) {
  grid-row: 2;
  text-align: center;
  color: var(--ig-gray-600);
  font-family: "Aktiv Grotesk", Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
}

:where(igc-badge) {
  position: absolute;
  inset-block-start: anchor(85.5%);
  inset-inline-start: anchor(85.5%);
  translate: -50% -50%;
}

.avatar-size-sample igc-avatar:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  anchor-name: --large;
}

.avatar-size-sample igc-avatar:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  anchor-name: --medium;
}

.avatar-size-sample igc-avatar:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  anchor-name: --small;
}

.avatar-size-sample igc-badge:nth-of-type(1) {
  --ig-size: var(--ig-size-large);
  position-anchor: --large;
}

.avatar-size-sample igc-badge:nth-of-type(2) {
  --ig-size: var(--ig-size-medium);
  position-anchor: --medium;
}

.avatar-size-sample igc-badge:nth-of-type(3) {
  --ig-size: var(--ig-size-small);
  position-anchor: --small;
}
```

### Do/Don't

**When to use:** Use the avatar when a UI needs a small representation of a person, organization, object, or account, such as a profile image, initials, or an icon. Keep a consistent avatar strategy within the same UI region so repeated identities are easy to scan.

**When not to use:** Use the [Badge](../inputs/badge.md) component when you need to show a count, status, or notification indicator instead of representing an entity. Badges can also decorate avatars when both identity and status need to appear together.

<div class="table-responsive">
<table class="table" style="width: 100%; max-width: 720px; table-layout: fixed; border-collapse: collapse; border: 1px solid #d3d3d3; margin: 0 auto 24px;">
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

The avatar exposes a small set of inputs for its content and shape.

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| [`Alt`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=alt) | `string` | n/a | Sets alternative text for the image avatar. |
| [`Initials`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=initials) | `string` | n/a | Sets text initials rendered when no image is displayed. |
| [`Shape`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=shape) | `"square" \| "rounded" \| "circle"` | `"square"` | Sets the avatar shape. |
| [`Src`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent&member=src) | `string` | n/a | Sets the image source URL. |

## Styling

```css
.sample {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.chat-list {
  --ig-list-header-text-color: var(--ig-gray-900);
  max-width: 20.5rem;
}

.chat-list * {
  font-family: "Aktiv Grotesk", Arial, sans-serif;
}

.chat-list [slot="title"] {
  font-weight: 600;
}

.chat-list [slot="end"] {
  color: var(--ig-gray-600);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.chat-list-item--split {
  --border-width: 0.0625rem;
  --border-color: var(--ig-gray-300);
}

:where(igc-avatar) {
  --ig-size: var(--ig-size-small);
  --ig-avatar-background: var(--ig-gray-300);
  --ig-avatar-color: var(--ig-gray-300-contrast);
  --ig-avatar-icon-color: var(--ig-gray-300-contrast);
}

.avatar-icon {
  --ig-size: var(--ig-size-small);
}

.avatar-with-badge {
  position: relative;
}

:where(igc-badge) {
  --ig-size: var(--ig-size-small);
  --ig-badge-icon-color: #ffffff;
  --ig-badge-text-color: #ffffff;
}

.avatar-status {
  --ig-size: var(--ig-size-small);
  position: absolute;
  inset-inline-end: -0.25rem;
  inset-block-end: -0.25rem;
}

.avatar-muted-badge {
  --ig-badge-background-color: var(--ig-gray-500);
}
```

The avatar appearance is controlled through theme variables and platform-specific styling hooks.

Use the avatar CSS variables for token-level changes and CSS parts when you need to target the rendered wrapper, image, icon, or initials.

| Variable | What it changes |
| -- | -- |
| `--ig-avatar-background` | Avatar background color. |
| `--ig-avatar-color` | Text and initials color. |
| `--ig-avatar-icon-color` | Slotted icon color. |
| `--ig-avatar-border-radius` | Border radius used by rounded avatars. |
| `--ig-avatar-size` | Avatar width and height. |
| `--ig-size` | Shared component size token used to derive preset avatar sizes. |

| CSS Part | Description |
| -- | -- |
| `base` | The avatar wrapper. |
| `icon` | The icon wrapper. |
| `initials` | The initials wrapper. |
| `image` | The image element. |

### Sass Theming

Use the `avatar-theme` function when your application customizes Ignite UI themes through Sass.

```scss
@use "igniteui-theming/sass/themes" as *;

$custom-avatar-theme: avatar-theme(
  $background: #72da67,
  $border-radius: 16px,
  $size: 3rem
);

:root {
  @include tokens($custom-avatar-theme);
}
```

### CSS Variables

Set component CSS variables directly when you need local styling without a Sass build step.

```css
igc-avatar {
  --ig-avatar-background: var(--ig-success-500);
  --ig-avatar-color: var(--ig-success-500-contrast);
  --ig-avatar-border-radius: 20px;
}

igc-avatar::part(base) {
  border: 2px solid var(--ig-success-700);
}
```

### Styling with Tailwind

Use Tailwind utility classes with the Ignite UI for Web Components Avatar when you need utility-first layout styling together with Ignite UI component tokens.

```typescript
export const instagramIcon =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_instagram)"><path d="M5.27258 0.0629438C4.31498 0.108124 3.66103 0.260944 3.08935 0.485584C2.49769 0.716164 1.99621 1.02558 1.49725 1.52634C0.998295 2.0271 0.691035 2.52894 0.462075 3.1215C0.240495 3.69444 0.0903746 4.34892 0.0480746 5.30706C0.0057746 6.2652 -0.00358541 6.57318 0.00109459 9.01722C0.00577459 11.4613 0.0165746 11.7676 0.0630146 12.7277C0.108735 13.6852 0.261015 14.3389 0.485655 14.9108C0.716595 15.5024 1.02565 16.0037 1.52659 16.5029C2.02753 17.002 2.52901 17.3086 3.12301 17.5379C3.69541 17.7591 4.35008 17.9099 5.30804 17.9519C6.266 17.9938 6.57434 18.0035 9.01766 17.9989C11.461 17.9942 11.7686 17.9834 12.7285 17.9378C13.6885 17.8923 14.3388 17.7389 14.9109 17.5154C15.5025 17.2839 16.0042 16.9754 16.503 16.4743C17.0017 15.9731 17.3088 15.4709 17.5376 14.878C17.7594 14.3056 17.91 13.651 17.9516 12.6937C17.9935 11.7331 18.0034 11.4263 17.9988 8.98266C17.9941 6.53898 17.9831 6.23262 17.9376 5.27286C17.892 4.3131 17.7396 3.66132 17.5151 3.0891C17.2838 2.49744 16.9751 1.9965 16.4743 1.497C15.9736 0.997504 15.471 0.690604 14.8783 0.462364C14.3055 0.240784 13.6512 0.0897638 12.6933 0.0483638C11.7353 0.00696385 11.427 -0.00365615 8.98274 0.00102385C6.53852 0.00570385 6.23252 0.0161439 5.27258 0.0629438ZM5.3777 16.3328C4.5002 16.2946 4.02373 16.1488 3.70621 16.0268C3.28573 15.8648 2.98621 15.6689 2.66977 15.3556C2.35333 15.0422 2.15893 14.7416 1.99477 14.322C1.87147 14.0045 1.72297 13.5286 1.68193 12.6511C1.63729 11.7026 1.62793 11.4179 1.62271 9.01506C1.61749 6.61224 1.62667 6.32784 1.66825 5.37906C1.70569 4.50228 1.85239 4.02528 1.97425 3.70794C2.13625 3.28692 2.33137 2.98794 2.64547 2.67168C2.95957 2.35542 3.25927 2.16066 3.67921 1.9965C3.99637 1.87266 4.4723 1.72542 5.34944 1.68366C6.29858 1.63866 6.58298 1.62966 8.98544 1.62444C11.3879 1.61922 11.673 1.62822 12.6225 1.66998C13.4993 1.70814 13.9765 1.8534 14.2935 1.97598C14.7141 2.13798 15.0135 2.33256 15.3297 2.6472C15.646 2.96184 15.8409 3.26046 16.0051 3.6813C16.1291 3.99756 16.2763 4.4733 16.3177 5.35098C16.3629 6.30012 16.3732 6.5847 16.3775 8.98698C16.3818 11.3893 16.3734 11.6746 16.3318 12.623C16.2934 13.5005 16.148 13.9771 16.0258 14.295C15.8638 14.7153 15.6685 15.015 15.3542 15.3311C15.0399 15.6472 14.7406 15.8419 14.3205 16.0061C14.0037 16.1297 13.5272 16.2773 12.6508 16.3191C11.7016 16.3637 11.4172 16.3731 9.01388 16.3783C6.61052 16.3835 6.32701 16.3738 5.37787 16.3328M12.7147 4.1898C12.715 4.40342 12.7787 4.61214 12.8977 4.78955C13.0167 4.96697 13.1856 5.10511 13.3831 5.18651C13.5806 5.26792 13.7978 5.28892 14.0073 5.24687C14.2167 5.20482 14.409 5.1016 14.5597 4.95028C14.7105 4.79895 14.813 4.60631 14.8543 4.39671C14.8956 4.18712 14.8738 3.96999 14.7917 3.77279C14.7095 3.57559 14.5708 3.40717 14.3929 3.28884C14.2151 3.17051 14.0061 3.10758 13.7925 3.108C13.5061 3.10858 13.2317 3.22286 13.0296 3.42573C12.8275 3.62859 12.7142 3.90343 12.7147 4.1898ZM4.37887 9.00894C4.38391 11.5613 6.4568 13.6258 9.00866 13.6209C11.5605 13.616 13.6264 11.5433 13.6215 8.99094C13.6167 6.43854 11.5432 4.37358 8.99102 4.37862C6.4388 4.38366 4.37401 6.4569 4.37887 9.00894ZM5.99996 9.0057C5.99878 8.41235 6.17358 7.83197 6.50226 7.33796C6.83093 6.84396 7.29871 6.4585 7.84645 6.23035C8.39419 6.0022 8.99728 5.9416 9.57947 6.0562C10.1616 6.17081 10.6968 6.45548 11.1172 6.87421C11.5376 7.29294 11.8243 7.82694 11.9413 8.40866C12.0582 8.99038 12 9.59371 11.774 10.1424C11.548 10.691 11.1644 11.1603 10.6717 11.4909C10.179 11.8215 9.59931 11.9986 9.00595 11.9998C8.61197 12.0007 8.22168 11.9239 7.85737 11.7738C7.49307 11.6238 7.16189 11.4035 6.88275 11.1254C6.6036 10.8474 6.38197 10.5171 6.2305 10.1534C6.07903 9.78967 6.00069 9.39969 5.99996 9.0057Z" fill="black"/></g><defs><clipPath id="clip0_instagram"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';

export const berealIcon =
    '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_bereal)"><path d="M11.7436 8.30078C11.4476 8.30078 11.2191 8.38594 11.0568 8.55329C10.8934 8.72024 10.7917 8.94745 10.75 9.23493H12.7337C12.7121 8.92888 12.61 8.69732 12.4261 8.53906C12.2435 8.3804 12.0155 8.30078 11.7436 8.30078Z" fill="black"/><path d="M7.41904 8.18753C7.5854 8.08617 7.66839 7.90598 7.66839 7.64716C7.66839 7.36126 7.55853 7.17139 7.33823 7.08011C7.14895 7.01668 6.90653 6.98389 6.61273 6.98389H5.46875V8.33987H6.76941C7.03653 8.33987 7.25268 8.28909 7.41904 8.18753Z" fill="black"/><path d="M7.40284 9.46179C7.25723 9.39442 7.05175 9.36004 6.78818 9.35767H5.46875V10.9958H6.76763C7.03456 10.9958 7.24103 10.9608 7.3902 10.8879C7.6591 10.754 7.79385 10.4989 7.79385 10.1203C7.79385 9.80103 7.66325 9.58034 7.40284 9.46179Z" fill="black"/><path d="M8.98867 0.098877C4.07826 0.098877 0.0976562 4.07948 0.0976562 8.98989C0.0976562 13.9003 4.07826 17.8809 8.98867 17.8809C13.8991 17.8809 17.8797 13.9003 17.8797 8.98989C17.8797 4.07948 13.8991 0.098877 8.98867 0.098877ZM10.4952 6.17144H12.9707V6.7863H10.4952V6.17144ZM8.81382 11.1887C8.69744 11.38 8.55281 11.5414 8.37895 11.6716C8.18334 11.822 7.95158 11.9251 7.68525 11.9802C7.41812 12.0354 7.12887 12.0632 6.81729 12.0632H4.04922V5.91656H7.01783C7.76606 5.92881 8.29656 6.14556 8.60991 6.57134C8.79781 6.83254 8.89107 7.1457 8.89107 7.51003C8.89107 7.88583 8.79682 8.18654 8.60695 8.41494C8.50144 8.54297 8.34536 8.65954 8.13889 8.76465C8.45165 8.87905 8.68895 9.05944 8.8476 9.3076C9.00724 9.55497 9.08707 9.85528 9.08707 10.208C9.08687 10.5727 8.99697 10.8999 8.81382 11.1887ZM13.9269 9.99438H10.7212C10.7388 10.437 10.8917 10.7464 11.1814 10.9234C11.3561 11.0344 11.5679 11.0888 11.816 11.0888C12.0776 11.0888 12.2908 11.0226 12.4548 10.8866C12.5443 10.8145 12.6231 10.713 12.6913 10.5845H13.8663C13.8355 10.8459 13.694 11.1109 13.4397 11.3804C13.0457 11.8085 12.4933 12.0231 11.7838 12.0231C11.1976 12.0231 10.6811 11.8421 10.2328 11.4814C9.7859 11.1194 9.56145 10.5322 9.56145 9.71757C9.56145 8.95374 9.76298 8.3691 10.1672 7.96209C10.5731 7.55429 11.0968 7.35138 11.7423 7.35138C12.125 7.35138 12.47 7.41974 12.7776 7.55725C13.0845 7.69497 13.338 7.91151 13.5377 8.20926C13.7185 8.47145 13.8347 8.77473 13.8888 9.1199C13.9188 9.32123 13.9325 9.61305 13.9269 9.99438Z" fill="black"/></g><defs><clipPath id="clip0_bereal"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>';

export const threadsIcon =
    '<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.98612 6.768C5.68237 6.5655 4.67438 5.86575 4.67438 5.86575C5.52488 4.64963 6.6465 4.176 8.19788 4.176C9.29475 4.176 10.2262 4.54387 10.8911 5.2425C11.556 5.94112 11.9351 6.94012 12.0217 8.217C12.3907 8.37225 12.7301 8.55375 13.0399 8.7615C14.2875 9.59963 14.9738 10.854 14.9738 12.2906C14.9738 15.3461 12.4695 18 7.93575 18C4.04325 18 0 15.7354 0 8.99325C0 2.28825 3.91725 0 7.9245 0C9.77625 0 14.1187 0.273374 15.75 5.6655L14.22 6.06262C12.9555 2.22075 10.3084 1.60875 7.88175 1.60875C3.87112 1.60875 1.602 4.05113 1.602 9.2475C1.602 13.9084 4.13775 16.3834 7.93575 16.3834C11.0599 16.3834 13.3886 14.76 13.3886 12.3829C13.3886 10.7651 12.0296 9.99 11.9599 9.99C11.6944 11.3783 10.9834 13.7137 7.86037 13.7137C6.04012 13.7137 4.47075 12.456 4.47075 10.809C4.47075 8.45775 6.70275 7.60613 8.4645 7.60613C9.12375 7.60613 9.92025 7.65112 10.3354 7.73438C10.3354 7.01775 9.72787 5.79037 8.19788 5.79037C6.79162 5.79037 6.43613 6.246 5.985 6.76687L5.98612 6.768ZM8.6805 9.21375C6.3855 9.21375 6.0885 10.1925 6.0885 10.8068C6.0885 11.7945 7.26188 12.1208 7.8885 12.1208C9.036 12.1208 10.2139 11.8035 10.3995 9.39487C9.83623 9.26346 9.25879 9.20262 8.6805 9.21375Z" fill="black"/></svg>';

export const plusIcon =
    '<svg width="16" height="16" viewBox="0 -960 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill="#000000"/></svg>';
```
```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);
@source "../index.html";

.sample {
    display: grid;
    grid-template-columns: repeat(auto-fit, 21.5rem);
    gap: 2.5rem;
    place-content: center;
    height: 100vh;
}

igc-card:nth-of-type(2) {
    align-self: center;
}

igc-card-header {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    padding: 1rem;
}

igc-card-header::part(header) {
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    justify-content: center;
}

igc-card-header [slot="thumbnail"] {
    margin-inline-end: 1rem;
}

.card-sample-custom-subtitle {
    display: block;
    color: var(--ig-gray-700);
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin: 0 1rem 0.5rem;
}

.stats-title {
    color: var(--ig-gray-900);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
}

.stats-subtitle {
    color: var(--ig-gray-500);
    font-size: 0.875rem;
    line-height: 1.25rem;
}
```

## Accessibility

The avatar is a non-interactive identity visual with accessible image semantics.

### Keyboard Interaction

The avatar does not receive focus and has no keyboard interaction.

| Key | Action |
| -- | -- |
| n/a | The avatar is not keyboard interactive. |

### Screen Readers / ARIA

The avatar initializes with image semantics and a default accessible label of `avatar`.

- Set `alt` when a `src` image represents a specific person, entity, or object.
- Add an explicit `aria-label` when projected custom content needs a different accessible name.
- Treat decorative avatars as redundant when adjacent text already identifies the same entity.

### Accessibility Compliance

Infragistics documents Ignite UI for Web Components accessibility support for Section 508 and WCAG 2.1 guideline areas in the [Accessibility Compliance](../interactivity/accessibility-compliance.md) topic.

| Criterion | How the component complies |
| -- | -- |
| [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content) | The avatar has an accessible label, and image avatars can receive specific alternative text through `alt`. |
| [4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value) | The component initializes with image semantics and exposes content-related ARIA information. |

Your responsibilities:

- Keep sufficient contrast between the avatar background and text or icon color when overriding styles.
- Avoid duplicating the same identity announcement when adjacent text already names the person or entity.

- Provide a descriptive label or `alt` text when the avatar conveys identity.

## Troubleshooting

Use this section to check boundaries and common decisions before treating Avatar as an interactive or status component.

### Known Limitations

The avatar is a visual identity primitive and does not add interaction, status, or notification behavior by itself.

- Use an interactive container, such as a button or list item, when the represented entity must be clickable.
- Use a badge with the avatar when you need to show status, counts, or notification indicators.

## API References

Use these API references for the complete avatar API surface.

[`IgcAvatar`](mcp:get_api_reference?platform=webcomponents&component=IgcAvatarComponent)
[`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent)
[`IgcBadge`](mcp:get_api_reference?platform=webcomponents&component=IgcBadgeComponent)

## Dependencies

Slotted icons require the [`IgcIcon`](mcp:get_api_reference?platform=webcomponents&component=IgcIconComponent) component to be registered or imported.

## Additional Resources

Use these resources for support and related Ignite UI documentation.

- [Ignite UI for Web Components **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-web-components)
- [Ignite UI for Web Components **GitHub**](https://github.com/IgniteUI/igniteui-webcomponents)

## Related Components

Use these related components when identity needs to be combined with status, actions, or richer layout.

- [Badge](../inputs/badge.md) - Use Badge to show counts, status, or notification indicators. Badge can decorate Avatar when the UI needs both identity and status.

## FAQ

  **Q: When should I use Avatar instead of Badge?**

    Use Avatar when the UI needs to represent a person, account, organization, or object. Use Badge when the UI needs to show a count, status, or notification indicator.
  

  **Q: Does Avatar add keyboard interaction?**

    No. Avatar is non-interactive and does not receive focus by itself. Put it inside an interactive component when the represented entity needs an action.
  

  **Q: How should I label image avatars for screen readers?**

    Provide meaningful alternative text when the avatar image identifies a specific entity. Avoid repeating the same identity when adjacent text already names that entity.
  

