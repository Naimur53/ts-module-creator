"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileName = (name) => {
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
exports.default = fileName;
