---
title: Authentication Project Template | Ignite UI for Angular | Infragistics
description: Check out the Ignite UI for Angular Authentication Project Template guide.
keywords: igniteui for angular | angular schematics | templates | infragistics 
llms:
  description: "When creating an Ignite UI for Angular project with Angular Schematics or Ignite UI CLI, authentication is available as an add-on option when you select a supported navigation template."
_tocName: Authentication Project Template
---
# Authentication Project Template

When creating an Ignite UI for Angular project with Angular Schematics or Ignite UI CLI, authentication is available as an add-on option when you select a supported navigation template. It provides a basic implementation of a client-side authentication module that requires as little additional setup as possible to jump-start apps with user management.

## Create Authentication Project

### Interactive wizard

Authentication is offered as an extra step in the interactive wizard after selecting a navigation template. The flow is:

1. Choose a project template: **Empty Project**, **Side Navigation**, or **Side Navigation Mini**.
2. If **Side Navigation** or **Side Navigation Mini** is selected, the wizard prompts: _"Would you like to add authentication to this project?"_
3. If **Empty Project** is selected, the authentication prompt is not shown.

Answering yes generates one of two authenticated variants:

- **Side Navigation + Authentication** - a side navigation shell extended with the authentication module
- **Side Navigation Mini + Authentication** - a compact side navigation shell extended with the authentication module

For a full walkthrough of the wizard steps, see [Step-by-Step Guide Using Ignite UI CLI](./step-by-step-guide-using-cli.md) or [Step-by-Step Guide Using Ignite UI for Angular Schematics](./step-by-step-guide-using-angular-schematics.md).

### Direct command (advanced)

The authentication template IDs can also be passed directly to `ig new` or `ng new` for non-interactive project creation. These IDs are not shown in the interactive wizard because authentication is presented as a follow-up option there.

**Side Navigation + Authentication - Ignite UI CLI:**

```bash
ig new "Auth Project" --framework=angular --type=igx-ts --template=side-nav-auth
```

**Side Navigation + Authentication - Angular Schematics:**

```bash
ng new "Auth Project" --collection="@igniteui/angular-schematics" --template=side-nav-auth
```

**Side Navigation Mini + Authentication - Ignite UI CLI:**

```bash
ig new "Auth Project" --framework=angular --type=igx-ts --template=side-nav-mini-auth
```

**Side Navigation Mini + Authentication - Angular Schematics:**

```bash
ng new "Auth Project" --collection="@igniteui/angular-schematics" --template=side-nav-mini-auth
```

## Description

Both the Side Navigation + Authentication and Side Navigation Mini + Authentication variants build upon their respective navigation base and add a profile page and a login section to the app's nav bar that will display a login button or an avatar of the logged in user:

The login bar also integrates dialogs to sign in or up:

The project also supports various [external authentication providers](#add-a-third-party-social-provider).

## In code

Everything related to user management is under the `src/app/authentication` folder. Notable exports include:

- `AuthenticationModule` in `authentication.module.ts` exports all components and services to the main app module.
- `auth.guard.ts` exports an `AuthGuard` you can apply to routes
- `authentication-routing.module.ts` sets up login-related routes
- `UserService` in `services/user.service.ts` keeps the current user state
- `AuthenticationService` in `services/authentication.service.ts` is used to communicate with the backend API
- `ExternalAuthService` in `services/external-auth.service.ts` handles providers for third-party logins

## Required configuration

The project is setup for a single page app with REST API services, so the `AuthenticationService` is used to send requests to the following URLs:

- `/login` - login with username and password
- `/register` - register with user details
- `/extlogin` - passes along user info from external source

All endpoints are expected to return a JSON Web Token (JWT) or an error state with message.

> **Note:** For demonstration purposes the project has a `services/fake-backend.service.ts` that intercepts requests. The `BackendProvider` in `authentication.module.ts` should **not** be used in production. Both the provider and the file should be removed when development starts.

As with any authentication model, using JWT-s requires security considerations. Particularly, the tokens received from the REST API are stored on the client. For seamless app reloads during development, the user data is stored in the browser local storage, which is potentially vulnerable to XSS attacks.

> **Note:** Disable the local storage before production. Consider keeping tokens in memory only if the app requirements allow or take alternative route to protect them. Using cookies (consider CSRF protection) is an alternative, also splitting the token signature or an additional 'fingerprint' in a hardened cookie.

As usual, always evaluate security aspects and adjust accordingly, the project structure provided is merely a starting point.

## Add a third-party (social) provider

The external authentication service is initialized in your project's app entry point. The exact location depends on the bootstrapping type selected during project creation:

- **Standalone projects** (default) — initialization is in `src/app/app.config.ts` via a provider function.
- **NgModule projects** (`igx-ts-legacy`) — initialization is in `src/app/app.module.ts` via the `AppModule` constructor.

In both cases the pattern is the same: the social provider calls are commented out and ready to be enabled. For example, in an NgModule project:

```ts
// in app.module.ts
export class AppModule {
  constructor(private externalAuthService: ExternalAuthService) {
    // this.externalAuthService.addGoogle('<CLIENT_ID>');
    // this.externalAuthService.addMicrosoft('<CLIENT_ID>');
    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }
}
```

To enable user login with a specific third-party provider all that is required is to un-comment the specific line and replace the `<CLIENT_ID>` with your app's client ID.
If you need to obtain one, for example for Google Account sign in, follow the provider-specific guide at:

- [Obtain credentials](https://developers.google.com/identity/protocols/OpenIDConnect#getcredentials)

- [More detailed version](https://support.google.com/cloud/answer/6158849?hl=en&ref_topic=6262490)

Keep in mind, redirect URLs and allowed domain origins should be configured per provider to match the project. When creating the Google OAuth 2.0 client ID for development you can provide `http://localhost:4200/redirect-google` as the redirect URI. See [redirect URLs](#provider-details) for details.

Once you have your ID (for example `123456789.apps.googleusercontent.com`) you can enable the Google provider for the project like so:

```ts
// in app.module.ts
export class AppModule {
  constructor(private externalAuthService: ExternalAuthService) {
    this.externalAuthService.addGoogle('123456789.apps.googleusercontent.com');
    // this.externalAuthService.addMicrosoft('<CLIENT_ID>');
    // this.externalAuthService.addFacebook('<CLIENT_ID>');
  }
}
```

This will automatically enable the respective button in the login dialog:

You can do the same with [Microsoft](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc) following this guide:

https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-register-an-app

And for Facebook:

https://developers.facebook.com/docs/apps/#register

As you enable providers, all buttons will become active:

### Provider details

Here are the default providers the project template comes with:

| Provider  | Uses               | Redirect URL                    |
| :-------- | :----------------- | :------------------------------ |
| Google    | OpenID Connect*    | `<app root>/redirect-google`    |
| Microsoft | OpenID Connect*    | `<app root>/redirect-microsoft` |
| Facebook  | Facebook Connect** | `<app root>/redirect-facebook`  |

Where the app is hosted will determine the root URL, for example by default on the first app run that will be `http://localhost:4200`.

\* OpenID Connect functionality implemented using https://github.com/damienbod/angular-auth-oidc-client

\** Facebook Connect functionality implemented using Facebook JS SDK
