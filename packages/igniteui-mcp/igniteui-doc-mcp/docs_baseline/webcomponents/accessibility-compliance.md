---
title: Ignite UI for Web Components Accessibility Compliance | Ignite UI for Web Components | Infragistics
_description: Ignite UI for Web Components Accessibility Support and Compliance - Section 508 Compliance, WCAG and ARIA .
_keywords: accessibility, Web Components, ignite ui for Web Components, infragistics
_license: MIT
mentionedTypes: []
_tocName: Accessibility Compliance
---

<style>
.greenCheck {
  content:url("../../images/general/greenCheck.png");
}

.redCheck {
  content:url("../../images/general/redX.png");
}
</style>

# Accessibility Compliance

As the leading global provider of UI and UX tools for developers, our Web Components team at Infragistics is committed to providing components and tools that make it easier for you to create the best possible user experience. Our goal is to enable you to focus on crafting the best applications and the best user experience for all users.

Here you can find specific information regarding the accessibility support and compliance for our Web Components grids, charts, and UI components and controls within Ignite UI for Web Components.

## Section 508 Compliance

[Section 508](http://www.section508.gov/) of the Rehabilitation Act was amended in 1998 by Congress to require all Federal agencies to make their electronic and information technology accessible to people with disabilities. Since then, Section 508 compliance has not only been a requirement in government agencies, but it's also important when providing software solutions and designing Web pages.

Section 1194.22 of the Section 508 law specifically targets Web-based intranet and internet information and systems, and contains a set of 16 rules to follow. In order to enable you to keep your Web applications and Web sites compatible with these rules with minimal effort on your part, Infragistics has taken steps to ensure that the Ignite UI for Web Components controls and components are compliant with the relevant accessibility rules.

The matrix below provides a high-level outline of the accessibility support provided by our visual controls (and related components). To learn more about an individual control/component's accessibility compliance, click the name of the control/component.

### Ignite UI for Web Components Compliance with Section 508

|**Component/Principle**|<a title="A text equivalent for every non-text element shall be provided (e.g., via 'alt', 'longdesc', or in element content)."> (a)</a><br/>|<a title="Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation">(b)</a><br/>|<a title="Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup">(c)</a><br/>|<a title="Documents shall be organized so they are readable without requiring an associated style sheet">(d)</a><br/>|<a title="Redundant text links shall be provided for each active region of a server-side image map">(e)</a><br/>|<a title="Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape">(f)</a><br/>|<a title="Row and column headers shall be identified for data tables">(g)</a><br/>|<a title="Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers">(h)</a><br/>|<a title="Frames shall be titled with text that facilitates frame identification and navigation">(i)</a><br/>|<a title="Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz">(j)</a><br/>|<a title="A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way">(k)</a><br/>|<a title="When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.">(l)</a><br/>|<a title="When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21 (a)">(m)</a><br/>|<a title="When electronic forms are designed to be completed online, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.">(n)</a><br/>|<a title="A method shall be provided that permits users to skip repetitive navigation links.">(o)</a><br/>|<a title="When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required">(p)</a><br/>|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|**Grids**|||||||||||||||||
| - Grid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - HierarchicalGrid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - TreeGrid|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
|**Other**||||||||||<span class="greenCheck" />*|||||||
| - Avatar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Badge|<span class="greenCheck" />||<span class="greenCheck" />|||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Bottom navigation|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Button|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Button group|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Calendar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Card|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Carousel|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - Checkbox|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Chip|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Circular progress|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Combo|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Date time input|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Date picker|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Divider|<span class="greenCheck" />||<span class="greenCheck" />|||||||||<span class="greenCheck" />|||||
| - Dialog|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Drop down|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Expansion panel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Icon|||<span class="greenCheck" />|||||||||<span class="redCheck" />|||||
| - Input|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Input group|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Linear progress|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - List|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Navbar|<span class="greenCheck" />||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Navigation drawer|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Radio group|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Radio|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Select|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|||
| - Slider|||<span class="greenCheck" />|||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Snackbar|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|
| - Switch|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Tabs|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="greenCheck" />||<span class="greenCheck" />|||
| - Time picker|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />|||
| - Toast|||<span class="greenCheck" />|<span class="greenCheck" />||||||<span class="greenCheck" />*||<span class="redCheck" />||<span class="greenCheck" />||<span class="redCheck" />|

**LEGEND**

||||
|---|---|---|
|<span class="greenCheck" />|The control/component is completely accessible in this particular area.||
|<span class="greenCheck" />\*|The control/component is accessible in this particular area after implementing certain configurations| Example: Use **NoopAnimationsModule**utility module to allow disabling of animations|
|<span class="redCheck" />|The control/component is not entirely accessible unless you perform some sort of action.||
|'white space'|this particular rule does not apply to the control||

> \[!WARNING]
> The table above is relevant only to the **Default theme**of Ignite UI for Web Components theming library. The checklist compliance might be different when it comes to custom themes, typography and any visual changes related to animations and colors.

### Compliance Information

- **a** - A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).
- **b** - Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.
- **c** - Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.
- **d** - Documents shall be organized so they are readable without requiring an associated style sheet.
- **e** - Redundant text links shall be provided for each active region of a server-side image map.
- **f** - Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape.
- **g** - Row and column headers shall be identified for data tables.
- **h** - Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.
- **i** - Frames shall be titled with text that facilitates frame identification and navigation.
- **j** - Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.
- **k** - A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes.
- **l** - When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.
- **m** - When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21(a) through l.
- **n** - When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.
- **o** - A method shall be provided that permits users to skip repetitive navigation links.
- **p** - When a timed response is required, the user shall be alerted and given sufficient time to indicate more time is required.

