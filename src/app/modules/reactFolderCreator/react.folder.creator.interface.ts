/* eslint-disable no-unused-vars */
import { IContent, ITechnology } from '../../../interfaces/common';

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
  wrapperNameFirst?: string | undefined;
  wrapperNameLast?: string | undefined;
  importFrom: string;
};
export type IFirebaseAuth = {
  config: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
  auth: string[];
};
export type ICssFramework = {
  npmPackages: INpmPackage[];
  addWraps: IWrap[];
};

export type IReactTemplateRequestBody = {
  apis?: string[];
  pages?: string[];
  hooks?: string[];
  firebaseAuth?: IFirebaseAuth;
  technology: ITechnology;
  npmPackages?: INpmPackage[];
  wrappers?: IWrap[];
  othersFileFolder?: IContent[];
};

export type IReactTemplateRequestService = IReactTemplateRequestBody & {
  shouldComment: boolean;
  name: string;
};
