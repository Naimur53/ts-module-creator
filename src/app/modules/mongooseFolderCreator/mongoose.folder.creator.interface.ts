export type IFields = {
  fieldName: string;
  type: any;
  length: number;
  isRequired: boolean;
  isUnique: boolean;
};
export type IModules = {
  name: string;
  fields: IFields[];
  shouldAddPaginationAndQuery: boolean;
  searchTermFields?: string[];
  exactMatchFields?: string[];
};
export type IMongooseTemplateRequest = {
  modules: IModules[];
};
export type IMongooseTemplateBodyRequest = IMongooseTemplateRequest & {
  name: string;
};
