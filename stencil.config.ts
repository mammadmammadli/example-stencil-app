import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'my-lovely-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    reactOutputTarget({
			proxiesFile: './react/src/index.ts',
			componentCorePackage: 'mylovely-library',
    }),
    angularOutputTarget({
      componentCorePackage: 'mylovely-library',
      directivesProxyFile: './angular/src/index.ts',
      valueAccessorConfigs: [],
    })
  ]
};
