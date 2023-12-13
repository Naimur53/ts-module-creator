"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authJwtValidation_1 = __importDefault(require("../../helpers/authJwtValidation"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../modules/user/user.model");
const auth = (forAdminOnly) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get authorization token
        const token = req.headers.authorization;
        const verifiedUser = yield (0, authJwtValidation_1.default)(token);
        if (!(verifiedUser === null || verifiedUser === void 0 ? void 0 : verifiedUser.uid)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Token is not valid');
        }
        const isUserExist = yield user_model_1.User.isUserExistByUid(verifiedUser.uid);
        if ((isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.isBlocked) || !isUserExist) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'You are blocked');
        }
        if (forAdminOnly && !(isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.isAdmin)) {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Forbidden');
        }
        req.user = {
            displayName: verifiedUser.name,
            email: verifiedUser.email,
            uid: verifiedUser.uid,
            _id: isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist._id,
        }; //
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
