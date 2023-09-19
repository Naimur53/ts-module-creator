/* eslint-disable no-unused-vars */
import { ITechnology } from '../../../interfaces/common';

// MUI = 'MUI (Material-UI)',
// TailwindCSS = 'Tailwind CSS',
// ChakraUI = 'Chakra UI',
// Bootstrap = 'Bootstrap',
// AntDesign = 'Ant Design',

type INpmPackage = {
  name: string;
  version: string;
  addToDevDependencies?: boolean;
};
type IWrap = {
  wrapperName: string | undefined;
  importFrom: string;
};
type IFirebaseAuth = {
  config: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };
  auth: string[];
};
export type ICssFramework = {
  npmPackages: INpmPackage[];
  addWraps: IWrap[];
};

export type IReactReduxTemplateRequestBody = {
  apis?: string[];
  pages?: string[];
  hooks?: string[];
  firebaseAuth?: IFirebaseAuth;
  technology: ITechnology;
  cssFrameWork?: ICssFramework;
  npmPackages?: INpmPackage[];
  wrappers?: IWrap[];
};

export type IReactReduxTemplateRequestService =
  IReactReduxTemplateRequestBody & {
    shouldComment: boolean;
    name: string;
  };
