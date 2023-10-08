import { IContent } from '../interfaces/common';

const reactReduxTemplates: IContent[] = [
  {
    fileName: '.gitignore',
    filePath: '.gitignore',
    content:
      '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# production\n/build\n\n# misc\n.DS_Store\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n',
  },
  {
    fileName: 'package.json',
    filePath: 'package.json',
    content:
      '{\n  "name": "demo",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@reduxjs/toolkit": "^1.9.5",\n    "@testing-library/jest-dom": "^5.16.5",\n    "@testing-library/react": "^13.4.0",\n    "@testing-library/user-event": "^13.5.0",\n    "@types/jest": "^27.5.2",\n    "@types/node": "^16.18.38",\n    "@types/react": "^18.2.15",\n    "@types/react-dom": "^18.2.7",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-redux": "^8.1.1",\n    "react-router-dom": "^6.14.1",\n    "react-scripts": "5.0.1",\n    "typescript": "^4.9.5",\n    "web-vitals": "^2.1.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n  "init": "npx prettier --write . && npm install",  "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "eslintConfig": {\n    "extends": [\n      "react-app",\n      "react-app/jest"\n    ]\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  },\n  "devDependencies": {\n    "@types/react-router-dom": "^5.3.3",\n    "tailwindcss": "^3.3.3"\n  }\n}\n',
  },
  {
    fileName: 'favicon.ico',
    filePath: 'public\\favicon.ico',
    content:
      '\u0000\u0000\u0001\u0000\u0004\u0000\u0010\u0010\u0000\u0000\u0001\u0000 \u0000�\u0001\u0000\u0000F\u0000\u0000\u0000\u0018\u0018\u0000\u0000\u0001\u0000 \u0000\f\u0003\u0000\u0000)\u0002\u0000\u0000  \u0000\u0000\u0001\u0000 \u00009\u0003\u0000\u00005\u0005\u0000\u0000@@\u0000\u0000\u0001\u0000 \u0000�\u0006\u0000\u0000n\b\u0000\u0000�PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0010\b\u0003\u0000\u0000\u0000(-\u000fS\u0000\u0000\u0000�PLTE""""""""""""""""""2PX=r�)7;*:>H��-BGE��8do5Xb6[eK��K��1MU9gs3S\\I��:gt\'03@{�V��T��A}�V��@y�6\\fH��-CII��E��+;@7_i7_jF��J��K��H��-BHa��,@FC��L��&.0W��N��I��$)+B��J��R��?v�>s�>u�S��=qP��P��P��,?D4U^%+-M��K��%+,2OX+<AL��#&&D��%,.I��v�T�\u0000\u0000\u0000\u0005tRNSI��J�e�e�\u0000\u0000\u0000�IDATx\u0001M��ZEA\f��ٳ\t��%R����TTh�G��,���=\u0003�\u0016��m�f�mnf�A�$�>!\u0003�g��Hg��Eߏܵ}\u0002\t\u0006ݻ����k\u0010d\u0013���Jo\u0011���3�L"J������Q�$��ļ\u001fff�,�5i9\u0002\u0019̟�H�\u001c/mB\u0002��w��w;D\r�+&�W�\u0015���D�o\u0014@ʴRI��B�om\u001a.\u0007۳\u0007�\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u0018\b\u0003\u0000\u0000\u0000ש��\u0000\u0000\u0001ePLTE""""""""""""""""""""""""2RZN��J��3R[J��)59Y��0KS4W`Q��L��%+-0JR)6::gtC��"##?v�U��?w�<n{&-/Y��=q:iuB�A}�A{�B��/IPP��=q�K��_��L��$();lzR��a��I��Z��3U^1MU3T]Z��I��X��F��-BGP��6[e,@E5ZdO��-BHX��+=AW��,@FW��Q��?v�W��+<A@y�"#$\\��4Wa\\��S��$(*.EL^��V��6]h#$%G��#&\';jwV��-CIL��Z��^��>u�S��/HNM��_��\\��M��8doD��D��>t�+=B[��,>C>t�<o}@y�0LS.EKT��$\'(%,.A~�W��C��%+,\\��C!�\u001d\u0000\u0000\u0000\u0007tRNS\u0006����G��\u0000\u0000\u0001OIDATx\u0001l��B�Q\u0014��u��_ȳ<�\u0016��v\u001ce��\u0006���a\u00166\u0016Aξ�\u0017\u0004�v�{\u0007@�\u0007\u0000E\'\u0000�d\u0000I�!�\u001c��\u001a \u0000�C��T�\u000b�g\u0000\u001c\u00001�E(�\u0005\u0014�SQs\u001a�i\rď�Z��\u0016V\u0006�\u000b\u0000\u0002�)�g!��h��\u0010\u0002t\u0005�-i}��\u0011�<�?\u0015��lBZaĴ4{D�⌻_e8�yǁ��\u001f3�)��?�f;8.�\u001c�t�=�;\u000e\t:�52fKZ�l\u0012��ؚ�9.�#��\u0002A�q���\u0016\u0006\u001f��V��`=\u0003\u0003$��?_���\u0005�qM�.�J$\u000f\n?^q���ۏ�.},��s��\f\f_TttԾ\u0000\u00151#\u0007�/(�-[\u0006\u0012��`��`�\u0004����Z\u001fd5����?�ebZ�ވi.��\f\u0010\u0019�q΄+1�\u0001}5�\u0000\u0000��d�G���\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000 \u0000\u0000\u0000 \b\u0003\u0000\u0000\u0000D���\u0000\u0000\u0001APLTE\u0000\u0000\u0000"""""""""""""""""""""""""""2RZV��_��U��=r�$()\'25]��C��0LS<o}X��X��0JQ=p~D��<n{V��E��8do_��E��F��H��9dp_��H��I��F��6[e`��`��L��/GM_��U��\'02P��/IPP��X��&/1;ly3R[`��G��T��\\��a��1OW"##Q��a��R��=q�`��.EL+=AT��-CIK��#&\'C��^��I��&.04U^^��@y�Z��$(*[��^��,?DR��"#$1NV1MTD��>u�;kxG��R��/HN&-/@y�>s�>t�@z�]��P��$\'(D��]��<n|0JRU��\u000e�\\�\u0000\u0000\u0000\ttRNS\u0000%��\'��(�~���\u0000\u0000\u0001�IDATx\u0001��\u0003�C1\u0014F_ݿMm۶4�m{�\u000b��n����\t�\u0004A$��\u0007$b� He�\u0005�T\u0010�W��h��h�:PtZ\rQ�0@.`��`4�-V\u001b`�Z�&�A�\u0001#��bk������>.\'\'�\u0003`\u0004C$\bF��\t�(\u0018�x"6X\u0010�\u0004c\u0012�T��L�@I\u001a�;d\u0000d-�|�P,\u0001Ȕ9�R��\u001b�f3\u0014��F�VmM\u000b�X����\u0019�\u0017@Y�7����N�=\u0012\u0016�\f���ʪu\r}֬�+�e�aiq ��76����=h\r�Z���\u001cl\u0001�\u001b�}�\u0006ʱ�[F�I9A�k9\u0006���\u000b�\u0014�3��9\u0013Ρ�qB~��b���U_�^��\u0000[\u0007��\u000ew��{z�\u0007v�\u001bz��(��(��(��\u0007��f�q��G���k���Y�\u0016��f���~�:*4�Q\\O>�����<ד�W���Z|\u0007ދ�7���jT���n\u000f���\u000f��`$H�+�GO���*�x���\u0001�X*|\u0002�\u0018^�\u0005\u000fd\u000f\u0000\u0000\u0000\u0000IEND�B`��PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000@\u0000\u0000\u0000@\b\u0003\u0000\u0000\u0000����\u0000\u0000\u0002:PLTE\u0000\u0000\u0000"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""%+-@y�W��`��^��S��C��,>C*8<X��a��a��M��+<Aa��X��#%%T��L��=q>u�K��`��A}�L��8do=r�%+,@y�^��S��)59=q�P��U��"#$P��\\��0JQQ��"##U��#&&_��>t�>s�`��_��5Yc1OW5Zd1NV+=B1MU+;@/GM\\��*;?3S\\)8<2RZ_��+=A]��,@F,@E&-/0KS7alO��9dp8amB~�E��P��N��\'023T]]��?x�3U^C��6\\gU��&.0D��7_iR��H��I��M��$(*?v�Z��X��-AG#$%[��8co[��W��C��\'25?v�8bn%*+L��N��2PX)7;=p~(58^��P��4WaQ��T��0JRQ��T��I��6]hR��T��0LSF��9eqE��E��9gsF��C��#&\'\\��`��&/16\\fB��A{�R��]��(47%,.*:>*9=9fr:gt7^iU��?w�Z��X��^��Q��H��)6:V��\'034U^E��.EL.FMK��@z�S�\u001c\u000e\u0000\u0000\u0000\u0019tRNS\u0000*����\u0006���\t���+����Ԑ,����=V�\u0000\u0000\u0004\fIDATx\u0001�˵\u0001C!\u0000\u0004��C|�\u0005��\u0005^yR]�M��O]����0N�2����"\u001b\u0019���(0V\u0015�(�Y%PDT-~(m��!�K\f�Y�\u0015~���I�f{��\u001f��a����3��Op&�\u001cФ��\u0000x��#�j��ڶm�m��c)]m����)Ƨgf�\u0014hk���Ҡ�gg�Ǚ��\u0019�+X���uiy\u0005Vת�k���\\[�:,�\b6��jĲ\r;�"�;��X��\u0001�f��\u0011�����S����8=�o�;���(\u0018���ӥBk�e��\u0015\\\u001b\u00057p+m����N�<��Q�\bO���\u0005���y�g�\u0015tt��\u001bo������V�\u0001���s\u0002������&_�a\u0014���V\u0015~��\u0019?�*8��Q ;8��,���\u000bf���\u001d1\u000b�x��ק�\u0004*���A���a#\b��\u0016��#�nP�i+��C�,�����_�Nb��ø�\u0005\u0000�H�B*�Ҧ �L(\u0000^<�Á�L6\u0007pJ�P��\b����%"�R,�9\u0005�e3eR�a1�(\n��q�8َ��mK˱mƶm���yi!�\u000eΪY�u���_��?i���+�\u000f��A\u0011|\u0016�{���?��_En\u0001).\u0001J�D�<�\n���Z\\Ts�R*\b(\u0017\t��\u0005J��\u0002�u\u0010X/\u001a\r4J\u00139��5�DE�4k�4�&i�V4�\u0002���\u0016\b��vsf:�g,���BC��$�\b����@\u0011�I_?\u0003<\u001d\u0014�!\f^���ӽ����B�%\u0010L�w�\u0018\u0006FD1���(F�\u001e��\u001eH�%0�\u0003�\u0019��؄(�0�\u0012��\u0018\u0017\'��\u0001�N.0u�@�Y�P\u0004W�I�aN�K\f�\u000f��?�ӵ�=�e�v/c����0c\u00160�2��:�06R-u�ĭ\\Q̶�䴼�6R#\r�F��6��rՁ��u��m�����I�i~\u0001 ����ÏsP�"�\u0000\u000b�\reiy��P����򒧡���,S]U��V�\u001b�֔��Z��o��\u001b�xz���Snm�{ںwaل�\u001e�Ż���(mg/�������\u0005�[�\b\u0018\u0019b��\u0017q��&կ\u0007��$\u0016�zȊ\u0017�\u0004H>a�KT1/��1O��0�.h\u0007͇Y�A���\n-�>ۋ���Xբ�}ߨ�\f��;\u0007��N��v���θ�1\u0000����O@&v/��_��\\�\u000e�\\�.\u000f��+0�\u0003;\u001c\u0014\u0001!\u0006f�\f\u0010���%� JY�O�\'/�]_�;�\u0010�\'"&N�n\ta\u0011Q�^\u0000\u0019�cx�A��\u0000\u0000\u0000\u0000IEND�B`�',
  },
  {
    fileName: 'index.html',
    filePath: 'public\\index.html',
    content:
      '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="description"\n      content="Web site created using create-react-app"\n    />\n    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n    <!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>Demo</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  </body>\n</html>\n',
  },
  {
    fileName: 'manifest.json',
    filePath: 'public\\manifest.json',
    content:
      '{\n  "short_name": "demo",\n  "name": "Demo",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    },\n    {\n      "src": "logo192.png",\n      "type": "image/png",\n      "sizes": "192x192"\n    },\n    {\n      "src": "logo512.png",\n      "type": "image/png",\n      "sizes": "512x512"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n',
  },
  {
    fileName: 'robots.txt',
    filePath: 'public\\robots.txt',
    content:
      '# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n',
  },
  {
    fileName: 'README.md',
    filePath: 'README.md',
    content:
      '## Link\n\nhttps://book-store-production-0b77.up.railway.app/\n\n## Backend Repo\n\nhttps://github.com/Naimur53/books-server\n',
  },
  {
    fileName: 'App.css',
    filePath: 'src\\App.css',
    content: ' ',
  },
  {
    fileName: 'App.test.tsx',
    filePath: 'src\\App.test.tsx',
    content:
      "import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});\n",
  },
  {
    fileName: 'App.tsx',
    filePath: 'src\\App.tsx',
    content:
      "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport './App.css';\nfunction App() {\n  return (\n    <div>\n      <BrowserRouter>\n        <Routes></Routes>\n      </BrowserRouter>\n    </div>\n  );\n}\n\nexport default App;\n",
  },
  {
    fileName: 'index.css',
    filePath: 'src\\index.css',
    content: '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n',
  },
  {
    fileName: 'index.tsx',
    filePath: 'src\\index.tsx',
    content:
      'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport "./index.css";\nimport App from "./App";\nimport reportWebVitals from "./reportWebVitals";\nimport { Provider } from "react-redux";\nimport { store } from "./redux/app/store";\n\nconst root = ReactDOM.createRoot(\n  document.getElementById("root") as HTMLElement\n);\nroot.render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n',
  },
  {
    fileName: 'index.d.ts',
    filePath: 'src\\Interface\\index.d.ts',
    content: '',
  },
  {
    fileName: 'logo.svg',
    filePath: 'src\\logo.svg',
    content:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>',
  },
  {
    fileName: 'react-app-env.d.ts',
    filePath: 'src\\react-app-env.d.ts',
    content: '/// <reference types="react-scripts" />\r\n',
  },
  {
    fileName: 'store.ts',
    filePath: 'src\\redux\\app\\store.ts',
    content:
      'import { configureStore } from "@reduxjs/toolkit";\nimport { apiSlice } from "../features/apiSlice/apiSlice";\nimport { useDispatch } from "react-redux";\nexport const store = configureStore({\n  reducer: {\n    [apiSlice.reducerPath]: apiSlice.reducer,\n  },\n  devTools: process.env.NODE_ENV !== "production",\n  middleware: (getDefaultMiddlewares) =>\n    getDefaultMiddlewares().concat(apiSlice.middleware),\n});\nexport type AppDispatch = typeof store.dispatch;\nexport const useAppDispatch: () => AppDispatch = useDispatch;\n\nexport type RootState = ReturnType<typeof store.getState>;\n',
  },
  {
    fileName: 'apiSlice.ts',
    filePath: 'src\\redux\\features\\apiSlice\\apiSlice.ts',
    content:
      'import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";\r\n\r\nexport const apiSlice = createApi({\r\n  reducerPath: "api",\r\n  baseQuery: fetchBaseQuery({\r\n    baseUrl: "http://localhost:5000/api/v1",\r\n\r\n    prepareHeaders: async (headers, { getState, endpoint }) => {\r\n      const token = localStorage.getItem("accessToken");\r\n      if (token) {\r\n        headers.set("authorization", `${token}`);\r\n      }\r\n\r\n      return headers;\r\n    },\r\n  }),\r\n  endpoints: (builder) => ({}),\r\n});\r\n',
  },
  {
    fileName: 'hook.ts',
    filePath: 'src\\redux\\hook.ts',
    content:
      'import { useDispatch, useSelector } from "react-redux";\r\nimport type { TypedUseSelectorHook } from "react-redux";\r\nimport type { RootState, AppDispatch } from "./app/store";\r\n\r\nexport const useAppDispatch: () => AppDispatch = useDispatch;\r\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\r\n',
  },
  {
    fileName: 'reportWebVitals.ts',
    filePath: 'src\\reportWebVitals.ts',
    content:
      "import { ReportHandler } from 'web-vitals';\n\nconst reportWebVitals = (onPerfEntry?: ReportHandler) => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\nexport default reportWebVitals;\n",
  },
  {
    fileName: 'setupTests.ts',
    filePath: 'src\\setupTests.ts',
    content:
      "// jest-dom adds custom jest matchers for asserting on DOM nodes.\n// allows you to do things like:\n// expect(element).toHaveTextContent(/react/i)\n// learn more: https://github.com/testing-library/jest-dom\nimport '@testing-library/jest-dom';\n",
  },
  {
    fileName: 'tailwind.config.js',
    filePath: 'tailwind.config.js',
    content:
      '/** @type {import(\'tailwindcss\').Config} */\nmodule.exports = {\n  content: ["./src/**/*.{js,jsx,ts,tsx}"],\n  theme: {\n    extend: {},\n    container: {\n      center: true,\n      padding: {\n        DEFAULT: "1rem",\n        sm: "2rem",\n        lg: "4rem",\n        xl: "5rem",\n        "2xl": "6rem",\n      },\n    },\n  },\n  plugins: [],\n};\n',
  },
  {
    fileName: 'tsconfig.json',
    filePath: 'tsconfig.json',
    content:
      '{\r\n  "compilerOptions": {\r\n    "target": "es6",\r\n    "lib": ["dom", "dom.iterable", "esnext"],\r\n    "allowJs": true,\r\n    "skipLibCheck": true,\r\n    "esModuleInterop": true,\r\n    "allowSyntheticDefaultImports": true,\r\n    "strict": true,\r\n    "forceConsistentCasingInFileNames": true,\r\n    "noFallthroughCasesInSwitch": true,\r\n    "module": "esnext",\r\n    "moduleResolution": "node",\r\n    "resolveJsonModule": true,\r\n    "isolatedModules": true,\r\n    "noEmit": true,\r\n    "jsx": "react-jsx"\r\n  },\r\n  "include": ["src"]\r\n}\r\n',
  },
];
export default reactReduxTemplates;
