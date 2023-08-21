import fs from 'fs';
import fileName from './fileName';
const createConstant = (path: string, name: string) => {
  const { lowerCaseName } = fileName(name);
  fs.writeFileSync(
    path,
    ` 
    export const ${lowerCaseName}SearchableFields = [
        'searchTerm', 
      ];
   
  `
  );
};
export default createConstant;
