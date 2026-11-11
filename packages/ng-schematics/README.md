# @igniteui/angular-schematics

An implementation of the [Ignite UI CLI](../cli) using Angular's schematics.

## Install

```bash
npm i -g @igniteui/angular-schematics
```

## Project setup

### New project

If you want to use Ignite UI for Angular controls right off the bat, you can generate a new project by using the `@igniteui/angular-schematics` as a collection:

```bash
ng new --collection="@igniteui/angular-schematics"
```

The project is created with the Angular CLI's own `ng new` and `ng add igniteui-angular`, so this needs network access and always installs the packages the project starts with. `--skip-install` only skips the final install, which picks up packages the guided setup adds afterwards, and starting the app.

`--dry-run` is not supported: the project is created and installed on disk, which a dry run cannot hold back, so the command stops with an error before creating anything.

### Add to existing project

You can add the `@igniteui/angular-schematics` collection to an existing Angular project by running:

```bash
ng add igniteui-angular
```

This will add the `igniteui-angular` library and the schematics definitions to the existing project.

## Add Component Views

Once your project is configured, you can add Ignite UI for Angular components through the component schematics by calling:

```bash
ng g @igniteui/angular-schematics:component
```

This will enter the Step by step mode. Alternatively , you can generate a specific component by providing its template ID and a name:

```bash
ng g @igniteui/angular-schematics:component [templateId] [componentName]
```

You can find all of the template definitions in the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/general/cli/component-templates.html)
 