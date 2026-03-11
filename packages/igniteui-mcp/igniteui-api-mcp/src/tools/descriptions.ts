export const TOOL_DESCRIPTIONS = {
  get_api_reference: `
  <overview>
    Get the complete API reference documentation for an IgniteUI component, class, interface, or enum.
  </overview>

  <naming_conventions>
    Component names follow strict platform-specific prefixes:
    - Angular: Igx prefix (e.g., IgxGridComponent, IgxButtonComponent, IgxCarouselComponent)
    - Web Components: Igc prefix (e.g., IgcGridComponent, IgcButtonComponent, IgcCarouselComponent)
    - React: Igr prefix (e.g., IgrDataGrid, IgrButton, IgrCarousel)

    The prefix MUST match the platform parameter.
  </naming_conventions>

  <parameters>
    1. platform:
      - Must be one of: "angular" or "webcomponents"
      - MUST match the component prefix:
        - platform="angular" → component starts with "Igx"
        - platform="webcomponents" → component starts with "Igc"
      - If you used search_api, extract platform from the brackets in results
        Example: "IgcButtonComponent [webcomponents]" → use platform="webcomponents"

    2. component:
      - Exact component name (case-sensitive)
      - Must include full name with Component suffix when present
      -  Examples: "IgxGridComponent", "IgcButtonComponent" (NOT "IgxGrid" or "Button")

    3. section:
      - Return only a specific section: "properties", "methods", "events", or "all"
      - Default: "all" (returns complete documentation)
  </parameters>

  <workflow>
    If you found component via search_api:
    1. Look at search result: "ComponentName [platform] [type]"
    2. Extract platform from brackets: [webcomponents] → platform="webcomponents"
    3. Extract exact component name: IgcButtonComponent
    4. Call: get_api_reference(platform="webcomponents", component="IgcButtonComponent")
  </workflow>
  `,
  search_api: `
  <overview>
    Search for IgniteUI components and APIs by keyword, feature, or partial name across all platforms.
  </overview>

  <usage_guidelines>
    Use search_api when:
    - You don't know the exact component name
      Example: User says "carousel" but you need "IgxCarouselComponent"
    - User asks vague questions
      Example: "What components are available for date selection?"
    - You need to verify a component exists before calling get_api_reference
    - You want to discover related components
      Example: Search "grid" to find IgxGridComponent, IgxTreeGridComponent, etc.
    - User mentions a feature but not a specific component
      Example: "components with filtering" or "date picker"
  </usage_guidelines>

  <parameters>
    1. query (required):
      - Search keywords, partial names, or features
      - Searches across: component names, descriptions, types, and keywords
      - Case-insensitive
      - Examples: "button", "carousel", "grid filtering", "date picker"

    2. platform (optional):
      - Limit search to specific platform: "angular" or "webcomponents"
      - Omit to search across all platforms
      - Use when: user explicitly mentions a platform, or you want to narrow results
  </parameters>

  <result_format>
    Each result shows:
    ComponentName [platform] [type] (X matches)
    Keywords: keyword1, keyword2
    Excerpt: ...relevant text snippet...

    Example result:
    IgcButtonComponent [webcomponents] [class] (5 matches)
    Keywords: button, click, action
    Excerpt: ...Button component for user interactions...

    IMPORTANT: The [platform] bracket tells you which platform this component belongs to.
  </result_format>

  <workflow>
    Standard workflow for finding and using a component:
    1. search_api(query="your search term")
    2. Read results and identify the component you need
    3. Extract platform from [brackets] in the result
    4. Extract exact ComponentName from the result
    5. Call get_api_reference(platform=<from_brackets>, component=<exact_name>)

    Example:
    1. search_api(query="button")
    2. See result: "IgcButtonComponent [webcomponents] [class]"
    3. Extract: platform="webcomponents", component="IgcButtonComponent"
    4. get_api_reference(platform="webcomponents", component="IgcButtonComponent")
  </workflow>

  <naming_reference>
    Platform shown in brackets maps to component prefixes:
    - [angular] → Components start with Igx (IgxButtonComponent, IgxGridComponent)
    - [webcomponents] → Components start with Igc (IgcButtonComponent, IgcGridComponent)
    - [react] → Components start with Igr (IgrButton, IgrDataGrid)
  </naming_reference>

  <critical_reminders>
    - ALWAYS extract platform from the [brackets] in search results
    - NEVER ignore the platform shown in search results
    - The [platform] bracket is the source of truth for which platform to use
    - Component prefix (Igx/Igc/Igr) must match the platform
  </critical_reminders>
`
} as const;