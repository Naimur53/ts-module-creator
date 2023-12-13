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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const creation_model_1 = require("./creation.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const creation_constant_1 = require("./creation.constant");
const getAllCreation = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // all Creation
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    //   search text
    if (searchTerm) {
        andConditions.push({
            $or: creation_constant_1.creationSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    // make and query
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield creation_model_1.Creation.find(whereConditions)
        .sort({ _id: -1 })
        .skip(skip)
        .limit(limit)
        .populate('user');
    const total = yield creation_model_1.Creation.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const addCreation = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newCreation = yield creation_model_1.Creation.create(payload);
    return newCreation;
});
const updateCreation = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield creation_model_1.Creation.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const getSingleCreation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield creation_model_1.Creation.findById(id).populate('creator');
    return result;
});
const deleteCreation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield creation_model_1.Creation.findByIdAndDelete(id);
    if (!result) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Creation not found!');
    }
    return result;
});
exports.CreationService = {
    getAllCreation,
    addCreation,
    updateCreation,
    getSingleCreation,
    deleteCreation,
};
