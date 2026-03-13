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

**Next steps:** cd into folder, run npm install, then npm start.`
};