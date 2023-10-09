import { IContent } from '../interfaces/common';

const nextJsFileTsContent: IContent[] = [
  {
    fileName: '.eslintrc.json',
    filePath: '.eslintrc.json',
    content: '{\n  "extends": "next/core-web-vitals"\n}\n',
  },
  {
    fileName: '.gitignore',
    filePath: '.gitignore',
    content:
      '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# next.js\n/.next/\n/out/\n\n# production\n/build\n\n# misc\n.DS_Store\n*.pem\n\n# debug\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# local env files\n.env*.local\n\n# vercel\n.vercel\n\n# typescript\n*.tsbuildinfo\nnext-env.d.ts\n',
  },
  {
    fileName: 'next-env.d.ts',
    filePath: 'next-env.d.ts',
    content:
      '/// <reference types="next" />\n/// <reference types="next/image-types/global" />\n\n// NOTE: This file should not be edited\n// see https://nextjs.org/docs/basic-features/typescript for more information.\n',
  },
  {
    fileName: 'next.config.js',
    filePath: 'next.config.js',
    content:
      "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n}\n\nmodule.exports = nextConfig\n",
  },
  {
    fileName: 'package.json',
    filePath: 'package.json',
    content:
      '{\n  "name": "my-ts-next",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n  "init": "npx prettier --write . && npm install",  "lint": "next lint"\n  },\n  "dependencies": {\n    "@types/node": "20.6.3",\n    "@types/react": "18.2.22",\n    "@types/react-dom": "18.2.7",\n    "eslint": "8.49.0",\n    "eslint-config-next": "13.5.2",\n    "next": "13.5.2",\n    "react": "18.2.0",\n    "react-dom": "18.2.0",\n    "typescript": "5.2.2"\n  }\n}\n',
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
    fileName: 'hello.ts',
    filePath: 'src\\pages\\api\\hello.ts',
    content:
      "// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nimport type { NextApiRequest, NextApiResponse } from 'next'\n\ntype Data = {\n  name: string\n}\n\nexport default function handler(\n  req: NextApiRequest,\n  res: NextApiResponse<Data>\n) {\n  res.status(200).json({ name: 'John Doe' })\n}\n",
  },
  {
    fileName: 'index.tsx',
    filePath: 'src\\pages\\index.tsx',
    content:
      'export default function Home() {\n  return (\n    <>\n      <div>Hello From Home page</div>\n    </>\n  );\n}\n',
  },
  {
    fileName: '_app.tsx',
    filePath: 'src\\pages\\_app.tsx',
    content:
      "import '@/styles/globals.css'\nimport type { AppProps } from 'next/app'\n\nexport default function App({ Component, pageProps }: AppProps) {\n  return <Component {...pageProps} />\n}\n",
  },
  {
    fileName: '_document.tsx',
    filePath: 'src\\pages\\_document.tsx',
    content:
      'import { Html, Head, Main, NextScript } from \'next/document\'\n\nexport default function Document() {\n  return (\n    <Html lang="en">\n      <Head />\n      <body>\n        <Main />\n        <NextScript />\n      </body>\n    </Html>\n  )\n}\n',
  },
  {
    fileName: 'globals.css',
    filePath: 'src\\styles\\globals.css',
    content: '',
  },
  {
    fileName: 'Home.module.css',
    filePath: 'src\\styles\\Home.module.css',
    content: '',
  },
  {
    fileName: 'tsconfig.json',
    filePath: 'tsconfig.json',
    content:
      '{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["dom", "dom.iterable", "esnext"],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "strict": true,\n    "noEmit": true,\n    "esModuleInterop": true,\n    "module": "esnext",\n    "moduleResolution": "bundler",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "jsx": "preserve",\n    "incremental": true,\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  },\n  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],\n  "exclude": ["node_modules"]\n}\n',
  },
];
export default nextJsFileTsContent;
