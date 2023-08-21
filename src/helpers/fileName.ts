const fileName = (
  name: string
): { upperCaseName: string; lowerCaseName: string } => {
  let upperCaseName = '';
  const lowerCaseName = name.toLocaleLowerCase();
  const allSplit = name.split('');
  allSplit[0] = allSplit[0].toUpperCase();
  console.log(allSplit);
  upperCaseName = allSplit.join('');
  const result = { upperCaseName, lowerCaseName };
  return result;
};

export default fileName;
