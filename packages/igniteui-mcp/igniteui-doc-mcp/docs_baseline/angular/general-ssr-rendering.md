---
title: Server-side rendering | Angular SSR | Ignite UI for Angular | Infragistics
_description: How to use Angular Server-side rendering with Ignite UI for Angular.
_keywords: Ignite UI for Angular, Angular SSR, Server-side rendering
_tocName: Server-side rendering (SSR)
---

# Server-side Rendering with Angular SSR

This topic aims at describing what Server-side Rendering is and how to configure it within Ignite UI for Angular application.

## Angular Server-side rendering

All Angular applications run in the client's browser and often this may result in a negative performance hit on the [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) i.e. when a browser first renders the largest content of a page. This is when [Angular SSR](https://angular.dev/guide/ssr) comes in handy, you can generate the full HTML for a page on the server. It renders a client-side page to HTML on the server that is later bootstrapped on the client. Okay, but how it works?

> [LCP](https://web.dev/articles/lcp) measures when the largest content of a page is visible to the user, as for [FCP](https://web.dev/first-contentful-paint) metric, it measures how long it takes the browser to render the first piece of DOM content after a user navigates to your page. See [Lighthouse performance scoring](https://web.dev/performance-scoring) for more information.


## How it works?

With Angular SSR, you will serve a static version of your apps' landing page, while at the same time the full Angular application loads in the background. The landing page will be pure HTML and will be displayed even if the JavaScript is disabled. More about Server Rendering you can find in the [Rendering on the Web guide](https://developers.google.com/web/updates/2019/02/rendering-on-the-web).

## Usage

Server-side rendering is one of the many techniques part of [Rendering on Web](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) guidelines, that can:

- Ease web crawlers to index your website higher in searches - will improve your Search Engine Optimization (SEO).
- Show the first page quickly - slow initial page load is disengaging for the users (if it takes more than 3 seconds to load).
- Improve your app performance - it will have a positive impact on both [First Contentful Paint](https://web.dev/first-contentful-paint) and [Largest Contentful Paint](https://web.dev/articles/lcp).

> It gives you full control over SEO and social-media previews, and it improves the overall perceived performance of your application by allowing users to see an initial painted view.

## Add SSR to existing Ignite UI application

### Step 1 - Add @angular/ssr

By using Angular CLI schematic we can run the following command:

```
ng add @angular/ssr
```

This schematic will perform several changes to your app client and server configurations, as well as add extra files to the project structure.

### Step 2 - Start your Angular SSR app

Run the following command:

```
ng serve
```

## Build a new application from scratch

1. Use `ng new` or the [Ignite UI CLI](./cli/getting-started-with-cli.md) `ig new` command. Alternatively, use `ng new --ssr` to create a new Angular SSR project directly, skipping step 3.
2. Execute `ng add igniteui-angular` which installs the library's npm packages to your workspace and configures the project in the current working directory to use that library.
3. Add Angular SSR with `ng add @angular/ssr`.
4. Add Ignite UI for Angular components - e.g. Grid, Calendar

## Other considerations

- If your application is using other browser-specific objects, wrap their usage in a conditional statement, so that they’ll only be used by Angular on the browser. You can do this by importing the functions `isPlatformBrowser` and `isPlatformServer` from `@angular/common`, injecting the `PLATFORM_ID` token into your component, and running the imported functions to see whether you’re on the server or the browser.
- If using ElementRef for HTML element handling, don’t use the nativeElement to manipulate attributes on the element. Instead, inject and use the [Renderer2 methods](https://alligator.io/angular/using-renderer2).
- All URLs for server requests should be absolute, keep in mind that data requests from relative URLs will fail when running from the server.
- For handling browser events the Angular team provides the [withEventReplay()](https://angular.dev/guide/hydration#capturing-and-replaying-events) function. This feature allows to capture all events that happen before hydration and replay those events once hydration has completed.
- If using IgxIconService to register icons please make sure that you have configured [provideHttpClient()](https://angular.dev/api/common/http/provideHttpClient) in your providers.
- When using Angular SSR, the server will pre-render pages that will be visible to the users, however, interactions will be limited. Once the client-side app is loaded in the background, it will seamlessly switch from showing the server-rendered pages to the client-side app.

## Useful resources

<div class="divider--half"></div>

- [Angular SSR guide](https://angular.dev/guide/ssr)
- [Server-side rendering terminology](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
- [Getting started with Ignite UI for Angular](getting-started.md)
- [Ignite UI CLI Guide](cli/step-by-step-guide-using-cli.md)
- [Ignite UI for Angular Schematics](cli/step-by-step-guide-using-angular-schematics.md)
