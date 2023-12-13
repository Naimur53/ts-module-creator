"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileName_1 = __importDefault(require("./fileName"));
const indexRouterContentController = (allModules) => {
    let importContent = ``;
    let moduleRoutesCreator = ``;
    allModules.forEach(singleName => {
        const { lowerCaseName, upperCaseName } = (0, fileName_1.default)(singleName);
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
exports.default = indexRouterContentController;
