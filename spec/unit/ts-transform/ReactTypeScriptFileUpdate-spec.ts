import * as ts from 'typescript';
import { EOL } from 'os';
import { App } from '@igniteui/cli-core';
import { ReactTypeScriptFileUpdate } from '../../../packages/cli/templates/react/ReactTypeScriptFileUpdate';

import { MockFS } from './Mock-FS';

const routesPath = 'path/to/routes.ts';
const routesFileContent = `export const routes = [

];
`;

describe('Unit - ReactTypeScriptFileUpdate', () => {
  let fileUpdate!: ReactTypeScriptFileUpdate;
  describe('Routing', () => {
    beforeEach(() => {
      spyOn(App, 'initialize').and.callThrough();
      spyOn(App.container, 'get').and.returnValue(
        new MockFS(new Map([['path/to/routes.ts', routesFileContent]]))
      );
      fileUpdate = new ReactTypeScriptFileUpdate(routesPath, undefined, {
        jsx: ts.JsxEmit.Preserve,
      });
    });

    it('should add a route', () => {
      spyOn(
        (fileUpdate as any).astTransformer.formatter,
        'applyFormatting'
      ).and.callThrough();

      fileUpdate.addRoute({
        path: 'test/route',
        element: 'TestRoute',
        text: 'test-route',
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
        `import TestRoute from './test-route/test-route';` +
          EOL +
          `import { routes as routerChildren } from 'path/to/module';` +
          EOL +
          `export const routes = [` +
          EOL +
          `    { path: 'test/route', element: <TestRoute />, text: 'test-route', children: routerChildren }` +
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
        `import { redirect } from 'react-router-dom';` +
          EOL +
          `export const routes = [` +
          EOL +
          `    { index: false, loader: () => redirect('another/route') }` +
          EOL +
          `];` +
          EOL
      );
    });
  });
});
