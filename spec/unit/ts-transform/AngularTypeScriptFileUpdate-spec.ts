import { App, FS_TOKEN } from '@igniteui/cli-core';
import { AngularTypeScriptFileUpdate } from '@igniteui/angular-templates';
import { EOL } from 'os';
import { MockFS } from './Mock-FS';

const routesFileContent = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';

export const routes: Routes = [
    { path: 'error', component: UncaughtErrorComponent },
    { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
    exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
`;

const standaloneComponentFileContent = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Home - IgniteUI for Angular';
}
`;

const moduleFileContent = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [CommonModule]
})
export class MyModule {
}
`;

const appConfigStandalone = `import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

const providers: Provider[] = [
    provideRouter(routes)
];

export const appConfig: ApplicationConfig = { providers };
`;

const specFileContent = `import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
`;

const routesPath = 'path/to/routes';
const moduleFilePath = 'path/to/module';
const standaloneComponentFilePath = 'path/to/component';
const pathToAppConfig = 'path/to/app.config';
const specFilePath = 'path/to/my-component.spec';

describe('Unit - AngularTypeScriptFileUpdate', () => {
  describe('Initialization', () => {
    it('should be created with a path/to/file', () => {
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([[routesPath, routesFileContent]]))
      );

      const tsUpdate = new AngularTypeScriptFileUpdate(routesPath);
      expect(App.container.get).toHaveBeenCalledWith(FS_TOKEN);
      expect((tsUpdate as any).astTransformer).toBeDefined();
    });
  });

  describe('General', () => {
    it('should add bindToComponentInputs to the RouterModule.forRoot call', () => {
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([[routesPath, routesFileContent]]))
      );

      fileUpdate = new AngularTypeScriptFileUpdate(routesPath, false, {
        singleQuotes: true,
      });
      fileUpdate.allowComponentInputBinding();
      const result = fileUpdate.finalize();
      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true }), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });
  });

  let fileUpdate!: AngularTypeScriptFileUpdate;
  describe('App Config', () => {
    beforeEach(() => {
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([[pathToAppConfig, appConfigStandalone]]))
      );
      fileUpdate = new AngularTypeScriptFileUpdate(pathToAppConfig, true, {
        singleQuotes: true,
      });
    });

    it('should add withComponentsBinding to the provideRouter call', () => {
      fileUpdate.allowComponentInputBinding();
      const result = fileUpdate.finalize();
      expect(result).toEqual(
        `import { ApplicationConfig, Provider } from '@angular/core';` +
          EOL +
          `import { provideRouter, withComponentInputBinding } from '@angular/router';` +
          EOL +
          `import { routes } from './app.routes';` +
          EOL +
          EOL +
          `const providers: Provider[] = [` +
          EOL +
          `    provideRouter(routes, withComponentInputBinding())` +
          EOL +
          `];` +
          EOL +
          EOL +
          `export const appConfig: ApplicationConfig = { providers };` +
          EOL
      );
    });

    it('should include a provideHttpClient call', () => {
      fileUpdate.provideHttpClientForStandaloneAppConfig();
      const result = fileUpdate.finalize();
      expect(result).toEqual(
        `import { ApplicationConfig, Provider } from '@angular/core';` +
          EOL +
          `import { provideRouter } from '@angular/router';` +
          EOL +
          `import { routes } from './app.routes';` +
          EOL +
          `import { provideHttpClient } from '@angular/common/http';` +
          EOL +
          EOL +
          `const providers: Provider[] = [` +
          EOL +
          `    provideRouter(routes),` +
          EOL +
          `    provideHttpClient()` +
          EOL +
          `];` +
          EOL +
          EOL +
          `export const appConfig: ApplicationConfig = { providers };` +
          EOL
      );
    });
  });

  describe('Routing', () => {
    beforeEach(() => {
      spyOn(App, 'initialize').and.callThrough();
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([[routesPath, routesFileContent]]))
      );
      fileUpdate = new AngularTypeScriptFileUpdate(
        routesPath,
        false, // standalone
        {
          singleQuotes: true,
        }
      );
    });

    it('should add a route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: 'test/route',
        identifierName: 'TestRouteComponent',
        modulePath: 'path/to/module',
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          `import { TestRouteComponent } from 'path/to/module';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    { path: 'test/route', component: TestRouteComponent },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add a default route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: '',
        pathMatch: 'full',
        redirectTo: 'another/route',
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    { path: '', redirectTo: 'another/route', pathMatch: 'full' },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add a route with redirect', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: 'test/route',
        redirectTo: 'another/route',
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    { path: 'test/route', redirectTo: 'another/route' },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add a lazy loaded route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: 'lazyloaded',
        identifierName: 'MyLazyLoadedComponent',
        modulePath: 'my-lazyloaded-module',
        lazyload: true,
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    { path: 'lazyloaded', loadComponent: () => import('my-lazyloaded-module').then(m => m.MyLazyLoadedComponent) },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add a child route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute(
        {
          path: 'parent',
          identifierName: 'ParentComponent',
          modulePath: 'path/to/parent',
        },
        true // multiline
      );

      fileUpdate.addChildRoute(
        'parent',
        {
          path: 'child',
          identifierName: 'ChildComponent',
          modulePath: 'path/to/child',
        },
        false, // as identifier
        true // multiline
      );

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          `import { ParentComponent } from 'path/to/parent';` +
          EOL +
          `import { ChildComponent } from 'path/to/child';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    {` +
          EOL +
          `        path: 'parent',` +
          EOL +
          `        component: ParentComponent,` +
          EOL +
          `        children: [` +
          EOL +
          `            {` +
          EOL +
          `                path: 'child',` +
          EOL +
          `                component: ChildComponent` +
          EOL +
          `            }` +
          EOL +
          `        ]` +
          EOL +
          `    },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add child default routes with a default route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute(
        {
          path: 'parent',
          identifierName: 'ParentComponent',
          modulePath: 'path/to/parent',
        },
        true // multiline
      );

      fileUpdate.addChildRoute(
        'parent',
        {
          path: '',
          redirectTo: 'child',
          pathMatch: 'full',
        },
        false, // as identifier
        true // multiline
      );

      fileUpdate.addChildRoute(
        'parent',
        {
          path: 'child',
          identifierName: 'ChildComponent',
          modulePath: 'path/to/child',
        },
        false, // as identifier
        true // multiline
      );

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          `import { ParentComponent } from 'path/to/parent';` +
          EOL +
          `import { ChildComponent } from 'path/to/child';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    {` +
          EOL +
          `        path: 'parent',` +
          EOL +
          `        component: ParentComponent,` +
          EOL +
          `        children: [` +
          EOL +
          `            {` +
          EOL +
          `                path: '',` +
          EOL +
          `                redirectTo: 'child',` +
          EOL +
          `                pathMatch: 'full'` +
          EOL +
          `            },` +
          EOL +
          `            {` +
          EOL +
          `                path: 'child',` +
          EOL +
          `                component: ChildComponent` +
          EOL +
          `            }` +
          EOL +
          `        ]` +
          EOL +
          `    },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });

    it('should add nested child routes on multiple levels', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute(
        {
          path: 'parent',
          identifierName: 'ParentComponent',
          modulePath: 'path/to/parent',
        },
        true // multiline
      );

      fileUpdate.addChildRoute(
        'parent',
        {
          path: 'child',
          identifierName: 'ChildComponent',
          modulePath: 'path/to/child',
        },
        false, // as identifier
        true // multiline
      );

      fileUpdate.addChildRoute(
        'child',
        {
          path: 'inner-child',
          identifierName: 'InnerChildComponent',
          modulePath: 'path/to/inner-child',
        },
        false, // as identifier
        true // multiline
      );

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { NgModule } from '@angular/core';` +
          EOL +
          `import { RouterModule, Routes } from '@angular/router';` +
          EOL +
          EOL +
          `import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';` +
          EOL +
          `import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';` +
          EOL +
          `import { ErrorRoutingModule } from './error-routing/error-routing.module';` +
          EOL +
          `import { ParentComponent } from 'path/to/parent';` +
          EOL +
          `import { ChildComponent } from 'path/to/child';` +
          EOL +
          `import { InnerChildComponent } from 'path/to/inner-child';` +
          EOL +
          EOL +
          `export const routes: Routes = [` +
          EOL +
          `    { path: 'error', component: UncaughtErrorComponent },` +
          EOL +
          `    {` +
          EOL +
          `        path: 'parent',` +
          EOL +
          `        component: ParentComponent,` +
          EOL +
          `        children: [` +
          EOL +
          `            {` +
          EOL +
          `                path: 'child',` +
          EOL +
          `                component: ChildComponent,` +
          EOL +
          `                children: [` +
          EOL +
          `                    {` +
          EOL +
          `                        path: 'inner-child',` +
          EOL +
          `                        component: InnerChildComponent` +
          EOL +
          `                    }` +
          EOL +
          `                ]` +
          EOL +
          `            }` +
          EOL +
          `        ]` +
          EOL +
          `    },` +
          EOL +
          `    { path: '**', component: PageNotFoundComponent } // must always be last` +
          EOL +
          `];` +
          EOL +
          EOL +
          `@NgModule({` +
          EOL +
          `    imports: [RouterModule.forRoot(routes), ErrorRoutingModule],` +
          EOL +
          `    exports: [RouterModule, ErrorRoutingModule]` +
          EOL +
          `})` +
          EOL +
          `export class AppRoutingModule {` +
          EOL +
          `}` +
          EOL
      );
    });
  });

  describe('Metadata', () => {
    describe('NgModule', () => {
      beforeEach(() => {
        spyOn(App, 'initialize').and.callThrough();
        spyOn(App.container, 'get').and.returnValue(
          new MockFS(new Map([[moduleFilePath, moduleFileContent]]))
        );
        fileUpdate = new AngularTypeScriptFileUpdate(
          moduleFilePath,
          false, // standalone
          {
            singleQuotes: true,
          }
        );
      });

      it('should add to imports array and update forRoot()', () => {
        fileUpdate.addNgModuleMeta({
          import: ['RouterModule'],
          from: '@angular/router',
          root: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { NgModule } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { RouterModule } from '@angular/router';` +
            EOL +
            EOL +
            `@NgModule({` +
            EOL +
            `    imports: [CommonModule, RouterModule.forRoot()]` +
            EOL +
            `})` +
            EOL +
            `export class MyModule {` +
            EOL +
            `}` +
            EOL
        );
      });

      it("should add to declarations/exports/providers, creating them if they don't exist", () => {
        fileUpdate.addNgModuleMeta(
          {
            declare: ['MyComponent'],
            export: ['MyComponent'],
            provide: ['MyService'],
            from: './index',
          },
          undefined, // variables
          true // multiline
        );

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { NgModule } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { MyComponent, MyService } from './index';` +
            EOL +
            EOL +
            `@NgModule({` +
            EOL +
            `    imports: [CommonModule],` +
            EOL +
            `    declarations: [` +
            EOL +
            `        MyComponent` +
            EOL +
            `    ],` +
            EOL +
            `    providers: [` +
            EOL +
            `        MyService` +
            EOL +
            `    ],` +
            EOL +
            `    exports: [` +
            EOL +
            `        MyComponent` +
            EOL +
            `    ]` +
            EOL +
            `})` +
            EOL +
            `export class MyModule {` +
            EOL +
            `}` +
            EOL
        );
      });

      it('should replace variable placeholders / apply variable config transformations', () => {
        const configVariables = {
          '$(key)': 'Replace',
          '$(key2)': 'Replace2',
          '$(key3)': 'Replace3',
          __key4__: 'replace4',
          __key5__: 'replace5',
        };

        fileUpdate.addNgModuleMeta(
          {
            import: '$(key)Module',
            declare: ['$(key2)Component', '$(key3)Component'],
            from: '__key4__',
          },
          configVariables
        );

        fileUpdate.addNgModuleMeta(
          {
            import: ['$(key)Module', '$(key2)Module'], // will not be imported again due the expected imports collision
            declare: '$(key3)Component',
            provide: ['$(key)Service'],
            from: './src/__key4__/__key5__.service',
          },
          configVariables
        );

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { NgModule } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { ReplaceModule, Replace2Component, Replace3Component } from 'replace4';` +
            EOL +
            `import { Replace2Module, ReplaceService } from './src/replace4/replace5.service';` +
            EOL +
            EOL +
            `@NgModule({` +
            EOL +
            `    imports: [CommonModule, ReplaceModule, Replace2Module],` +
            EOL +
            `    declarations: [Replace2Component, Replace3Component],` +
            EOL +
            `    providers: [ReplaceService]` +
            EOL +
            `})` +
            EOL +
            `export class MyModule {` +
            EOL +
            `}` +
            EOL
        );
      });

      it('should not add members to the same array if they are already present', () => {
        fileUpdate.addNgModuleMeta(
          {
            declare: ['MyComponent'],
            export: ['MyComponent'],
            provide: ['MyService'],
            from: './index',
          },
          undefined, // variables
          true // multiline
        );

        fileUpdate.addNgModuleMeta(
          {
            declare: ['MyComponent'],
            export: ['MyComponent'],
            provide: ['MyService'],
            from: './index',
          },
          undefined, // variables
          true // multiline
        );

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { NgModule } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { MyComponent, MyService } from './index';` +
            EOL +
            EOL +
            `@NgModule({` +
            EOL +
            `    imports: [CommonModule],` +
            EOL +
            `    declarations: [` +
            EOL +
            `        MyComponent` +
            EOL +
            `    ],` +
            EOL +
            `    providers: [` +
            EOL +
            `        MyService` +
            EOL +
            `    ],` +
            EOL +
            `    exports: [` +
            EOL +
            `        MyComponent` +
            EOL +
            `    ]` +
            EOL +
            `})` +
            EOL +
            `export class MyModule {` +
            EOL +
            `}` +
            EOL
        );
      });
    });

    describe('Standalone Component', () => {
      beforeEach(() => {
        spyOn(App, 'initialize').and.callThrough();
        spyOn(App.container, 'get').and.returnValue(
          new MockFS(
            new Map([
              [standaloneComponentFilePath, standaloneComponentFileContent],
            ])
          )
        );
        fileUpdate = new AngularTypeScriptFileUpdate(
          standaloneComponentFilePath,
          true, // standalone
          { singleQuotes: true }
        );
      });

      it("should update a standalone component's import meta", () => {
        fileUpdate.addStandaloneComponentMeta({
          import: ['MyComponent'],
          from: 'my-module',
          standalone: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { Component } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { RouterOutlet } from '@angular/router';` +
            EOL +
            `import { MyComponent } from 'my-module';` +
            EOL +
            EOL +
            `@Component({` +
            EOL +
            `    selector: 'app-root',` +
            EOL +
            `    standalone: true,` +
            EOL +
            `    imports: [CommonModule, RouterOutlet, MyComponent],` +
            EOL +
            `    templateUrl: './app.component.html',` +
            EOL +
            `    styleUrls: ['./app.component.scss']` +
            EOL +
            `})` +
            EOL +
            `export class AppComponent {` +
            EOL +
            `    title = 'Home - IgniteUI for Angular';` +
            EOL +
            `}` +
            EOL
        );
      });

      it("should update a standalone component's provide meta", () => {
        fileUpdate.addStandaloneComponentMeta({
          provide: ['MyService'],
          from: 'my-service',
          standalone: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { Component } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { RouterOutlet } from '@angular/router';` +
            EOL +
            `import { MyService } from 'my-service';` +
            EOL +
            EOL +
            `@Component({` +
            EOL +
            `    selector: 'app-root',` +
            EOL +
            `    standalone: true,` +
            EOL +
            `    imports: [CommonModule, RouterOutlet],` +
            EOL +
            `    templateUrl: './app.component.html',` +
            EOL +
            `    styleUrls: ['./app.component.scss'],` +
            EOL +
            `    providers: [MyService]` +
            EOL +
            `})` +
            EOL +
            `export class AppComponent {` +
            EOL +
            `    title = 'Home - IgniteUI for Angular';` +
            EOL +
            `}` +
            EOL
        );
      });

      it('should replace variable placeholders / apply variable config transformations', () => {
        const configVariables = {
          '$(key)': 'Replace',
          __key4__: 'replace4',
          __key5__: 'replace5',
        };

        fileUpdate.addStandaloneComponentMeta(
          {
            import: '$(key)Module',
            from: '__key4__',
            standalone: true,
          },
          configVariables
        );

        fileUpdate.addStandaloneComponentMeta(
          {
            provide: ['$(key)Service'],
            from: './src/__key4__/__key5__.service',
            standalone: true,
          },
          configVariables
        );

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { Component } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { RouterOutlet } from '@angular/router';` +
            EOL +
            `import { ReplaceModule } from 'replace4';` +
            EOL +
            `import { ReplaceService } from './src/replace4/replace5.service';` +
            EOL +
            EOL +
            `@Component({` +
            EOL +
            `    selector: 'app-root',` +
            EOL +
            `    standalone: true,` +
            EOL +
            `    imports: [CommonModule, RouterOutlet, ReplaceModule],` +
            EOL +
            `    templateUrl: './app.component.html',` +
            EOL +
            `    styleUrls: ['./app.component.scss'],` +
            EOL +
            `    providers: [ReplaceService]` +
            EOL +
            `})` +
            EOL +
            `export class AppComponent {` +
            EOL +
            `    title = 'Home - IgniteUI for Angular';` +
            EOL +
            `}` +
            EOL
        );
      });

      it('should not add members to the same array if they are already present', () => {
        fileUpdate.addStandaloneComponentMeta({
          provide: ['MyService'],
          from: 'my-service',
          standalone: true,
        });

        fileUpdate.addStandaloneComponentMeta({
          provide: ['MyService'],
          from: 'my-service',
          standalone: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { Component } from '@angular/core';` +
            EOL +
            `import { CommonModule } from '@angular/common';` +
            EOL +
            `import { RouterOutlet } from '@angular/router';` +
            EOL +
            `import { MyService } from 'my-service';` +
            EOL +
            EOL +
            `@Component({` +
            EOL +
            `    selector: 'app-root',` +
            EOL +
            `    standalone: true,` +
            EOL +
            `    imports: [CommonModule, RouterOutlet],` +
            EOL +
            `    templateUrl: './app.component.html',` +
            EOL +
            `    styleUrls: ['./app.component.scss'],` +
            EOL +
            `    providers: [MyService]` +
            EOL +
            `})` +
            EOL +
            `export class AppComponent {` +
            EOL +
            `    title = 'Home - IgniteUI for Angular';` +
            EOL +
            `}` +
            EOL
        );
      });
    });

    describe('Spec File', () => {
      beforeEach(() => {
        spyOn(App, 'initialize').and.callThrough();
        spyOn(App.container, 'get').and.returnValue(
          new MockFS(new Map([[specFilePath, specFileContent]]))
        );
        fileUpdate = new AngularTypeScriptFileUpdate(
          specFilePath,
          false, // standalone
          {
            singleQuotes: true,
          }
        );
      });

      it("should modify the imports collection of the spec file's testing module", () => {
        fileUpdate.addTestingModuleMeta({
          import: ['RouterModule'],
          from: '@angular/router',
          root: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';` +
            EOL +
            `import { MyComponent } from './my.component';` +
            EOL +
            `import { RouterModule } from '@angular/router';` +
            EOL +
            EOL +
            `describe('MyComponent', () => {` +
            EOL +
            `    let component: MyComponent;` +
            EOL +
            `    let fixture: ComponentFixture<MyComponent>;` +
            EOL +
            EOL +
            `    beforeEach(waitForAsync(() => {` +
            EOL +
            `        TestBed.configureTestingModule({` +
            EOL +
            `            imports: [RouterModule.forRoot()]` +
            EOL +
            `        }).compileComponents();` +
            EOL +
            EOL +
            `        fixture = TestBed.createComponent(MyComponent);` +
            EOL +
            `        component = fixture.componentInstance;` +
            EOL +
            `        fixture.detectChanges();` +
            EOL +
            `    }));` +
            EOL +
            EOL +
            `    it('should create', () => {` +
            EOL +
            `        expect(component).toBeTruthy();` +
            EOL +
            `    });` +
            EOL +
            `});` +
            EOL
        );
      });

      it("should add declarations to the spec file's testing module", () => {
        fileUpdate.addTestingModuleMeta({
          declare: ['MyComponent'],
          from: 'my.component',
          root: true,
        });

        const result = fileUpdate.finalize();
        expect(result).toEqual(
          `import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';` +
            EOL +
            `import { MyComponent } from './my.component';` +
            EOL +
            EOL +
            `describe('MyComponent', () => {` +
            EOL +
            `    let component: MyComponent;` +
            EOL +
            `    let fixture: ComponentFixture<MyComponent>;` +
            EOL +
            EOL +
            `    beforeEach(waitForAsync(() => {` +
            EOL +
            `        TestBed.configureTestingModule({` +
            EOL +
            `            imports: [],` +
            EOL +
            `            declarations: [MyComponent]` +
            EOL +
            `        }).compileComponents();` +
            EOL +
            EOL +
            `        fixture = TestBed.createComponent(MyComponent);` +
            EOL +
            `        component = fixture.componentInstance;` +
            EOL +
            `        fixture.detectChanges();` +
            EOL +
            `    }));` +
            EOL +
            EOL +
            `    it('should create', () => {` +
            EOL +
            `        expect(component).toBeTruthy();` +
            EOL +
            `    });` +
            EOL +
            `});` +
            EOL
        );
      });
    });
  });
});
