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
      '{\n  "name": "my-ts-next",\n  "version": "0.1.0",\n  "private": true,\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start",\n    "lint": "next lint"\n  },\n  "dependencies": {\n    "@types/node": "20.6.3",\n    "@types/react": "18.2.22",\n    "@types/react-dom": "18.2.7",\n    "eslint": "8.49.0",\n    "eslint-config-next": "13.5.2",\n    "next": "13.5.2",\n    "react": "18.2.0",\n    "react-dom": "18.2.0",\n    "typescript": "5.2.2"\n  }\n}\n',
  },
  {
    fileName: 'README.md',
    filePath: 'README.md',
    content:
      'This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\n\n## Getting Started\n\nFirst, run the development server:\n\n```bash\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n# or\nbun dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.\n\nYou can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.\n\n[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.\n\nThe `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.\n\nThis project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.\n\n## Learn More\n\nTo learn more about Next.js, take a look at the following resources:\n\n- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.\n- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n\nYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!\n\n## Deploy on Vercel\n\nThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.\n\nCheck out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.\n',
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
