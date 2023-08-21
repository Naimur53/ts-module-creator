"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileName_1 = __importDefault(require("./fileName"));
const createRouterFile = (path, name) => {
    const { upperCaseName, lowerCaseName } = (0, fileName_1.default)(name);
    fs_1.default.writeFileSync(path, `
import express from 'express'; 
import { ${upperCaseName}Controller } from './${lowerCaseName}.controller';
const router = express.Router();

router.get('/', ${upperCaseName}Controller.getAll${upperCaseName});
router.get('/:id', ${upperCaseName}Controller.getSingle${upperCaseName});

router.post(
  '/', 
  ${upperCaseName}Controller.create${upperCaseName}
);

router.patch(
  '/:id', 
  ${upperCaseName}Controller.update${upperCaseName}
);
router.delete('/:id', ${upperCaseName}Controller.delete${upperCaseName});

export const ${upperCaseName}Routes = router;
  
  `);
};
exports.default = createRouterFile;
