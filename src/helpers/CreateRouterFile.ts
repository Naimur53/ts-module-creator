import fs from 'fs';
import fileName from './fileName';
const createRouterFile = (path: string, name: string) => {
  const { upperCaseName, lowerCaseName } = fileName(name);
  fs.writeFileSync(
    path,
    `
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
  
  `
  );
};
export default createRouterFile;
