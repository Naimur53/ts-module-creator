import fs from 'fs';
import fileName from './fileName';
const createInterfaceFile = (path: string, name: string) => {
  const { upperCaseName } = fileName(name);
  fs.writeFileSync(
    path,
    ` 
import { Model } from 'mongoose';  

export type I${upperCaseName} = {
//   your type
};
export type ${upperCaseName}Model = Model<I${upperCaseName}, Record<string, unknown>>;
export type I${upperCaseName}Filters = {
  searchTerm?: string; 
};
 
   
  `
  );
};
export default createInterfaceFile;
