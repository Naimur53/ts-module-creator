import fileName from './fileName';

const singleFileCreatorHelper = (
  content: string,
  name: string,
  shouldBeCommented: boolean
): string => {
  const { upperCaseName, lowerCaseName } = fileName(name);
  let modifiedCode = content
    .replace(/Demo/g, upperCaseName)
    .replace(/demo/g, lowerCaseName);
  if (shouldBeCommented) {
    modifiedCode = modifiedCode.replace(/^/gm, '// ');
  }
  return modifiedCode;
};

export default singleFileCreatorHelper;
