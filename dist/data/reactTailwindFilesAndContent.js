"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactTailwindFilesAndContent = [
    {
        fileName: 'index.css',
        filePath: 'src\\index.css',
        content: '@import "tailwindcss/base";\n@import "tailwindcss/components";\n@import "tailwindcss/utilities";',
    },
    {
        fileName: 'tailwind.config.js',
        filePath: 'tailwind.config.js',
        content: `module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {}, 
      },
      plugins: [],
    };
    `,
    },
    {
        fileName: 'postcss.config.js',
        filePath: 'postcss.config.js',
        content: `module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }`,
    },
];
exports.default = reactTailwindFilesAndContent;
