<a name="1.3.0"></a>
# [1.3.0](https://github.com/IgniteUI/igniteui-cli/compare/v1.2.1...v1.3.0) (2018-04-24)


### Bug Fixes

* Add ts-node package ([16dc9db](https://github.com/IgniteUI/igniteui-cli/commit/16dc9db))
* Await for test command. Cleanup. ([154030c](https://github.com/IgniteUI/igniteui-cli/commit/154030c))
* DS file update because of naming collitions and Chart template fix. ([97bbd2f](https://github.com/IgniteUI/igniteui-cli/commit/97bbd2f))
* e2e test for app host. Swap proj name and welcome msg. ([846acdc](https://github.com/IgniteUI/igniteui-cli/commit/846acdc))
* fix additional failing tests ([6feee86](https://github.com/IgniteUI/igniteui-cli/commit/6feee86))
* fix falling test ([13fa075](https://github.com/IgniteUI/igniteui-cli/commit/13fa075))
* fix for set command to set empty array to an array type property instead of string like "[]" ([d4de501](https://github.com/IgniteUI/igniteui-cli/commit/d4de501))
* in installPackages method enable skipAnalytic in order to not send data before npm install, and disable it after ([c0b5a16](https://github.com/IgniteUI/igniteui-cli/commit/c0b5a16))
* jQuery package name generation, apply to react/angular wrappers ([2a5537c](https://github.com/IgniteUI/igniteui-cli/commit/2a5537c))
* local config check when cwd is user folder (global) ([bfcbbec](https://github.com/IgniteUI/igniteui-cli/commit/bfcbbec))
* on publish safe updated package.json in correct folder ([61920fa](https://github.com/IgniteUI/igniteui-cli/commit/61920fa))
* prevent templates from being loaded again when updating projects ([0b81ec2](https://github.com/IgniteUI/igniteui-cli/commit/0b81ec2))
* actually add version variable to project template [not released] ([f510ab2](https://github.com/IgniteUI/igniteui-cli/commit/f510ab2))
* **angular-wrappers:** enable hierarchical for feature generation ([90014b8](https://github.com/IgniteUI/igniteui-cli/commit/90014b8))
* **igniteui-angular:** lint, typescript transforms respect editorconfig/tslint ([2f6ba24](https://github.com/IgniteUI/igniteui-cli/commit/2f6ba24))
* **igx-tab:** rename igx-tab to igx-bottom-nav ([7cd792e](https://github.com/IgniteUI/igniteui-cli/commit/7cd792e)), closes [#244](https://github.com/IgniteUI/igniteui-cli/issues/244)


### Features

* add doc command ([d19ef81](https://github.com/IgniteUI/igniteui-cli/commit/d19ef81)), closes [#66](https://github.com/IgniteUI/igniteui-cli/issues/66)
* add e2e flag for igx-ts framework. ([16f1be1](https://github.com/IgniteUI/igniteui-cli/commit/16f1be1))
* add events for GoogleAnalytic for each user interaction within command ([7d626e0](https://github.com/IgniteUI/igniteui-cli/commit/7d626e0))
* Add Google Analytic to CLI application ([0127684](https://github.com/IgniteUI/igniteui-cli/commit/0127684))
* add list command ([#203](https://github.com/IgniteUI/igniteui-cli/issues/203)) ([1f532ef](https://github.com/IgniteUI/igniteui-cli/commit/1f532ef))
* add validation for configuration options in config set command ([2a43650](https://github.com/IgniteUI/igniteui-cli/commit/2a43650))
* allow template variables in igniteui-angular template dependencies ([2bddcd7](https://github.com/IgniteUI/igniteui-cli/commit/2bddcd7))
* Change UUID from random to Machine ID ([ef6eb72](https://github.com/IgniteUI/igniteui-cli/commit/ef6eb72))
* Errors and Exceptions are now send to GA ([a992385](https://github.com/IgniteUI/igniteui-cli/commit/a992385))
* Google Analytic events added for start and test command ([b07d0a0](https://github.com/IgniteUI/igniteui-cli/commit/b07d0a0))
* ig-ts project - add initial unit tests for components. ([881948b](https://github.com/IgniteUI/igniteui-cli/commit/881948b))
* Initial angular-wrappers test config and BarChart test. ([e283375](https://github.com/IgniteUI/igniteui-cli/commit/e283375))
* Initial jQuery test configuration for Karma and QUnit. ([168a6e7](https://github.com/IgniteUI/igniteui-cli/commit/168a6e7))
* Initial react test configuration for Jest and Enzyme. ([322c558](https://github.com/IgniteUI/igniteui-cli/commit/322c558))
* new dependency objects for Ignite UI for Angular templates ([a8e2200](https://github.com/IgniteUI/igniteui-cli/commit/a8e2200))
* node version and OS version added. ([567ed36](https://github.com/IgniteUI/igniteui-cli/commit/567ed36))
* add npm package dependencies support for templates ([0b65ed9](https://github.com/IgniteUI/igniteui-cli/commit/0b65ed9))
* **igniteui-angular:** add custom grid template with selectable features ([d2bcfda](https://github.com/IgniteUI/igniteui-cli/commit/d2bcfda))
* postinstall and preuninstall functions added to sent screenviews to GA when install/uninstall happens ([2584482](https://github.com/IgniteUI/igniteui-cli/commit/2584482))
* Run npm test behind ig test. ([6938352](https://github.com/IgniteUI/igniteui-cli/commit/6938352))
* Update awesome grid to latest sample state. ([03bcc4d](https://github.com/IgniteUI/igniteui-cli/commit/03bcc4d))


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
