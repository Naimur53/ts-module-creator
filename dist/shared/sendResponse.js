"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const sendResponse = (res, data) => {
    console.log(data);
    // Set headers to trigger the download
    res.setHeader('Content-Disposition', `attachment; filename="dad.zip"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    // Create a readable stream of the folder and pipe it to the response
    const folderStream = fs_1.default.createReadStream(data.folderPath);
    folderStream.pipe(res);
    // res.status(data.statusCode).json(responseData);
};
exports.default = sendResponse;