## WCAG compliance

[WCAG](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=111) is simply a set of formal guidelines on how to develop accessible web content. These standards represent a higher level of accessibility than 508 standards, although they are identical or very similar. WCAG focuses primarily on HTML accessibility.

|**Component/Guideline**|<a title="Text Alternatives - Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.">1.1</a><br/>|<a title="Time-based Media - Provide alternatives for time-based media.">1.2</a><br/>|<a title="Adaptable - Create content that can be presented in different ways (for example simpler layout) without losing information or structure">1.3 </a><br/>|<a title="Distinguishable - Make it easier for users to see and hear content including separating foreground from background.">1.4</a><br/>|<a title="Keyboard Accessible - Make all functionality available from a keyboard">2.1</a><br/>|<a title="Enough Time - Provide users enough time to read and use content.">2.2</a><br/>|<a title="Seizures and Physical Reactions - Do not design content in a way that is known to cause seizures or physical reactions.">2.3</a><br/>|<a title="Navigable - Provide ways to help users navigate, find content, and determine where they are">2.4</a><br/>|<a title="Input Modalities - Make it easier for users to operate functionality through various inputs beyond keyboard.<br/>">2.5</a><br/>|<a title="Readable - Make text content readable and understandable">3.1</a><br/>|<a title="Predictable - Make Web pages appear and operate in predictable ways">3.2</a><br/>|<a title="Input Assistance - Help users avoid and correct mistakes">3.3</a><br/>|<a title="Compatible - Maximize compatibility with current and future user agents, including assistive technologies">4.1 </a><br/>|
|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|:--|
|**Grids**||||||||||||||
| - Grid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - HierarchicalGrid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - TreeGrid|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
|**Other**|||||||<span class="greenCheck" />*|||||||
| - Avatar|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Badge|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Banner|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Bottom navigation||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Button||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Button group||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Calendar|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*||<span class="greenCheck" />|
| - Card|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Carousel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Checkbox|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|||
| - Chip||||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Circular progress|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*|||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Combo|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Date time editor||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Date picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Divider|<span class="greenCheck" />||||||||||<span class="greenCheck" />*|||
| - Dialog|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Drop down|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Expansion panel|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Icon||||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Input|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Input group|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />||
| - Label|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Linear progress|<span class="greenCheck" />|||<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*|||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - List|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||||<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Month picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Navbar|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Navigation drawer|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Radio group|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Radio|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Select|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Slider||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Snackbar|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Switch|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Tabs|<span class="greenCheck" />|||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Time picker||||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|<span class="greenCheck" />|<span class="greenCheck" />|
| - Toast|||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="greenCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||
| - Tooltip|<span class="greenCheck" />||<span class="greenCheck" />|<span class="greenCheck" />||<span class="greenCheck" />*|<span class="greenCheck" />*||<span class="redCheck" />|<span class="greenCheck" />|<span class="greenCheck" />*|||

**Legend**

||||
|---|---|---|
|<span class="greenCheck" />|The control/component is completely accessible in this particular area.||
|<span class="greenCheck" />\*|The control/component is accessible in this particular area after implementing certain configurations|Example 1: Guideline 2.2. For certain components additional actions and time parameters should be set; Example 2: Guideline 2.3. Use **NoopAnimationsModule**utility module to allow disabling of animations;|
|<span class="redCheck" />|The control/component is not entirely accessible unless you perform some sort of action.||
|'white space'|this particular rule does not apply to the control||

> \[!WARNING]
> The table above is relevant only to the **Default theme**of Ignite UI for Web Components theming library. The checklist compliance might be different when it comes to custom themes, typography and any visual changes related to animations and colors.

### Compliance Information

- **Principle 1 - Perceivable** - Information and user interface components must be presentable to users in ways they can perceive
  - Guideline 1.1 – **Text Alternatives** - Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.
  - Guideline 1.2 – **Time-based Media** - Provide alternatives for time-based media.
  - Guideline 1.3 – **Adaptable** - Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
  - Guideline 1.4 – **Distinguishable** - Make it easier for users to see and hear content including separating foreground from background.
- **Principle 2 – Operable** - User interface components and navigation must be operable.
  - Guideline 2.1 – **Keyboard Accessible** - Make all functionality available from a keyboard.
  - Guideline 2.2 – **Enough Time** - Provide users enough time to read and use content.
  - Guideline 2.3 – **Seizures and Physical Reactions** - Do not design content in a way that is known to cause seizures or physical reactions.
  - Guideline 2.4 – **Navigable** - Provide ways to help users navigate, find content, and determine where they are.
  - Guideline 2.5 – **Input Modalities** - Make it easier for users to operate functionality through various inputs beyond keyboard.
- **Principle 3 – Understandable** - Information and the operation of the user interface must be understandable.
  - Guideline 3.1 – **Readable** - Make text content readable and understandable.
  - Guideline 3.2 – **Predictable** - Make Web pages appear and operate in predictable ways.
  - Guideline 3.3 – **Input Assistance** - Help users avoid and correct mistakes.
- **Principle 4 – Robust** - Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.
  - Guideline 4.1 – **Compatible** - Maximize compatibility with current and future user agents, including assistive technologies

## WAI-ARIA Support

In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities.
