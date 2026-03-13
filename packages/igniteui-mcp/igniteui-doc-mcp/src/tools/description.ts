export const description = {
generate_ignite_app: `Creates a new Ignite UI project scaffold with complete structure, dependencies, and configuration files.

**Before using:**Run list_components to find components that match user's desired functionality. (example: If user whants to build a dashboard, you will need to find components like "card", "chart", "tabs" that are commonly used in dashboards and include them in the generated project template.)
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
detect_platform: `Detect the target platform by analyzing dependencies and project config files.

<use_case>
  Use this tool FIRST before generating any theme code to ensure platform-optimized output.
  The detected platform determines the correct Sass module paths and syntax.
</use_case>

<detection_signals>
  Uses multi-signal detection with confidence scoring:
  1. Ignite UI packages (HIGH - 100): igniteui-angular, igniteui-webcomponents, igniteui-react, IgniteUI.Blazor
  2. Config files (MEDIUM-HIGH - 80): angular.json, vite.config.*, next.config.*, .csproj
  3. Framework packages (LOW - 40): @angular/core, react, lit (fallback only)
  4. Generic fallback: When no Ignite UI product is found, returns "generic" for standalone theming
</detection_signals>

<output>
  Returns:
  - platform: "angular" | "webcomponents" | "react" | "blazor" | "generic" | null
  - confidence: "high" | "medium" | "low" | "none"
  - ambiguous: true if multiple Ignite UI platforms detected (requires user to specify explicitly)
  - alternatives: Array of detected platforms when ambiguous
  - signals: Array of detection signals found
  - detectedPackage: The primary package that triggered detection
  - platformInfo: Name, theming module path, and description

  "generic" means no Ignite UI product framework was found. Most tools work in generic mode
  (palette, typography, elevations, theme generation, color references, layout tokens with scope).
  Component-specific tools (create_component_theme, get_component_design_tokens) are NOT available
  in generic mode. The response includes Sass load path guidance based on detected build tooling.
  null is reserved for error states (package.json read failure) or ambiguous multi-product detection.
</output>

<ambiguous_handling>
  When multiple Ignite UI platforms are detected with significant confidence (≥60), returns:
  - platform: null
  - ambiguous: true
  - alternatives: List of possible platforms with their signals
  - Action: User must specify platform explicitly in subsequent tool calls.
</ambiguous_handling>`
};