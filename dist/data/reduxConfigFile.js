"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduxConfigFile = void 0;
const reactReduxTsContent = [
    {
        fileName: 'store.ts',
        filePath: 'src\\redux\\app\\store.ts',
        content: `
        import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice/apiSlice";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
        `,
    },
    {
        fileName: 'apiSlice.ts',
        filePath: 'src\\redux\\features\\apiSlice\\apiSlice.ts',
        content: `
        import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
        
        export const apiSlice = createApi({
          reducerPath: "api",
          baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:5000/api/v1",
        
            prepareHeaders: async (headers, { getState, endpoint }) => {
              const token = localStorage.getItem("accessToken");
              if (token) {
                headers.set("authorization", \`\${token}\`);
              }
        
              return headers;
            },
          }),
          endpoints: (builder) => ({}),
        });
        `,
    },
    {
        fileName: 'hook.ts',
        filePath: 'src\\redux\\hook.ts',
        content: `import { useDispatch, useSelector } from "react-redux";
    import type { TypedUseSelectorHook } from "react-redux";
    import type { RootState, AppDispatch } from "./app/store";
    
    export const useAppDispatch: () => AppDispatch = useDispatch;
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    `,
    },
];
const reactReduxJsContent = [
    {
        fileName: 'store.js',
        filePath: 'src\\redux\\app\\store.js',
        content: `
    import { configureStore } from '@reduxjs/toolkit';
    import { apiSlice } from '../features/apiSlice/apiSlice'; 
    
    export const store = configureStore({
      reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, 
    
      },
      devTools: process.env.NODE_ENV !== "production",
      middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
    })
    
        `,
    },
    {
        fileName: 'apiSlice.js',
        filePath: 'src\\redux\\features\\apiSlice\\apiSlice.js',
        content: `
        import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
        
        export const apiSlice = createApi({
          reducerPath: "api",
          baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:5000/api/v1",
        
            prepareHeaders: async (headers, { getState, endpoint }) => {
              const token = localStorage.getItem("accessToken");
              if (token) {
                headers.set("authorization", \`\${token}\`);
              }
        
              return headers;
            },
          }),
          endpoints: (builder) => ({}),
        });
        `,
    },
];
exports.reduxConfigFile = {
    reactReduxTsContent,
    reactReduxJsContent,
};
