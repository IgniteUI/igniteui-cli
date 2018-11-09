# [3.0.0](https:///github.com/IgniteUI/igniteui-cli/compare/v2.1.6...v3.0.0) (2018-11-09)

This release brings projects with Ignite UI for Angular 6.2.0 with new features and components, styling updates for Ignite UI for JavaScript projects and other improvements.
A brand new project template type for Ignite UI for Angular with built-in authentication is available and you can read more about it [our wiki](https://github.com/IgniteUI/igniteui-cli/wiki/Angular-Authentication-Project-Template) :tada:.

### Bug Fixes

* **igx-ts:** Rename files extensions and styleUrls from css to scss. ([#399](https:///github.com/IgniteUI/igniteui-cli/issues/399)) ([bbd1a5d](https:///github.com/IgniteUI/igniteui-cli/commit/bbd1a5d))
* **ts-transform:** Properly remove line placeholders after print formatting ([bc5fd8d](https:///github.com/IgniteUI/igniteui-cli/commit/bc5fd8d))
* **angular-wrappers:** Update project dependencies, fix build errors due to older typescript version (PR [#392](https://github.com/IgniteUI/igniteui-cli/pull/392))
* Remove GA from non-global install and uninstall ([c861e28](https:///github.com/IgniteUI/igniteui-cli/commit/c861e28))
* Update ignite-ui-cli.json to use correct project template for both React and jQuery ([ab8a11e](https:///github.com/IgniteUI/igniteui-cli/commit/ab8a11e))



### Features

* **Ignite UI for Angular:**
	* **igx-ts:** Add Tree Grid template. ([#386](https:///github.com/IgniteUI/igniteui-cli/issues/386)) ([9fbf18c](https:///github.com/IgniteUI/igniteui-cli/commit/9fbf18c))
	* **igx-ts:** Add 'Row Editing' feature to the 'Custom Grid' Ignite UI for Angular template (PR [#378](https://github.com/IgniteUI/igniteui-cli/pull/378)), closes [#377](https://github.com/IgniteUI/igniteui-cli/issues/377)
	* **igx-ts:** Add 'Batch Editing' template to the Ignite UI for Angular Grid templates (PR [#379](https://github.com/IgniteUI/igniteui-cli/pull/379)), closes [#377](https://github.com/IgniteUI/igniteui-cli/issues/377)

	* **igx-ts:** Add a "Log In" scenario [#336](https://github.com/IgniteUI/igniteui-cli/issues/336) (PR [#356](https://github.com/IgniteUI/igniteui-cli/issues/356)) ([6e8df34](https://github.com/IgniteUI/igniteui-cli/commit/6e8df34))
	* **igx-ts:** Add Weather Sample scenario [#371](https://github.com/IgniteUI/igniteui-cli/issues/371) ([416810f](https://github.com/IgniteUI/igniteui-cli/commit/416810f))
	* **igx-ts:** Add chips template ([#383](https:///github.com/IgniteUI/igniteui-cli/issues/383)) ([3dafe25](https:///github.com/IgniteUI/igniteui-cli/commit/3dafe25))
	* **igx-ts:** Add Tooltip template ([#385](https:///github.com/IgniteUI/igniteui-cli/issues/385)) ([0d07867](https:///github.com/IgniteUI/igniteui-cli/commit/0d07867))

	* **igx-ts:** Split igx project into base and side-nav extension ([f42c8fa](https://github.com/IgniteUI/igniteui-cli/commit/f42c8fa))
	* **igx-ts:** Add new Side Nav with Authentication project ([ad79ef3](https://github.com/IgniteUI/igniteui-cli/commit/ad79ef3))
	* **igx-ts:** Update projects and templates to igniteui-angular 6.2.0 ([79597b5](https://github.com/IgniteUI/igniteui-cli/commit/79597b5))
	* **igx-ts:** Update templates to igniteui-angular-charts and igniteui-angular-gauges 6.2.x ([7e61f89](https://github.com/IgniteUI/igniteui-cli/commit/7e61f89))
	* **igx-ts:** Update projects to angular cli 6.2.7 ([685f88a](https://github.com/IgniteUI/igniteui-cli/commit/685f88a))
* **projects:** Make templates selectable in step-by-step ([cd98bae](https://github.com/IgniteUI/igniteui-cli/commit/cd98bae))
* **projects:** Add projectTemplate param to new command ([6c20ba9](https://github.com/IgniteUI/igniteui-cli/commit/6c20ba9)), closes [#369](https://github.com/IgniteUI/igniteui-cli/issues/369)
* **jquery:** Updated project styling  ([#328](https://github.com/IgniteUI/igniteui-cli/pull/328))
* **react:** Improve project styling . ([#329](https://github.com/IgniteUI/igniteui-cli/issues/329)) ([49f3d20](https://github.com/IgniteUI/igniteui-cli/commit/49f3d20))






# [2.1.1](https://github.com/IgniteUI/igniteui-cli/compare/v2.1.0...v2.1.1) (2018-09-17)


### Bug Fixes

* Add es7/object in polyfill.ts ([b9a4447](https://github.com/IgniteUI/igniteui-cli/commit/b9a4447))
* Additional Angular Groups Descriptions. ([e182e0b](https://github.com/IgniteUI/igniteui-cli/commit/e182e0b))
* Skip sending 'Back' user choice to GA, closes [#345](https://github.com/IgniteUI/igniteui-cli/issues/345) ([f69bc30](https://github.com/IgniteUI/igniteui-cli/commit/f69bc30))


### Features

* Adding README.md files for all frameworks and proj types. ([5ab1528](https://github.com/IgniteUI/igniteui-cli/commit/5ab1528))

<a name="2.1.0"></a>
# [2.1.0](https://github.com/IgniteUI/igniteui-cli/compare/v2.1.0...v2.0.0) (2018-08-17)


### Bug Fixes

* **step-by-step:** add an end separator for longer lists ([76aa019](https://github.com/IgniteUI/igniteui-cli/commit/76aa019))
* **step-by-step, igx:** select Grids & Lists group by default ([3d368d9](https://github.com/IgniteUI/igniteui-cli/commit/3d368d9))
* **templates:angular:** active features no longer shows up if no features are selected in Custom Grid Template ([bb0ba68](https://github.com/IgniteUI/igniteui-cli/commit/bb0ba68))
* **templates:angular:** add module dependencies to angular templates, [#321](https://github.com/IgniteUI/igniteui-cli/issues/321) ([6dd15cd](https://github.com/IgniteUI/igniteui-cli/commit/6dd15cd))
* **templates:angular:** more blank space before URL in featureUrls array ([0625a66](https://github.com/IgniteUI/igniteui-cli/commit/0625a66))
* **templates:angular:** update readme links in angular templates, [#321](https://github.com/IgniteUI/igniteui-cli/issues/321) ([34311e5](https://github.com/IgniteUI/igniteui-cli/commit/34311e5))


### Features

* **templates:calendar:** add a template for igxCalendar [#333](https://github.com/IgniteUI/igniteui-cli/issues/333) ([e281fe0](https://github.com/IgniteUI/igniteui-cli/commit/e281fe0))
* **templates:dialog:** add a dialog template ([7f1d5ab](https://github.com/IgniteUI/igniteui-cli/commit/7f1d5ab))
* **templates:dropdown:** add a dropdown template [#337](https://github.com/IgniteUI/igniteui-cli/issues/337) ([f58f92d](https://github.com/IgniteUI/igniteui-cli/commit/f58f92db6d22fc383b3d5833a7ab35aa10ed40ef))
* **templates:grid multicolumn headers:** add multicolumn headers template [#340](https://github.com/IgniteUI/igniteui-cli/issues/340) ([e1acab5](https://github.com/IgniteUI/igniteui-cli/commit/e1acab58da9b8b07abc403145b19355750c58c8b))
* **templates:input group:** add input group form view template [#338](https://github.com/IgniteUI/igniteui-cli/issues/338) ([062875e](https://github.com/IgniteUI/igniteui-cli/commit/062875ed91f5c797a18c882c30de9667c2d4d755))
* **templates:tabs:** add tabs template [#335](https://github.com/IgniteUI/igniteui-cli/issues/335) ([062875e](https://github.com/IgniteUI/igniteui-cli/commit/062875ed91f5c797a18c882c30de9667c2d4d755)) ([38105e9](https://github.com/IgniteUI/igniteui-cli/commit/38105e9355a881c6edfcfef04dc5115989437571))
* **step-by-step:** add `groupPriority` to sort components within a group [#303](https://github.com/IgniteUI/igniteui-cli/issues/303) ([ca77f5b](https://github.com/IgniteUI/igniteui-cli/commit/ca77f5b))
* **templates:angular:** add links to documentation on enabled features in custom grid template ([d1e94b2](https://github.com/IgniteUI/igniteui-cli/commit/d1e94b2))
* add a ComponentGroup interface to describe groups in step by step ([71d3535](https://github.com/IgniteUI/igniteui-cli/commit/71d3535))

* **templates: radial gauge/lineargauge/bulletgraph** Add sample templates for Radial and Linear Gauge and Bulletgraph [#319](https://github.com/IgniteUI/igniteui-cli/issues/319) ([4986508](https://github.com/IgniteUI/igniteui-cli/commit/49865087fa0b77f12999d010999535d78bfc373f))
* **step-by-step** Default project names and components have uniquie name suggestion based on the folder structure [#215](https://github.com/IgniteUI/igniteui-cli/issues/215) [#216](https://github.com/IgniteUI/igniteui-cli/issues/216) ([d779991](https://github.com/IgniteUI/igniteui-cli/commit/d779991fbd40303e25c3d558bff132312f5ca989))
* **step-by-step** Update default project name to IG Project [#216](https://github.com/IgniteUI/igniteui-cli/issues/216) ([fbf7d4a](https://github.com/IgniteUI/igniteui-cli/commit/fbf7d4a))
* **step-by-step** add descriptions to the groups, compoents and templates. [#218](https://github.com/IgniteUI/igniteui-cli/issues/218) ([1768729](https://github.com/IgniteUI/igniteui-cli/commit/176872969b7d9de8e1110c3acca26d744f0e93e1))


# [2.0.0](https://github.com/IgniteUI/igniteui-cli/compare/v1.3.4...v2.0.0) (2018-07-20)


### Bug Fixes

* **igx-ts:** make sure the content contained stretches to the available space ([9c34970](https://github.com/IgniteUI/igniteui-cli/commit/9c34970))
* **igx-ts:** properly generate angular.json with project name ([89cd0c7](https://github.com/IgniteUI/igniteui-cli/commit/89cd0c7))
* **igx-ts:** Keep "**" wildcard last position when adding new routes ([4a3282a](https://github.com/IgniteUI/igniteui-cli/commit/4a3282a))
* **igx-grid:** Basic Grid template: change the date column values with real dates ([917c727](https://github.com/IgniteUI/igniteui-cli/commit/917c727))
* **igx-charts:** add animations module to spec imports ([785e035](https://github.com/IgniteUI/igniteui-cli/commit/785e035))


### Features

* add `ng update` migration schematic ([5bb5dc7](https://github.com/IgniteUI/igniteui-cli/commit/5bb5dc7))

  You can now run `ng update igniteui-cli` in Ignite UI for Angular projects. This will also update installed `igniteui-angular` and `igniteui-angular-charts` packages.
* **step by step:** add 'Back' option when adding a Component or View in the Step by step mode, closes [#293](https://github.com/IgniteUI/igniteui-cli/issues/293) ([5931f98](https://github.com/IgniteUI/igniteui-cli/commit/5931f98), [bdcbc18](https://github.com/IgniteUI/igniteui-cli/commit/bdcbc18))
* **add command:** add support for choosing destination module in Angular projects [#273](https://github.com/IgniteUI/igniteui-cli/issues/273) ([c60f017](https://github.com/IgniteUI/igniteui-cli/commit/c60f017))
* **start command:** Select port to run via start command or Step by step mode [#272](https://github.com/IgniteUI/igniteui-cli/issues/272) ([#308](https://github.com/IgniteUI/igniteui-cli/pull/308))

* **igx-ts:** Update Ignite UI for Angular project to 6.1.1 ([38bd53f](https://github.com/IgniteUI/igniteui-cli/commit/38bd53f))
* **igx-ts:** Update project to latest Angular CLI 6.0.8 ([79103ad](https://github.com/IgniteUI/igniteui-cli/commit/79103ad))
* **igx-charts:** Update Ignite UI for Angular charts for new 6.x package ([6581aa7](https://github.com/IgniteUI/igniteui-cli/commit/6581aa7))
* **igx-ts:** Optional theme support for Ignite UI for Angular projects, closes [#272](https://github.com/IgniteUI/igniteui-cli/issues/272) ([c94e1a6](https://github.com/IgniteUI/igniteui-cli/commit/c94e1a6))
* **igx-ts:** Added 404 routing and view ([e2fbafd](https://github.com/IgniteUI/igniteui-cli/commit/e2fbafd))
* **igx-ts:** Added routing on uncaught error. ([37f9062](https://github.com/IgniteUI/igniteui-cli/commit/37f9062))
* **igx-ts:** Add template for `IgxCombo` ([#301](https://github.com/IgniteUI/igniteui-cli/issues/301)) ([65721a8](https://github.com/IgniteUI/igniteui-cli/commit/65721a8)), closes [#298](https://github.com/IgniteUI/igniteui-cli/issues/298)
* **igx-ts:** Monster Grid view updated with search functionality and renamed to "CRM Grid". [#287](https://github.com/IgniteUI/igniteui-cli/issues/287) ([#288](https://github.com/IgniteUI/igniteui-cli/issues/288)) ([992bda3](https://github.com/IgniteUI/igniteui-cli/commit/992bda3))


* **jquery:** Changing the menu from horizontal to vertical + improvements for jQuery projects [#211](https://github.com/IgniteUI/igniteui-cli/issues/211) ([#307](https://github.com/IgniteUI/igniteui-cli/pull/307))
* **react:** Changing the menu from horizontal to vertical + improvements for React projects ([019f0e7](https://github.com/IgniteUI/igniteui-cli/commit/019f0e7))
* **angular-wrappers:** Changing the menu from horizontal to vertical + improvements for Angular Wrappers projects [#279](https://github.com/IgniteUI/igniteui-cli/issues/279) ([#316](https://github.com/IgniteUI/igniteui-cli/pull/316))


<a name="1.3.2"></a>
# [1.3.2](https://github.com/IgniteUI/igniteui-cli/compare/v1.3.1...v1.3.2) (2018-06-12)


### Bug Fixes
* update Monster Grid styling due to api changes. ([2294d88](https://github.com/IgniteUI/igniteui-cli/commit/2294d88))
* add excel dependencies in jQuery templates and fix exporting samples ([8a21e78](https://github.com/IgniteUI/igniteui-cli/commit/8a21e78))
* add custom parameters to Google Analytics ([ce93114](https://github.com/IgniteUI/igniteui-cli/commit/ce93114))


### Features
* update Ignite UI for Angular to 6.0.0 and project to Angular 6 ([f878c37](https://github.com/IgniteUI/igniteui-cli/commit/f878c37))
* update Ignite UI Angular wrappers project to Angular 6 [7868d8f](https://github.com/IgniteUI/igniteui-cli/commit/7868d8f)
* update Ignite UI for JavaScript to 18.1 in jQuery, React and Angular wrappers projects ([16afac22](https://github.com/IgniteUI/igniteui-cli/commit/16afac22), [1c91a4d](https://github.com/IgniteUI/igniteui-cli/commit/1c91a4d), [65b8190](https://github.com/IgniteUI/igniteui-cli/commit/65b8190))
* update quickstart projects ([84d8fc9](https://github.com/IgniteUI/igniteui-cli/commit/84d8fc9))


<a name="1.3.0"></a>
# [1.3.0](https://github.com/IgniteUI/igniteui-cli/compare/v1.2.1...v1.3.0) (2018-04-30)


### Bug Fixes

* **igniteui-angular:** Swap proj name and welcome msg. e2e test for app host. ([846acdc](https://github.com/IgniteUI/igniteui-cli/commit/846acdc))
* **igniteui-angular:** lint, typescript transforms respect editorconfig/tslint ([2f6ba24](https://github.com/IgniteUI/igniteui-cli/commit/2f6ba24))
* **igniteui-angular:** Fix igx tests caused by modules renaming. ([ccaf0ec](https://github.com/IgniteUI/igniteui-cli/commit/ccaf0ec))
* **igx-tab:** rename igx-tab to igx-bottom-nav ([7cd792e](https://github.com/IgniteUI/igniteui-cli/commit/7cd792e)), closes [#244](https://github.com/IgniteUI/igniteui-cli/issues/244)
* **igniteui-angular-wrappers:** Grid Templating DS file update because of naming collitions and Chart template fix. ([97bbd2f](https://github.com/IgniteUI/igniteui-cli/commit/97bbd2f))
* **igniteui-angular-wrappers:** enable hierarchical for feature generation ([90014b8](https://github.com/IgniteUI/igniteui-cli/commit/90014b8))
* fix for set command to set empty array to an array type property instead of string like "[]" ([d4de501](https://github.com/IgniteUI/igniteui-cli/commit/d4de501))
* jQuery package name generation, apply to react/angular wrappers ([2a5537c](https://github.com/IgniteUI/igniteui-cli/commit/2a5537c))
* local config check when cwd is user folder (global) ([bfcbbec](https://github.com/IgniteUI/igniteui-cli/commit/bfcbbec))
* prevent templates from being loaded again when updating projects ([0b81ec2](https://github.com/IgniteUI/igniteui-cli/commit/0b81ec2))


### Features

* add doc command ([d19ef81](https://github.com/IgniteUI/igniteui-cli/commit/d19ef81)), closes [#66](https://github.com/IgniteUI/igniteui-cli/issues/66)
* add list command ([#203](https://github.com/IgniteUI/igniteui-cli/issues/203)) ([1f532ef](https://github.com/IgniteUI/igniteui-cli/commit/1f532ef))
* add `ig test` command and project setup [#69](https://github.com/IgniteUI/igniteui-cli/issues/69):
	* **igniteui-angular:** add e2e flag for igx-ts framework. ([16f1be1](https://github.com/IgniteUI/igniteui-cli/commit/16f1be1)) [#69](https://github.com/IgniteUI/igniteui-cli/issues/69)
	* **igniteui-angular-wrappers:** Initial angular-wrappers test config and BarChart test. ([e283375](https://github.com/IgniteUI/igniteui-cli/commit/e283375))
	* **igniteui-angular-wrappers:** ig-ts project - add initial unit tests for components. ([881948b](https://github.com/IgniteUI/igniteui-cli/commit/881948b))
	* **jquery:** Initial jQuery test configuration for Karma and QUnit. ([168a6e7](https://github.com/IgniteUI/igniteui-cli/commit/168a6e7))
	* **react:** Initial react test configuration for Jest and Enzyme. ([322c558](https://github.com/IgniteUI/igniteui-cli/commit/322c558))
* **igniteui-angular:** new dependency objects for Ignite UI for Angular templates ([a8e2200](https://github.com/IgniteUI/igniteui-cli/commit/a8e2200)) [#200](https://github.com/IgniteUI/igniteui-cli/issues/200)
* **igniteui-angular:** allow template variables in igniteui-angular template dependencies ([2bddcd7](https://github.com/IgniteUI/igniteui-cli/commit/2bddcd7)) [#200](https://github.com/IgniteUI/igniteui-cli/issues/200)
* **igniteui-angular:** add `igx-time-picker` template with initial value ([ef15214](https://github.com/IgniteUI/igniteui-cli/commit/ef15214))
* **igniteui-angular:** add Category and Financial Chart templates ([1ac7eba](https://github.com/IgniteUI/igniteui-cli/commit/1ac7eba)), closes [#251](https://github.com/IgniteUI/igniteui-cli/issues/251) [#252](https://github.com/IgniteUI/igniteui-cli/issues/252)
* **igniteui-angular:** add Custom Grid template with selectable features ([d2bcfda](https://github.com/IgniteUI/igniteui-cli/commit/d2bcfda))
* **igniteui-angular:** enable required IE11 polyfills by default [#250](https://github.com/IgniteUI/igniteui-cli/issues/250) ([0098bb0](https://github.com/IgniteUI/igniteui-cli/commit/0098bb0))
* **igniteui-angular:** Update awesome grid to latest sample state. ([03bcc4d](https://github.com/IgniteUI/igniteui-cli/commit/03bcc4d))
* add Google Analytic to CLI application ([0127684](https://github.com/IgniteUI/igniteui-cli/commit/0127684))
* add npm package dependencies support for templates ([0b65ed9](https://github.com/IgniteUI/igniteui-cli/commit/0b65ed9)) [#192](https://github.com/IgniteUI/igniteui-cli/issues/192)
* add validation for configuration options in config set command ([2a43650](https://github.com/IgniteUI/igniteui-cli/commit/2a43650))


### BREAKING CHANGES

* **igx-tab:** Template id `tabbar` is renamed to `bottom-nav`

<a name="1.2.1"></a>
## [1.2.1](https://github.com/IgniteUI/igniteui-cli/compare/v1.2.1-beta.0...v1.2.1) (2018-03-02)


### Bug Fixes

* change the regex to allow single letter name ([9a3585d](https://github.com/IgniteUI/igniteui-cli/commit/9a3585d))
* ignore child process output/error; put check; ([1c724b3](https://github.com/IgniteUI/igniteui-cli/commit/1c724b3))
* manually rename gitignore on create to avoid npm install renaming ([05a6b28](https://github.com/IgniteUI/igniteui-cli/commit/05a6b28)), closes [#122](https://github.com/IgniteUI/igniteui-cli/issues/122)
* **igx-tabbar:** add content width restriction to align text content ([926ff6d](https://github.com/IgniteUI/igniteui-cli/commit/926ff6d))
* **igx-ts:** fix for scss compilation error in igniteui-angular@5.2.1 ([e9aca96](https://github.com/IgniteUI/igniteui-cli/commit/e9aca96))

# [1.2.1](https://github.com/IgniteUI/igniteui-cli/compare/844e28b69e2f1c52925d5e93cb4bacb7fe2933d0...v1.2.1) (2018-03-01)


### Bug Fixes

* merge util typo ([c6ddc1b](https://github.com/IgniteUI/igniteui-cli/commit/c6ddc1b))
* **build:** CI node 8, for npm@5.4+ to correctly pack `.gitignore` files ([bdf6afc](https://github.com/IgniteUI/igniteui-cli/commit/bdf6afc))


### Features

* add skipGit configuration option ([cc9ca96](https://github.com/IgniteUI/igniteui-cli/commit/cc9ca96)), closes [#180](https://github.com/IgniteUI/igniteui-cli/issues/180)

<a name="1.2.0"></a>
# [1.2.0](https://github.com/IgniteUI/igniteui-cli/compare/v1.0.10-beta.1...v1.2.0) (2018-02-27)


### Bug Fixes

* add new options to the command and rename to skip-git ([3404a6d](https://github.com/IgniteUI/igniteui-cli/commit/3404a6d))
* add value to datepicker template. ([e399241](https://github.com/IgniteUI/igniteui-cli/commit/e399241))
* Adding new lines ([b744b67](https://github.com/IgniteUI/igniteui-cli/commit/b744b67))
* Change selector for all angular (ig-ts and igx-ts) templates to 	selector: "$(filePrefix)" ([a7d7381](https://github.com/IgniteUI/igniteui-cli/commit/a7d7381))
* Change Util.Merge method to correctly merge arrays and objects. ([45c6afa](https://github.com/IgniteUI/igniteui-cli/commit/45c6afa))
* Enable toggle igx-switch. ([c1e3495](https://github.com/IgniteUI/igniteui-cli/commit/c1e3495))
* fix expected test message ([472d76c](https://github.com/IgniteUI/igniteui-cli/commit/472d76c))
* Fixing a typo in the "Tree grid" component name for jQuery projects ([55028e5](https://github.com/IgniteUI/igniteui-cli/commit/55028e5))
* Import 'effect-blind' ([f8cb344](https://github.com/IgniteUI/igniteui-cli/commit/f8cb344))
* Inclide required module for awesome grid template. ([4caeea2](https://github.com/IgniteUI/igniteui-cli/commit/4caeea2))
* Include latest sample fixes. ([363919b](https://github.com/IgniteUI/igniteui-cli/commit/363919b))
* Minor fixes; ([695df84](https://github.com/IgniteUI/igniteui-cli/commit/695df84))
* minor util validation assets glob update ([66de2ec](https://github.com/IgniteUI/igniteui-cli/commit/66de2ec))
* Moving calssName to Util ([a41b09b](https://github.com/IgniteUI/igniteui-cli/commit/a41b09b))
* Parse correctly component name when name contains dashes ([890362e](https://github.com/IgniteUI/igniteui-cli/commit/890362e))
* React add descriptions. Fix wrong descriptions. ([0146b07](https://github.com/IgniteUI/igniteui-cli/commit/0146b07))
* Refactor styles, remove containers. ([8a88bd6](https://github.com/IgniteUI/igniteui-cli/commit/8a88bd6))
* remove skip-commit option from command definition ([eb76a58](https://github.com/IgniteUI/igniteui-cli/commit/eb76a58))
* removed optional positional commands for framework, type and skip-config ([707de4c](https://github.com/IgniteUI/igniteui-cli/commit/707de4c))
* Selectors form angular (igx-ts) templates are removed ([7e2b4cd](https://github.com/IgniteUI/igniteui-cli/commit/7e2b4cd))
* set responsive directives and styles for home and .. ([8c9ad6b](https://github.com/IgniteUI/igniteui-cli/commit/8c9ad6b))
* Specify columns because of hierarchical DS. ([0cb89d8](https://github.com/IgniteUI/igniteui-cli/commit/0cb89d8))
* Temp fix so we have live data once Re-enabled. ([53c197c](https://github.com/IgniteUI/igniteui-cli/commit/53c197c))
* tslint errors. ([53b965c](https://github.com/IgniteUI/igniteui-cli/commit/53b965c))
* Unify purple-ish colors. ([28c58a5](https://github.com/IgniteUI/igniteui-cli/commit/28c58a5))
* Update igCombo data to export options. ([0c7eff3](https://github.com/IgniteUI/igniteui-cli/commit/0c7eff3))
* update igniteui-angular with 5.2.0-beta.0; nav drawer directive; include fonts; other fixes; ([4cfbd83](https://github.com/IgniteUI/igniteui-cli/commit/4cfbd83))
* Update supported image extensions. ([2fb2c27](https://github.com/IgniteUI/igniteui-cli/commit/2fb2c27))
* update to IgxNavigationDrawerModule so it matches latest refactoring. ([4d756ca](https://github.com/IgniteUI/igniteui-cli/commit/4d756ca))
* Updating to meaningful descriptions. ([0500b11](https://github.com/IgniteUI/igniteui-cli/commit/0500b11))
* use cwd parameter ([17bbc5a](https://github.com/IgniteUI/igniteui-cli/commit/17bbc5a))
* validateTemplate outputPath. Update editors description. ([d540ad2](https://github.com/IgniteUI/igniteui-cli/commit/d540ad2))
* wrong list dependencies ([3c06077](https://github.com/IgniteUI/igniteui-cli/commit/3c06077))


### Features

* `config add` sub command for array values ([50c0a98](https://github.com/IgniteUI/igniteui-cli/commit/50c0a98))
* add angular template for list ([8ea99e5](https://github.com/IgniteUI/igniteui-cli/commit/8ea99e5))
* Add combo and css, rearrange btn. ([3f48cb5](https://github.com/IgniteUI/igniteui-cli/commit/3f48cb5))
* add config get/set commands ([da56ec1](https://github.com/IgniteUI/igniteui-cli/commit/da56ec1))
* add description placeholder for Angular templates. ([0b596fd](https://github.com/IgniteUI/igniteui-cli/commit/0b596fd))
* Add generate command ([dfda0bc](https://github.com/IgniteUI/igniteui-cli/commit/dfda0bc))
* Add generate command ([c778b3a](https://github.com/IgniteUI/igniteui-cli/commit/c778b3a))
* Add generate command ([bc78baa](https://github.com/IgniteUI/igniteui-cli/commit/bc78baa))
* Add generate command ([f750832](https://github.com/IgniteUI/igniteui-cli/commit/f750832))
* Add generate command ([75fe4ef](https://github.com/IgniteUI/igniteui-cli/commit/75fe4ef))
* Add generate command ([88c8f82](https://github.com/IgniteUI/igniteui-cli/commit/88c8f82))
* Add generate command ([3e8465e](https://github.com/IgniteUI/igniteui-cli/commit/3e8465e))
* Add generate command ([20c7210](https://github.com/IgniteUI/igniteui-cli/commit/20c7210))
* Add generate command ([127c3f1](https://github.com/IgniteUI/igniteui-cli/commit/127c3f1))
* Add generate command ([34591a9](https://github.com/IgniteUI/igniteui-cli/commit/34591a9))
* Add generate command ([a94f175](https://github.com/IgniteUI/igniteui-cli/commit/a94f175))
* Add generate command ([8298acf](https://github.com/IgniteUI/igniteui-cli/commit/8298acf))
* Add generate command ([8dfc918](https://github.com/IgniteUI/igniteui-cli/commit/8dfc918))
* Add generate command ([d9d4fca](https://github.com/IgniteUI/igniteui-cli/commit/d9d4fca))
* Add generate command ([3622444](https://github.com/IgniteUI/igniteui-cli/commit/3622444))
* add initial logic to load custom templates from json ([bce46f8](https://github.com/IgniteUI/igniteui-cli/commit/bce46f8))
* Add styling . ([7245f37](https://github.com/IgniteUI/igniteui-cli/commit/7245f37))
* add Tabbar template ([92f8b6b](https://github.com/IgniteUI/igniteui-cli/commit/92f8b6b))
* Adding a date picker template for Ignite UI for Angular ([118c7e7](https://github.com/IgniteUI/igniteui-cli/commit/118c7e7))
* Adding angular list template ([1be1fa0](https://github.com/IgniteUI/igniteui-cli/commit/1be1fa0))
* Adding generate command ([8bc3091](https://github.com/IgniteUI/igniteui-cli/commit/8bc3091))
* Allow sorting the Severity row in "Patients" view of ER Dashboard view ([ed178a5](https://github.com/IgniteUI/igniteui-cli/commit/ed178a5))
* Angular update to description. ([c69e0b1](https://github.com/IgniteUI/igniteui-cli/commit/c69e0b1))
* Init commit ([aa30b11](https://github.com/IgniteUI/igniteui-cli/commit/aa30b11))
* Initial commit for BaseProjectLibrary unit tests + renaming getCustomTemplates() to getCustomTemplateNames() ([601d3ff](https://github.com/IgniteUI/igniteui-cli/commit/601d3ff))
* jQuery another update to description placeholder. ([a12af76](https://github.com/IgniteUI/igniteui-cli/commit/a12af76))
* jQuery update to description placeholder. ([93a7c69](https://github.com/IgniteUI/igniteui-cli/commit/93a7c69))
* **global-config:** intitial config methods and defaults ([95f55b6](https://github.com/IgniteUI/igniteui-cli/commit/95f55b6))
* **igx-ts:** auto-close nav drawer when not pinned (mobile) ([c5ffe1f](https://github.com/IgniteUI/igniteui-cli/commit/c5ffe1f))
* update empty project descriptions. ([d2ce94f](https://github.com/IgniteUI/igniteui-cli/commit/d2ce94f))
* Update the structure using NavBar and NavDrawer. Add overall css. ([beafbb4](https://github.com/IgniteUI/igniteui-cli/commit/beafbb4))
* update to igniteui-angular 5.2.0-beta.1 ([7254119](https://github.com/IgniteUI/igniteui-cli/commit/7254119))
