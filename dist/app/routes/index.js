"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nextJsFolderCreator_route_1 = require("./../modules/nextJsFolderCreator/nextJsFolderCreator.route");
const express_1 = __importDefault(require("express"));
const mongoose_folder_creator_route_1 = require("../modules/mongooseFolderCreator/mongoose.folder.creator.route");
const prisma_creator_route_1 = require("../modules/prismaCreator/prisma.creator.route");
const react_folder_creator_route_1 = require("../modules/reactFolderCreator/react.folder.creator.route");
const user_router_1 = require("../modules/user/user.router");
const creation_router_1 = require("../modules/creation/creation.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_router_1.UserRoutes,
    },
    {
        path: '/mongoose',
        route: mongoose_folder_creator_route_1.createFolderRoute,
    },
    {
        path: '/prisma',
        route: prisma_creator_route_1.createPrismaFolderRoute,
    },
    {
        path: '/react',
        route: react_folder_creator_route_1.createRectFolderRoute,
    },
    {
        path: '/next',
        route: nextJsFolderCreator_route_1.createNextJsFolderRoute,
    },
    {
        path: '/creation',
        route: creation_router_1.CreationRoutes,
    },
    // {
    //   path: '/create-json-file',
    //   route: FileToJsonCreatorRoute,
    // },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
