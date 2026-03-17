export const TOOL_DESCRIPTIONS = {
  generate_ignite_app: `Creates a new Ignite UI project scaffold with complete structure, dependencies, and configuration files.

  **Before using:** Run list_components to find components that match user's desired functionality. (example: If user wants to build a dashboard, you will need to find components like "card", "chart", "tabs" that are commonly used in dashboards and include them in the generated project template.)
  or run get_cli_templates_list to find valid templateId values for your CLI version and use those in the generated project template.

  **Best for:** Starting new projects from scratch, creating greenfield applications.

  **Returns:** Project folder with package.json, source files, and configuration.

  **Parameters:**
  - name: REQUIRED project folder name (alphanumeric, -, _)
  - framework: angular | react | webcomponents
  - type: OPTIONAL template type. Defaults: Angular='igx-ts', React='igr-ts', WebComponents='igc-ts'
  - template: If not provided use base template.
  - outputPath: OPTIONAL absolute or relative path where the project should be created.

  **Next steps:** cd into folder, run npm install, then npm start.`,
  get_api_reference: `
  <overview>
      Retrieve the full API reference for one Ignite UI component or class. Supports angular, react, and webcomponents. Component name matching is case-insensitive.
  </overview>

  <when_to_use>
      Use this when you already know the component name (e.g. from a search_api result or from the user's code). If you only have a keyword, feature, or partial name, run search_api first to discover the exact name and platform.
  </when_to_use>

  <returns>
      Formatted markdown for the requested API entry. The full entry (section="all") includes the class/interface summary, properties with types and descriptions, methods with signatures, and events. Use section="properties", "methods", or "events" to retrieve a single section and reduce response size.
  </returns>

  <constraints>
      Blazor is currently not supported — covers angular, react, and webcomponents only. Component name must be ≤128 characters. Returns isError if the component is not found, with a prompt to use search_api.
  </constraints>

  <workflow>
      Typical follow-up to search_api: take the exact component name and platform from a search result, then call get_api_reference.
  </workflow>
  `,
  search_api: `
  <overview>
      Search Ignite UI API entries by keyword, feature, or partial component name across angular, react, and webcomponents. Returns up to 10 results ranked by match count.
  </overview>

  <when_to_use>
      Use this as the discovery step when the exact component name is unknown, when you want to narrow candidates, or when you want to confirm which platform an entry belongs to. Once you have a result, call get_api_reference with the exact name and platform.
      Do NOT use this if you already know the exact component name — call get_api_reference directly.
  </when_to_use>

  <returns>
      Up to 10 text results ranked by match count. Each result includes the exact component name, platform tag, API type (class/interface/directive/enum), match count, keyword list, and a content excerpt. Use the component name and platform from a result to call get_api_reference.
  </returns>

  <constraints>
      Blazor is currently not supported. Omit platform to search all three platforms simultaneously. Search matches against component names, keywords, API type, and document content. Output is text, not structured JSON. Maximum query length is 256 characters.
  </constraints>
  `
};