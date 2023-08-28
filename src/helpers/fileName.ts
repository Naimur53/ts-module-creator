const fileName = (
  name: string
): { upperCaseName: string; lowerCaseName: string } => {
  let upperCaseName = '';
  let lowerCaseName = '';
  const allSplit = name.split('');
  // make first word uppercase
  allSplit[0] = allSplit[0].toUpperCase();
  upperCaseName = allSplit.join('');

  // make first world lower case
  allSplit[0] = allSplit[0].toLocaleLowerCase();
  lowerCaseName = allSplit.join('');

  const result = { upperCaseName, lowerCaseName };
  return result;
};

export default fileName;
