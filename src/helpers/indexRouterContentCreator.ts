import fileName from './fileName';

const indexRouterContentController = (allModules: string[]): string => {
  let importContent = ``;
  let moduleRoutesCreator = ``;
  allModules.forEach(singleName => {
    const { lowerCaseName, upperCaseName } = fileName(singleName);
    // for import content
    importContent += `import { ${upperCaseName}Routes } from '../modules/${lowerCaseName}/${lowerCaseName}.router';
    `;
    moduleRoutesCreator += `
    {
        path: "/${lowerCaseName}",
        route: ${upperCaseName}Routes
    },
      `;
  });

  //   main content of routes/index.ts

  const mainContent = `${importContent}
  import express from 'express';
    const router = express.Router();

    const moduleRoutes = [
    // ... routes
    ${moduleRoutesCreator}
    ];

    moduleRoutes.forEach(route => router.use(route.path, route.route));
    export default router;

    `;
  return mainContent;
};
export default indexRouterContentController;
