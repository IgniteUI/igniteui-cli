import { EOL } from 'os';
import { App } from '@igniteui/cli-core';
import { WebComponentsTypeScriptFileUpdate } from '../../../packages/cli/templates/webcomponents/WebComponentsTypeScriptFileUpdate';
import { MockFS } from './Mock-FS';

const routesPath = 'path/to/routes.ts';
const routesFileContent = `import { Route } from '@vaadin/router';
import './not-found/not-found.js';

export const routes: Route[] = [
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' },
];
`;

describe('Unit - WebComponentsTypeScriptFileUpdate', () => {
  let fileUpdate!: WebComponentsTypeScriptFileUpdate;
  describe('Routing', () => {
    beforeEach(() => {
      spyOn(App, 'initialize').and.callThrough();
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([['path/to/routes.ts', routesFileContent]]))
      );
      fileUpdate = new WebComponentsTypeScriptFileUpdate(routesPath);
    });

    it('should add a route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: 'test/route',
        identifierName: 'test-route-component',
        name: 'test-route',
        children: {
          identifierName: 'routes',
          aliasName: 'routerChildren',
          modulePath: 'path/to/module',
        },
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { Route } from '@vaadin/router';` +
          EOL +
          `import './not-found/not-found.js';` +
          EOL +
          `import './test-route/test-route';` +
          EOL +
          `import { routes as routerChildren } from 'path/to/module';` +
          EOL +
          EOL +
          `export const routes: Route[] = [` +
          EOL +
          `    { path: 'test/route', component: 'test-route-component', name: 'test-route', children: routerChildren },` +
          EOL +
          `    // The fallback route should always be after other alternatives.` +
          EOL +
          `    { path: '(.*)', component: 'app-not-found' }` +
          EOL +
          `];` +
          EOL
      );
    });

    it('should add a default/redirect route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: '',
        redirectTo: 'another/route',
        name: 'default',
        children: {
          identifierName: 'routes',
          aliasName: 'routerChildren',
          modulePath: 'path/to/module',
        },
      });

      const result = fileUpdate.finalize();
      expect(
        (fileUpdate as any).astTransformer.formatter.applyFormatting
      ).toHaveBeenCalledTimes(1);

      expect(result).toEqual(
        `import { Route } from '@vaadin/router';` +
          EOL +
          `import './not-found/not-found.js';` +
          EOL +
          `import './default/default';` +
          EOL +
          `import { routes as routerChildren } from 'path/to/module';` +
          EOL +
          EOL +
          `export const routes: Route[] = [` +
          EOL +
          `    { path: '', component: 'another/route', name: 'default', children: routerChildren },` +
          EOL +
          `    // The fallback route should always be after other alternatives.` +
          EOL +
          `    { path: '(.*)', component: 'app-not-found' }` +
          EOL +
          `];` +
          EOL
      );
    });
  });
});
