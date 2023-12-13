"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const modulesStringChecker = (modules) => {
    const foundWrongString = modules.find(str => {
        return str === '' || str[0].match(/\d/) || str[0].match(/[A-Z]/);
    });
    if (foundWrongString || foundWrongString === '') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'wrong type modules name detected');
    }
};
exports.default = modulesStringChecker;
