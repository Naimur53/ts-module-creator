"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileName = (name) => {
    let upperCaseName = '';
    const lowerCaseName = name.toLocaleLowerCase();
    const allSplit = name.split('');
    allSplit[0] = allSplit[0].toUpperCase();
    upperCaseName = allSplit.join('');
    const result = { upperCaseName, lowerCaseName };
    return result;
};
exports.default = fileName;
