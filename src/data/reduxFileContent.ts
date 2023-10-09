const reduxTsApiFileContent = `
import { apiSlice } from "../apiSlice/apiSlice";
export const demoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDemos: builder.query({
      query: (query) => {
        return {
          url: \`/demos?\${query}\`,
        };
      },
    }),
    getDemoById: builder.query({
      query: (id) => \`/demos/\${id}\`,
    }),
    addDemo: builder.mutation({
      query: (info) => {
        return {
          url: "/demos",
          method: "POST",
          body: info,
        };
      },
    }),
    editDemo: builder.mutation({
      query: (info) => {
        return {
          url: \`/demos/\${info._id}\`,
          method: "PATCH",
          body: info,
        };
      },
    }),
    deleteDemo: builder.mutation({
      query: (id) => {
        return {
          url: \`/demos/\${id}\`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useGetDemosQuery,
  useAddDemoMutation,
  useDeleteDemoMutation,
  useEditDemoMutation,
  useGetDemoByIdQuery,
} = demoApi;
`;

const reduxJsReducerContent = `
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
}

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        setDemo: (state, action) => {

 
        }
    },
})
export const { setDemo } = demoSlice.actions;
export default demoSlice.reducer;
`;
const reduxTsReducerContent = ` 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState { 
}

// Define the initial state using that type
const initialState: IInitialState = {
 
};

export const demoSlice = createSlice({
  name: "demo",
  // createSlice will infer the state type from the initialState argument
  initialState,
  reducers: {
    setDemo: (state, action: PayloadAction<any>) => { 

    },
   
  },
});

export const { setDemo } = demoSlice.actions;

export default demoSlice.reducer;
`;
const reduxTsSelector = `
import { RootState } from "@/redux/app/store";

export const selectorDemo = (state: RootState) => state.demo;
`;
const reduxJsSelector = `
export const selectDemo = state => state.demo
`;
export const reduxFileContent = {
  reduxTsApiFileContent,
  reduxTsReducerContent,
  reduxJsReducerContent,
  reduxJsSelector,
  reduxTsSelector,
};
