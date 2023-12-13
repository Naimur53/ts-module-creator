"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactPageContent = void 0;
const tsPage = `
import React from "react";
const Demo: React.FC = () => {
  return (
    <>
      <div className="flex text-4xl justify-center items-center h-screen">
        <h1>Say Hello To Demo Page</h1>
      </div>
    </>
  );
};

export default Demo;  
`;
const jsPage = `
import React from "react";
const Demo = () => {
  return (
    <>
      <div className="flex text-4xl justify-center items-center h-screen">
        <h1>Say Hello To Demo Page</h1>
      </div>
    </>
  );
};

export default Demo;  
`;
exports.reactPageContent = {
    tsPage,
    jsPage,
};
