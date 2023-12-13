"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseTemplates = [
    {
        fileName: '.env.example',
        filePath: '.env.example',
        content: "NODE_ENV = development\r\nPORT=5000\r\nDATABASE_URL =  mongodb+srv://name:pass@cluster0.icikx.mongodb.net/books\r\nBCRYPT_SALT_ROUNDS=12\r\n\r\nJWT_SECRET= 'very-secret'\r\nJWT_EXPIRES_IN=1d\r\nJWT_REFRESH_SECRET='very-refresh-secret'\r\nJWT_REFRESH_EXPIRES_IN=365d",
    },
    {
        fileName: '.eslintignore',
        filePath: '.eslintignore',
        content: 'dist\nnode_modules\n.env',
    },
    {
        fileName: '.eslintrc',
        filePath: '.eslintrc',
        content: '{\n  "parser": "@typescript-eslint/parser",\n  "parserOptions": {\n    "ecmaVersion": 12,\n    "sourceType": "module"\n  },\n  "plugins": ["@typescript-eslint"],\n  "extends": [\n    "eslint:recommended",\n    "plugin:@typescript-eslint/recommended",\n    "prettier"\n  ],\n  "rules": {\n    "no-unused-vars": "error",\n    "prefer-const": "error",\n    "no-unused-expressions": "error",\n    "no-undef": "error", \n    "@typescript-eslint/consistent-type-definitions": ["error", "type"]\n  },\n  "env": {\n    "browser": true,\n    "es2021": true,\n    "node":true\n  },\n  "globals": {\n    "process":"readonly"\n  }\n}\n',
    },
    {
        fileName: '.gitIgnore',
        filePath: '.gitIgnore',
        content: 'node_modules\n.env\n.vercel\n\r\n.vercel\r\n',
    },
    {
        fileName: 'pre-commit',
        filePath: '.husky\\pre-commit',
        content: '#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\nyarn lint-staged',
    },
    {
        fileName: '.prettierrc',
        filePath: '.prettierrc',
        content: '{\n    "semi": true,\n    "singleQuote": true,\n    "arrowParens": "avoid"\n}',
    },
    {
        fileName: 'package.json',
        filePath: 'package.json',
        content: '{\n  "name": "cow-backend-admin",\n  "version": "1.0.0",\n  "description": "",\n  "main": "src/server.js",\n  "scripts": {\n    "dev": "ts-node-dev --respawn --transpile-only src/server.ts","init": "npx prettier --write . && npm install",\n    "build": "tsc",\n    "start": "node dist/server.js",\n    "lint:check": "eslint --ignore-path .eslintignore --ext .js,.ts .",\n    "lint:fix": "eslint . --fix",\n    "prettier:check": "prettier --ignore-path .gitignore --write \\"**/*.+(js|ts|json)\\"",\n    "prettier:fix": "prettier --write .",\n    "lint-prettier": "yarn lint:check && yarn prettier:check",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "Naimur ",\n  "license": "ISC",\n  "lint-staged": {\n    "src/**/*.ts": "yarn lint-prettier"\n  },\n  "devDependencies": {\n    "@types/cors": "^2.8.13",\n    "@types/express": "^4.17.17",\n    "@typescript-eslint/eslint-plugin": "^4.0.0",\n    "@typescript-eslint/parser": "^4.0.0",\n    "eslint": "^7.0.0",\n    "eslint-config-prettier": "^8.8.0",\n    "husky": "^8.0.3",\n    "lint-staged": "^13.2.2",\n    "prettier": "^2.8.8",\n    "ts-node-dev": "^2.0.0",\n    "typescript": "^5.1.6"\n  },\n  "dependencies": {\n    "@types/bcrypt": "^5.0.0",\n    "@types/cookie-parser": "^1.4.3",\n    "@types/jsonwebtoken": "^9.0.2",\n    "bcrypt": "^5.1.0",\n    "cookie-parser": "^1.4.6",\n    "cors": "^2.8.5",\n    "dotenv": "^16.0.3",\n    "express": "^4.18.2",\n    "http-status": "^1.7.0",\n    "jsonwebtoken": "^9.0.0",\n    "moment-timezone": "^0.5.43",\n    "mongoose": "^7.2.1",\n    "winston": "^3.9.0",\n    "winston-daily-rotate-file": "^4.7.1",\n    "zod": "^3.21.4"\n  }\n}\n',
    },
    {
        fileName: 'README.md',
        filePath: 'README.md',
        content: `
    # Demo Project
    
    This is a brief description of your project.
    
    ## Getting Started
    
    These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
    
    ### Prerequisites
    
    What things you need to install and how to install them:
    
    - Node.js (version 14 or higher)
    - npm (version 7 or higher)
    
    ### Installing
    
    A step-by-step series of examples that tell you how to get a development environment running.
    
    1. Clone this repository to your local machine:
    
       \`\`\`bash
       git clone https://github.com/your-username/your-project-name.git
       \`\`\`
    
    2. Run scripts:
    
       \`\`\`bash
       npm run init
       \`\`\`
    
       Or
    
       \`\`\`bash
       npm install
       \`\`\`
    
    3. Start the project:
    
       \`\`\`bash
       npm run dev
       \`\`\`
    `,
    },
    {
        fileName: 'auth.ts',
        filePath: 'src\\app\\middlewares\\auth.ts',
        content: "import { NextFunction, Request, Response } from 'express';\nimport authJwtValidation from '../../helpers/authJwtValidation';\n\nconst auth =\n  () =>\n  async (req: Request, res: Response, next: NextFunction): Promise<void> => {\n    try {\n      //get authorization token\n      const token = req.headers.authorization;\n      const verifiedUser = authJwtValidation(token);\n      req.user = verifiedUser; //\n      next();\n    } catch (error) {\n      next(error);\n    }\n  };\n\nexport default auth;\n",
    },
    {
        fileName: 'globalErrorHandler.ts',
        filePath: 'src\\app\\middlewares\\globalErrorHandler.ts',
        content: "/* eslint-disable no-unused-vars */\n/* eslint-disable no-console */\n/* eslint-disable no-unused-expressions */\nimport { ErrorRequestHandler, NextFunction, Request, Response } from 'express';\nimport config from '../../config';\nimport ApiError from '../../errors/ApiError';\nimport handleValidationError from '../../errors/handleValidationError';\n\nimport { ZodError } from 'zod';\nimport handleCastError from '../../errors/handleCastError';\nimport handleZodError from '../../errors/handleZodError';\nimport { IGenericErrorMessage } from '../../interfaces/error';\n\nconst globalErrorHandler: ErrorRequestHandler = (\n  error,\n  req: Request,\n  res: Response,\n  next: NextFunction\n) => {\n  config.env === 'development'\n    ? console.log(`ð±âð globalErrorHandler ~~`, { error })\n    : console.log(`ð±âð globalErrorHandler ~~`, error);\n\n  let statusCode = 500;\n  let message = 'Something went wrong !';\n  let errorMessages: IGenericErrorMessage[] = [];\n\n  if (error?.name === 'ValidationError') {\n    const simplifiedError = handleValidationError(error);\n    statusCode = simplifiedError.statusCode;\n    message = simplifiedError.message;\n    errorMessages = simplifiedError.errorMessages;\n  } else if (error instanceof ZodError) {\n    const simplifiedError = handleZodError(error);\n    statusCode = simplifiedError.statusCode;\n    message = simplifiedError.message;\n    errorMessages = simplifiedError.errorMessages;\n  } else if (error?.name === 'CastError') {\n    const simplifiedError = handleCastError(error);\n    statusCode = simplifiedError.statusCode;\n    message = simplifiedError.message;\n    errorMessages = simplifiedError.errorMessages;\n  } else if (error instanceof ApiError) {\n    statusCode = error?.statusCode;\n    message = error.message;\n    errorMessages = error?.message\n      ? [\n          {\n            path: '',\n            message: error?.message,\n          },\n        ]\n      : [];\n  } else if (error instanceof Error) {\n    message = error?.message;\n    errorMessages = error?.message\n      ? [\n          {\n            path: '',\n            message: error?.message,\n          },\n        ]\n      : [];\n  }\n\n  res.status(statusCode).json({\n    success: false,\n    message,\n    errorMessages,\n    stack: config.env !== 'production' ? error?.stack : undefined,\n  });\n};\n\nexport default globalErrorHandler;\n\n//path:\n//message:\n\n// 2025 Fall\n\n// 2025 and\n",
    },
    {
        fileName: 'handleZodError.ts',
        filePath: 'src\\app\\middlewares\\handleZodError.ts',
        content: '',
    },
    {
        fileName: 'validateRequest.ts',
        filePath: 'src\\app\\middlewares\\validateRequest.ts',
        content: "import { NextFunction, Request, Response } from 'express';\nimport { AnyZodObject, ZodEffects } from 'zod';\n\nconst validateRequest =\n  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>\n  async (req: Request, res: Response, next: NextFunction): Promise<void> => {\n    try {\n      console.log(req.body);\n\n      await schema.parseAsync({\n        body: req.body,\n        query: req.query,\n        params: req.params,\n        cookies: req.cookies,\n      });\n      return next();\n    } catch (error) {\n      next(error);\n    }\n  };\n\nexport default validateRequest;\n",
    },
    {
        fileName: 'index.ts',
        filePath: 'src\\app\\routes\\index.ts',
        content: "import express from 'express';\r\nimport { BookRoutes } from '../modules/book/book.route';\r\nconst router = express.Router();\r\n\r\nconst moduleRoutes = [\r\n  {\r\n    path: '/books',\r\n    route: BookRoutes,\r\n  },\r\n];\r\n\r\nmoduleRoutes.forEach(route => router.use(route.path, route.route));\r\nexport default router;\r\n",
    },
    {
        fileName: 'app.ts',
        filePath: 'src\\app.ts',
        content: "import cors from 'cors';\nimport express, { Application, NextFunction, Request, Response } from 'express';\nimport httpStatus from 'http-status';\nimport globalErrorHandler from './app/middlewares/globalErrorHandler';\nimport routes from './app/routes';\nimport cookieParser from 'cookie-parser';\nconst app: Application = express();\n\napp.use(cors());\n\n//parser\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.use(cookieParser());\n\napp.use('/api/v1', routes);\n\n//Testing\n// app.get('/', async (req: Request, res: Response, next: NextFunction) => {\n//   throw new Error('Testing Error logger')\n// })\n//global error handler\napp.use(globalErrorHandler);\n\n//handle not found\napp.use((req: Request, res: Response, next: NextFunction) => {\n  res.status(httpStatus.NOT_FOUND).json({\n    success: false,\n    message: 'Not Found',\n    errorMessages: [\n      {\n        path: req.originalUrl,\n        message: 'API Not Found',\n      },\n    ],\n  });\n  next();\n});\n\nexport default app;\n",
    },
    {
        fileName: 'index.ts',
        filePath: 'src\\config\\index.ts',
        content: "/* eslint-disable no-undef */\nimport dotenv from 'dotenv';\nimport path from 'path';\n\ndotenv.config({ path: path.join(process.cwd(), '.env') });\n\nexport default {\n  env: process.env.NODE_ENV,\n  port: process.env.PORT,\n  database_url: process.env.DATABASE_URL,\n  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,\n  jwt: {\n    secret: process.env.JWT_SECRET,\n    refresh_secret: process.env.JWT_REFRESH_SECRET,\n    expires_in: process.env.JWT_EXPIRES_IN,\n    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,\n  },\n};\n",
    },
    {
        fileName: 'pagination.ts',
        filePath: 'src\\constants\\pagination.ts',
        content: "export const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder'];\n",
    },
    {
        fileName: 'users.ts',
        filePath: 'src\\enums\\users.ts',
        content: "/* eslint-disable no-unused-vars */\nexport enum ENUM_USER_ROLE {\n  ADMIN = 'admin',\n  SELLER = 'seller',\n  BUYER = 'buyer',\n}\n",
    },
    {
        fileName: 'ApiError.ts',
        filePath: 'src\\errors\\ApiError.ts',
        content: "class ApiError extends Error {\n  statusCode: number;\n\n  constructor(statusCode: number, message: string | undefined, stack = '') {\n    super(message);\n    this.statusCode = statusCode;\n    if (stack) {\n      this.stack = stack;\n    } else {\n      Error.captureStackTrace(this, this.constructor);\n    }\n  }\n}\n\nexport default ApiError;\n",
    },
    {
        fileName: 'handleCastError.ts',
        filePath: 'src\\errors\\handleCastError.ts',
        content: "import mongoose from 'mongoose';\nimport { IGenericErrorMessage } from '../interfaces/error';\n\nconst handleCastError = (error: mongoose.Error.CastError) => {\n  const errors: IGenericErrorMessage[] = [\n    {\n      path: error.path,\n      message: 'Invalid Id',\n    },\n  ];\n\n  const statusCode = 400;\n  return {\n    statusCode,\n    message: 'Cast Error',\n    errorMessages: errors,\n  };\n};\n\nexport default handleCastError;\n",
    },
    {
        fileName: 'handleValidationError.ts',
        filePath: 'src\\errors\\handleValidationError.ts',
        content: "import mongoose from 'mongoose';\nimport { IGenericErrorResponse } from '../interfaces/common';\nimport { IGenericErrorMessage } from '../interfaces/error';\n\nconst handleValidationError = (\n  error: mongoose.Error.ValidationError\n): IGenericErrorResponse => {\n  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(\n    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {\n      return {\n        path: el?.path,\n        message: el?.message,\n      };\n    }\n  );\n  const statusCode = 400;\n  return {\n    statusCode,\n    message: 'Validation Error',\n    errorMessages: errors,\n  };\n};\n\nexport default handleValidationError;\n",
    },
    {
        fileName: 'handleZodError.ts',
        filePath: 'src\\errors\\handleZodError.ts',
        content: "import { ZodError, ZodIssue } from 'zod';\nimport { IGenericErrorResponse } from '../interfaces/common';\nimport { IGenericErrorMessage } from '../interfaces/error';\n\nconst handleZodError = (error: ZodError): IGenericErrorResponse => {\n  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {\n    return {\n      path: issue?.path[issue.path.length - 1],\n      message: issue?.message,\n    };\n  });\n\n  const statusCode = 400;\n\n  return {\n    statusCode,\n    message: 'Validation Error',\n    errorMessages: errors,\n  };\n};\n\nexport default handleZodError;\n",
    },
    {
        fileName: 'authJwtValidation.ts',
        filePath: 'src\\helpers\\authJwtValidation.ts',
        content: "import httpStatus from 'http-status';\nimport ApiError from '../errors/ApiError';\nimport { jwtHelpers } from './jwtHelpers';\nimport config from '../config';\nimport { Secret } from 'jsonwebtoken';\n\nfunction authJwtValidation(token: string | undefined): any {\n  // if no token found\n  if (!token) {\n    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');\n  }\n  // verify token\n  let verifiedUser = null;\n\n  verifiedUser = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);\n\n  // // role guard\n  // if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {\n  //   throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');\n  // }\n  return verifiedUser;\n}\nexport default authJwtValidation;\n",
    },
    {
        fileName: 'jwtHelpers.ts',
        filePath: 'src\\helpers\\jwtHelpers.ts',
        content: "import jwt, { JwtPayload, Secret } from 'jsonwebtoken';\n\nconst createToken = (\n  payload: Record<string, unknown>,\n  secret: Secret,\n  expireTime: string\n): string => {\n  return jwt.sign(payload, secret, {\n    expiresIn: expireTime,\n  });\n};\n\nconst verifyToken = (token: string, secret: Secret): JwtPayload => {\n  return jwt.verify(token, secret) as JwtPayload;\n};\n\nexport const jwtHelpers = {\n  createToken,\n  verifyToken,\n};\n",
    },
    {
        fileName: 'paginationHelper.ts',
        filePath: 'src\\helpers\\paginationHelper.ts',
        content: "import { SortOrder } from 'mongoose';\n\ntype IOptions = {\n  page?: number;\n  limit?: number;\n  sortBy?: string;\n  sortOrder?: SortOrder;\n};\n\ntype IOptionsResult = {\n  page: number;\n  limit: number;\n  skip: number;\n  sortBy: string;\n  sortOrder: SortOrder;\n};\n\nconst calculatePagination = (options: IOptions): IOptionsResult => {\n  const page = Number(options.page || 1);\n  const limit = Number(options.limit || 10);\n  const skip = (page - 1) * limit;\n\n  const sortBy = options.sortBy || 'createdAt';\n  const sortOrder = options.sortOrder || 'desc';\n\n  return {\n    page,\n    limit,\n    skip,\n    sortBy,\n    sortOrder,\n  };\n};\n\nexport const paginationHelpers = {\n  calculatePagination,\n};",
    },
    {
        fileName: 'common.ts',
        filePath: 'src\\interfaces\\common.ts',
        content: "import { ENUM_USER_ROLE } from '../enums/users';\nimport { IGenericErrorMessage } from './error';\n\nexport type IGenericResponse<T> = {\n  meta: {\n    page: number;\n    limit: number;\n    total: number;\n  };\n  data: T;\n};\n\nexport type IGenericErrorResponse = {\n  statusCode: number;\n  message: string;\n  errorMessages: IGenericErrorMessage[];\n};\nexport type IVerifiedUser = {\n  role: ENUM_USER_ROLE.ADMIN | ENUM_USER_ROLE.SELLER | ENUM_USER_ROLE.BUYER;\n  _id: string;\n};\n",
    },
    {
        fileName: 'error.ts',
        filePath: 'src\\interfaces\\error.ts',
        content: 'export type IGenericErrorMessage = {\n  path: string | number;\n  message: string;\n};\n',
    },
    {
        fileName: 'index.d.ts',
        filePath: 'src\\interfaces\\index.d.ts',
        content: "import { JwtPayload } from 'jsonwebtoken';\n\ndeclare global {\n  namespace Express {\n    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions\n    interface Request {\n      user: JwtPayload | null;\n    }\n  }\n}\n",
    },
    {
        fileName: 'pagination.ts',
        filePath: 'src\\interfaces\\pagination.ts',
        content: "export type IPaginationOptions = {\n  page?: number;\n  limit?: number;\n  sortBy?: string;\n  sortOrder?: 'asc' | 'desc';\n};\n",
    },
    {
        fileName: 'server.ts',
        filePath: 'src\\server.ts',
        content: "import { Server } from 'http';\r\nimport mongoose from 'mongoose';\r\nimport app from './app';\r\nimport config from './config/index';\r\n// import { logger } from './shared/logger';\r\nprocess.on('uncaughtException', error => {\r\n  console.log(error);\r\n  process.exit(1);\r\n});\r\n\r\nlet server: Server;\r\n\r\nasync function bootstrap() {\r\n  try {\r\n    console.log(`ð¢   Database is connecting...`);\r\n    await mongoose.connect(config.database_url as string);\r\n    console.log(`ð¢   Database is connected successfully`);\r\n\r\n    server = app.listen(config.port, () => {\r\n      console.log(`Application  listening on port ${config.port}`);\r\n    });\r\n  } catch (err) {\r\n    console.log('Failed to connect database', err);\r\n  }\r\n\r\n  process.on('unhandledRejection', error => {\r\n    if (server) {\r\n      server.close(() => {\r\n        console.log(error);\r\n        process.exit(1);\r\n      });\r\n    } else {\r\n      process.exit(1);\r\n    }\r\n  });\r\n}\r\n\r\nbootstrap();\r\n\r\nprocess.on('SIGTERM', () => {\r\n  console.log('SIGTERM is received');\r\n  if (server) {\r\n    server.close();\r\n  }\r\n});\r\n",
    },
    {
        fileName: 'catchAsync.ts',
        filePath: 'src\\shared\\catchAsync.ts',
        content: "import { NextFunction, Request, RequestHandler, Response } from 'express';\n\nconst catchAsync =\n  (fn: RequestHandler) =>\n  async (req: Request, res: Response, next: NextFunction): Promise<void> => {\n    try {\n      await fn(req, res, next);\n    } catch (error) {\n      next(error);\n    }\n  };\n\nexport default catchAsync;\n",
    },
    {
        fileName: 'logger.ts',
        filePath: 'src\\shared\\logger.ts',
        content: "// /* eslint-disable no-undef */\n// import path from 'path';\n// import { createLogger, format, transports } from 'winston';\n// import DailyRotateFile from 'winston-daily-rotate-file';\n// const { combine, timestamp, label, printf } = format;\n\n// //Customm Log Format\n\n// const myFormat = printf(({ level, message, label, timestamp }) => {\n//   const date = new Date(timestamp);\n//   const hour = date.getHours();\n//   const minutes = date.getMinutes();\n//   const seconds = date.getSeconds();\n//   return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`;\n// });\n\n// const logger = createLogger({\n//   level: 'info',\n//   format: combine(label({ label: 'EC' }), timestamp(), myFormat),\n//   transports: [\n//     new transports.Console(),\n//     new DailyRotateFile({\n//       filename: path.join(\n//         process.cwd(),\n//         'logs',\n//         'winston',\n//         'successes',\n//         'phu-%DATE%-success.log'\n//       ),\n//       datePattern: 'YYYY-DD-MM-HH',\n//       zippedArchive: true,\n//       maxSize: '20m',\n//       maxFiles: '14d',\n//     }),\n//   ],\n// });\n\n// const errorlogger = createLogger({\n//   level: 'error',\n//   format: combine(label({ label: 'PH' }), timestamp(), myFormat),\n//   transports: [\n//     new transports.Console(),\n//     new DailyRotateFile({\n//       filename: path.join(\n//         process.cwd(),\n//         'logs',\n//         'winston',\n//         'errors',\n//         'phu-%DATE%-error.log'\n//       ),\n//       datePattern: 'YYYY-DD-MM-HH',\n//       zippedArchive: true,\n//       maxSize: '20m',\n//       maxFiles: '14d',\n//     }),\n//   ],\n// });\n\n// export { logger, errorlogger };\n",
    },
    {
        fileName: 'pick.ts',
        filePath: 'src\\shared\\pick.ts',
        content: "//['page','limit','sortBy','sortOrder']\n\nconst pick = <T extends Record<string, unknown>, k extends keyof T>(\n  obj: T,\n  keys: k[]\n): Partial<T> => {\n  const finalObj: Partial<T> = {};\n\n  for (const key of keys) {\n    if (obj && Object.hasOwnProperty.call(obj, key)) {\n      finalObj[key] = obj[key];\n    }\n  }\n  return finalObj;\n};\n\nexport default pick;\n",
    },
    {
        fileName: 'sendResponse.ts',
        filePath: 'src\\shared\\sendResponse.ts',
        content: "import { Response } from 'express';\n\ntype IApiReponse<T> = {\n  statusCode: number;\n  success: boolean;\n  message?: string | null;\n  meta?: {\n    page: number;\n    limit: number;\n    total: number;\n  };\n  data?: T | null;\n};\n\nconst sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {\n  const responseData: IApiReponse<T> = {\n    statusCode: data.statusCode,\n    success: data.success,\n    message: data.message || null,\n    meta: data.meta || null || undefined,\n    data: data.data || null,\n  };\n\n  res.status(data.statusCode).json(responseData);\n};\n\nexport default sendResponse;\n",
    },
    {
        fileName: 'tsconfig.json',
        filePath: 'tsconfig.json',
        content: '{\n  "include": [\n    "src", \n  ], // which files to compile\n  "exclude": ["node_modules"], // which files to skip\n  "compilerOptions": {\n    /* Visit https://aka.ms/tsconfig to read more about this file */\n\n    /* Projects */\n    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */\n    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */\n    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */\n    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */\n    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */\n    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */\n\n    /* Language and Environment */\n    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,\n    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */\n    // "jsx": "preserve",                                /* Specify what JSX code is generated. */\n    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */\n    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */\n    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. \'React.createElement\' or \'h\'. */\n    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. \'React.Fragment\' or \'Fragment\'. */\n    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using \'jsx: react-jsx*\'. */\n    // "reactNamespace": "",                             /* Specify the object invoked for \'createElement\'. This only applies when targeting \'react\' JSX emit. */\n    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */\n    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */\n    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */\n\n    /* Modules */\n    "module": "commonjs" /* Specify what module code is generated. */,\n    "rootDir": "./src" /* Specify the root folder within your source files. */,\n    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */\n    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */\n    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */\n    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */\n    // "typeRoots": [],                                  /* Specify multiple folders that act like \'./node_modules/@types\'. */\n    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */\n    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */\n    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */\n    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires \'--moduleResolution bundler\' and either \'--noEmit\' or \'--emitDeclarationOnly\' to be set. */\n    // "resolvePackageJsonExports": true,                /* Use the package.json \'exports\' field when resolving package imports. */\n    // "resolvePackageJsonImports": true,                /* Use the package.json \'imports\' field when resolving imports. */\n    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */\n    // "resolveJsonModule": true,                        /* Enable importing .json files. */\n    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */\n    // "noResolve": true,                                /* Disallow \'import\'s, \'require\'s or \'<reference>\'s from expanding the number of files TypeScript should add to a project. */\n\n    /* JavaScript Support */\n    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the \'checkJS\' option to get errors from these files. */\n    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */\n    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from \'node_modules\'. Only applicable with \'allowJs\'. */\n\n    /* Emit */\n    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */\n    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */\n    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */\n    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */\n    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If \'declaration\' is true, also designates a file that bundles all .d.ts output. */\n    "outDir": "./dist" /* Specify an output folder for all emitted files. */,\n    // "removeComments": true,                           /* Disable emitting comments. */\n    // "noEmit": true,                                   /* Disable emitting files from a compilation. */\n    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */\n    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */\n    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */\n    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */\n    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */\n    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */\n    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */\n    // "newLine": "crlf",                                /* Set the newline character for emitting files. */\n    // "stripInternal": true,                            /* Disable emitting declarations that have \'@internal\' in their JSDoc comments. */\n    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like \'__extends\' in compiled output. */\n    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */\n    // "preserveConstEnums": true,                       /* Disable erasing \'const enum\' declarations in generated code. */\n    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */\n    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */\n\n    /* Interop Constraints */\n    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */\n    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file\'s format based on the \'module\' setting. */\n    // "allowSyntheticDefaultImports": true,             /* Allow \'import x from y\' when a module doesn\'t have a default export. */\n    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables \'allowSyntheticDefaultImports\' for type compatibility. */,\n    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */\n    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,\n\n    /* Type Checking */\n    "strict": true /* Enable all strict type-checking options. */,\n    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied \'any\' type. */\n    // "strictNullChecks": true,                         /* When type checking, take into account \'null\' and \'undefined\'. */\n    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */\n    // "strictBindCallApply": true,                      /* Check that the arguments for \'bind\', \'call\', and \'apply\' methods match the original function. */\n    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */\n    // "noImplicitThis": true,                           /* Enable error reporting when \'this\' is given the type \'any\'. */\n    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as \'unknown\' instead of \'any\'. */\n    // "alwaysStrict": true,                             /* Ensure \'use strict\' is always emitted. */\n    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren\'t read. */\n    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn\'t read. */\n    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding \'undefined\'. */\n    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */\n    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */\n    // "noUncheckedIndexedAccess": true,                 /* Add \'undefined\' to a type when accessed using an index. */\n    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */\n    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */\n    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */\n    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */\n\n    /* Completeness */\n    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */\n    "skipLibCheck": true /* Skip type checking all .d.ts files. */\n  }\n}\n',
    },
    {
        fileName: 'vercel.json',
        filePath: 'vercel.json',
        content: '{\r\n  "version": 2,\r\n  "builds": [\r\n    {\r\n      "src": "dist/server.js",\r\n      "use": "@now/node"\r\n    }\r\n  ],\r\n  "routes": [\r\n    {\r\n      "src": "/(.*)",\r\n      "dest": "dist/server.js"\r\n    }\r\n  ]\r\n}\r\n',
    },
];
exports.default = mongooseTemplates;
