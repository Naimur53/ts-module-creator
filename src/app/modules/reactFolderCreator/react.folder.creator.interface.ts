/* eslint-disable no-unused-vars */
import { ITechnology } from '../../../interfaces/common';

export enum ICssFramework {
  MUI = 'MUI (Material-UI)',
  TailwindCSS = 'Tailwind CSS',
  ChakraUI = 'Chakra UI',
  Bootstrap = 'Bootstrap',
  AntDesign = 'Ant Design',
}

type INpmPackage = {
  name: string;
  version: string;
};

export type IReactReduxTemplateRequestBody = {
  apis: string[];
  pages: string[];
  hooks: string[];
  firebaseAuth: string[];
  technology: ITechnology;
  cssFrameWork: ICssFramework;
  npmPackages: INpmPackage[];
};

export type IReactReduxTemplateRequestService =
  IReactReduxTemplateRequestBody & {
    shouldComment: boolean;
    name: string;
  };
