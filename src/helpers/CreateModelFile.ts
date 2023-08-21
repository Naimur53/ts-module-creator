import fs from 'fs';
import fileName from './fileName';
const createModelFile = (path: string, name: string) => {
  const { upperCaseName, lowerCaseName } = fileName(name);
  fs.writeFileSync(
    path,
    `
import { Schema, model } from 'mongoose';
import { ${upperCaseName}Model, I${upperCaseName} } from './${lowerCaseName}.interface'; 
const ${lowerCaseName}Schema = new Schema<I${upperCaseName}>({
//  enter your schema
});

export const ${upperCaseName} = model<I${upperCaseName}, ${upperCaseName}Model>('${upperCaseName}', ${lowerCaseName}Schema);
   
  `
  );
};
export default createModelFile;
