"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pureReact = [
    {
        fileName: '.gitignore',
        filePath: '.gitignore',
        content: '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n# dependencies\n/node_modules\n/.pnp\n.pnp.js\n\n# testing\n/coverage\n\n# production\n/build\n\n# misc\n.DS_Store\n.env.local\n.env.development.local\n.env.test.local\n.env.production.local\n\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n',
    },
    {
        fileName: 'package.json',
        filePath: 'package.json',
        content: '{\n  "name": "pure-react",\n  "version": "0.1.0",\n  "private": true,\n  "dependencies": {\n    "@testing-library/jest-dom": "^5.17.0",\n    "@testing-library/react": "^13.4.0",\n    "@testing-library/user-event": "^13.5.0",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "react-router-dom": "^6.16.0",\n    "react-scripts": "5.0.1",\n    "web-vitals": "^2.1.4"\n  },\n  "scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n "init": "npx prettier --write . && npm install",    "test": "react-scripts test",\n    "eject": "react-scripts eject"\n  },\n  "eslintConfig": {\n    "extends": [\n      "react-app",\n      "react-app/jest"\n    ]\n  },\n  "browserslist": {\n    "production": [\n      ">0.2%",\n      "not dead",\n      "not op_mini all"\n    ],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n',
    },
    {
        fileName: 'favicon.ico',
        filePath: 'public\\favicon.ico',
        content: '\u0000\u0000\u0001\u0000\u0004\u0000\u0010\u0010\u0000\u0000\u0001\u0000 \u0000ã\u0001\u0000\u0000F\u0000\u0000\u0000\u0018\u0018\u0000\u0000\u0001\u0000 \u0000\f\u0003\u0000\u0000)\u0002\u0000\u0000  \u0000\u0000\u0001\u0000 \u00009\u0003\u0000\u00005\u0005\u0000\u0000@@\u0000\u0000\u0001\u0000 \u0000°\u0006\u0000\u0000n\b\u0000\u0000PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0010\b\u0003\u0000\u0000\u0000(-\u000fS\u0000\u0000\u0000äPLTE""""""""""""""""""2PX=r)7;*:>H¤-BGE8do5Xb6[eK®K¯1MU9gs3S\\I§:gt\'03@{V¹ÔT´ÏA}V»Ö@y6\\fH¦-CII¨E+;@7_i7_jFJ«K°H£-BHaÚû,@FCL³&.0W½ÙN£ºI¨$)+BJªR¯È?v>s>uS±Ê=qP©ÁP¨ÀP§¿,?D4U^%+-M ¶K®%+,2OX+<AL²#&&D%,.I©vôTö\u0000\u0000\u0000\u0005tRNSIæçJäeÀe¦\u0000\u0000\u0000©IDATx\u0001MµZEA\fÿÙ³\tîî%R¡ïßáTThÇG»,Á®Å=\u0003²\u0016ÒîmífímnfA$â>!\u0003¦gºôHg½EßÜµ}\u0002\t\u0006Ý»ýº¼k\u0010d\u0013ú§¯Jo\u0011Î3æL"J¹ ÌÕüQ$âçÄ¼\u001fffµ,é5i9\u0002\u0019Ì¯H¨\u001c/mB\u0002wÍÜw;D\rØ+&W«\u0015ª¹¨Dôo\u0014@Ê´RI©ÐB¡om\u001a.\u0007Û³\u0007À\u0000\u0000\u0000\u0000IEND®B`PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000\u0018\u0000\u0000\u0000\u0018\b\u0003\u0000\u0000\u0000×©ÍÊ\u0000\u0000\u0001ePLTE""""""""""""""""""""""""2RZN¢¹J«3R[J¬)59YÁÞ0KS4W`Q«ÄL²%+-0JR)6::gtC"##?vU·Ñ?w<n{&-/YÂß=q:iuBA}A{B/IPP§¿=qK®_ÔóL³$();lzR¯ÉaÚûI¨ZÆã3U^1MU3T]ZÅâI§X¿ÜF-BGP¨À6[e,@E5ZdO§¿-BHX¿Û+=AW¾Ú,@FW¼ØQªÃ?vW¼×+<A@y"#$\\Ìê4Wa\\ÌëS²Ì$(*.EL^ÑñVºÕ6]h#$%G¡#&\';jwV¹Ô-CIL±ZÄá^Ðï>uS°Ê/HNM ·_Õõ\\ËéM ¶8doDD>t+=B[Èæ,>C>t<o}@y0LS.EKT´Î$\'(%,.A~W½ÙC%+,\\ÊèC!ä\u001d\u0000\u0000\u0000\u0007tRNS\u0006íîG¾Ö\u0000\u0000\u0001OIDATx\u0001lÃB¶Q\u0014u´ß_È³<Ë\u0016¦Ýv\u001ceê\u0006²óa\u00166\u0016AÎ¾\u0017\u0004ûv¢{\u0007@Î\u0007\u0000E\'\u0000Þd\u0000IÕ!ç\u001cí\u001a \u0000ðCÔT\u000bþg\u0000\u001c\u00001ÂE(Ï\u0005\u0014ñSQs\u001aâi\rÄZÿ·\u0016V\u0006¹\u000b\u0000\u0002Ð)ég!ªhÎù\u0010\u0002t\u0005éº-i}µ\u0011µ<Õ?\u0015¶lBZaÄ´4{DÓâ»_e8¥yÇ­À\u001f3)¥?°f;8.ã\u001c¤tÌ=å;\u000e\t:ã52fKZìl\u0012ù¨ØÍ9.#Ò\u0002AÁqÌúÛ\u0016\u0006\u001f®£Vÿ`=\u0003\u0003$¬Â?_¶¾®\u0005ÔqMç.ïJ$\u000f\n?^q÷ñíÛï.},ìsæÝ\f\f_TttÔ¾\u0000\u00151#\u0007/(ì-[\u0006\u0012è`è`Ì\u0004ÚïÅðZ\u001fd5?ÎebZ¿Þi.Ûæ\f\u0010\u0019ìqÎ+1°\u0001}Â5ù\u0000\u0000ïçd¨GÏø\u0000\u0000\u0000\u0000IEND®B`PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000 \u0000\u0000\u0000 \b\u0003\u0000\u0000\u0000D¤Æ\u0000\u0000\u0001APLTE\u0000\u0000\u0000"""""""""""""""""""""""""""2RZVºÖ_ÔôU·Ñ=r$()\'25]ÎíC0LS<o}XÀÜX¿Û0JQ=p~D<n{VºÕE8do_ÔóEFH¥9dp_ÕõH¤I¨F6[e`Ö÷`×øL³/GM_ÓòU¸Ó\'02P©Á/IPPªÂX¿Ü&/1;ly3R[`ØøG¡T³Í\\ÌêaÚû1OW"##Q«ÄaÙúR®Ç=q`Öö.EL+=ATµÐ-CIK®#&\'C^ÐïI¨&.04U^^Ñð@yZÇä$(*[Éç^Ññ,?DR¯É"#$1NV1MTD>u;kxG R¯È/HN&-/@y>s>t@z]ÍìP¨À$\'(D]Ïî<n|0JRU·Ò\u000e×\\¼\u0000\u0000\u0000\ttRNS\u0000%­ñ\'ïó(ò~ÑÝè\u0000\u0000\u0001IDATx\u0001\u0003C1\u0014F_Ý¿MmÛ¶4¶m{ÿ\u000b¤nçáÓ\t®\u0004A$à\u0007$b Heø\u0005T\u0010ãWÄÂhh´:PtZ\rQ«0@.`Þ`4-V\u001b`³Zì&A\u0001#ÁébkÝÄãñúØ>.\'\'ø\u0003`\u0004C$\bFØÏ\t(\u0018±x"6X\u0010á\u0004c\u0012TÚéL§@I\u001aù;d\u0000d-¹|¾P,\u0001È9¡R­Õ\u001bÍf3\u0014¢¿F½VmM\u000bíX§ÚíÍ\u0019ç\u0017@Y7ÎõºÕN¬=\u0012\u0016\fåÈÊªu\r}Ö¬«+eaiq ¤Ö76­íÝ=h\rûZìíî\u001cl\u0001\u001bë}á¨\u0006Ê±¥[F«I9A¹k9\u0006¥Öë\u000bä\u00143¢Ã9\u0013Î¡óqB~Øáb¸ÃåU_¸^Ü\u0000[\u0007·ô\u000ewý{z\u0007v\u001bzÙ(£(£(þ\u0007fòqÉGÉïkñÏçY¾\u0016ÿªfäòÇ~à:*4ÓQ\\O> ¼<×úW£éÍZ|\u0007ÞÅ7ñïjTÔäãn\u000f½»\u000f¢®`$Hð+ò¿GOñûð*èxø\u0001¥X*|\u0002\u0018^ÿ\u0005\u000fd\u000f\u0000\u0000\u0000\u0000IEND®B`PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0000@\u0000\u0000\u0000@\b\u0003\u0000\u0000\u0000·ì\u0000\u0000\u0002:PLTE\u0000\u0000\u0000"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""%+-@yW¼×`×ø^ÑñS²ÌC,>C*8<XÁÝaÚûaÙùMµ+<AaÙúXÀÜ#%%TµÐL´=q>uK°`ÖöA}L±8do=r%+,@y^ÐïS²Ë)59=qP©ÁU·Ò"#$PªÂ\\Êè0JQQªÃ"##U·Ñ#&&_Ôô>t>s`Øø_Ôó5Yc1OW5Zd1NV+=B1MU+;@/GM\\Ìê*;?3S\\)8<2RZ_Õõ+=A]Ïî,@F,@E&-/0KS7alO¦¾9dp8amB~EP¨ÀN¢¹\'023T]]Îí?x3U^C6\\gU¸Ó&.0D7_iR­ÆH¥I¨M ¶$(*?vZÆãX¿Ü-AG#$%[Éç8co[ÈæW½ÙC\'25?v8bn%*+L²N£º2PX)7;=p~(58^ÒòP§¿4WaQ«ÄT´Ï0JRQ¬ÅT´ÎI¨6]hR¯ÉT³Í0LSF9eqEE9gsFC#&\'\\Ëé`Ö÷&/16\\fBA{R®Ç]Íì(47%,.*:>*9=9fr:gt7^iU¶Ð?wZÇäX¿Û^ÑðQ­ÅH£)6:V¹Ô\'034U^E.EL.FMK®@zS×\u001c\u000e\u0000\u0000\u0000\u0019tRNS\u0000*×øÖ\u0006ý\t»½+üùóÔ,ØúôÀ=V\u0000\u0000\u0004\fIDATx\u0001¤Ëµ\u0001C!\u0000\u0004ÐïC|ÿ\u0005ãÚ\u0005^yR]ÕMÛáO]ßÔÕÝ0NÈ2ÍËí¿"\u001b\u0019ªª¢(0V\u0015ã(ÀY%PDT-~(m¬ó!âK\fÞY£\u0015~´üIÒf{³Û\u001fÞáa¼§§ô3ÕOp&\u001cÐ¤¡\u0000x÷#j­ôÚ¶mméòc)]m¤É)Æ§gfç\u0014hk²ñÎÒ ægg¦Çì\u0019Ð+XÅêuiy\u0005V×ª·k«°²\\[ü:,Ø\b6ØÜjÄ²\r;»"»;°×Xùþ\u0001ÛfÁá\u0011ÇÍûýSÎÎÏÏ8=Þo¾;æèÐ(\u0018öÓ¥BkÔeûÍ\u0015\\\u001b\u00057p+mîîáþNÚ<ÀQð\bOÒæù\u0005ô³´yg»\u0015ttÐë\u001boý½£ìVð\u0001»Òäs\u0002ýü¬ø&_ða\u0014üïV\u0015~à·Ö\u0019?­*8àQ ;8¥Á,¸¤\u000bf¥\u001d1\u000bÜx¤×§ñ\u0004*øÑA¯Ôð°a#\b±³\u0016¶¦#nPi+¼¶CÈ,ÆèäÍ_áNbÑáÃ¸ç\u0005\u0000HB*ÚÒ¦ L(\u0000^<ñÃL6\u0007pJ¾PÉ\b¥©¢%"R,ä9\u0005Èe3eRËa1(\n¢ßqÇ8Ù´mKË±mÆ¶mÛü·yi!è\u000eÎªYÏuë ÀÏ_Àï?i÷ý+ò\u000fÄA\u0011|\u0016ù{´?¿_En\u0001).\u0001JËD¤<\n©¬¢Z\\Ts©R*\b(\u0017\t¯©\u0005J\u0002u\u0010X/\u001a\r4J\u00139¡5·DEµ4kÇ4&i¥V4Ú\u0002¡®Ð\u0016\b¯vsf:àg,¢èBC»î$¶\bºÍùîá@\u0011ôI_?\u0003<\u001d\u0014!\f^ÈàÓ½ÇöäõB%\u0010Làw±\u0018\u0006FD1Á¨(F\u001e±ø\u001eH%0Æ\u0003±\u0019¿ÅØ(¢0\u0012ÅÄ\u0018\u0017\'Åæ\u0001N.0u@íYP\u0004WìIüaNâK\f\u000fÄ?ðÓµ=ev/c±Ó0c\u00160÷2Êë:06R-uÒÄ­\\QÌ¶ää´¼µ6R#\rÆF³6Òñ·rÕ­ìuæmâðÂIñi~\u0001 Åü ÃsPþ"±\u0000\u000bó¼\reiyå£ËPàãÊò§¡ÝÒ,S]U¦ºV\u001bªÖ©®Z¦êoëë\u001b·xzãâÆSnm¬{ÚºwaÙÏ\u001eÅ»´Ýõ(mg/®þå½À¿¼û\u0005[§\b\u0018\u0019b³µ\u0017q¶Å&Õ¯\u0007¹$\u0016ñzÈ\u0017\u0004H>aÌKT1/æø1O0¾.h\u0007ÍYþAÓö£\n-ê>Ûº«¢XÕ¢î}ß¨ë\fÛÑ;\u0007ÃöN´ØvÅýÎ¸ÿ1\u0000ë×ÄO@&v/Äþ_ö\\ô\u000eÇ\\í.\u000f½+0\u0003;\u001c\u0014\u0001!\u0006fÊ\f\u0010¦´Ó%Â JY·OÂ\'/Å]_;ß\u0010À\'"&Nªn\ta\u0011Q^\u0000\u0019cx¦AáÒ\u0000\u0000\u0000\u0000IEND®B`',
    },
    {
        fileName: 'index.html',
        filePath: 'public\\index.html',
        content: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <meta\n      name="description"\n      content="Web site created using create-react-app"\n    />\n    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />\n    <!--\n      manifest.json provides metadata used when your web app is installed on a\n      user\'s mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n    -->\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n    <!--\n      Notice the use of %PUBLIC_URL% in the tags above.\n      It will be replaced with the URL of the `public` folder during the build.\n      Only files inside the `public` folder can be referenced from the HTML.\n\n      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will\n      work correctly both with client-side routing and a non-root public URL.\n      Learn how to configure a non-root public URL by running `npm run build`.\n    -->\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="root"></div>\n    <!--\n      This HTML file is a template.\n      If you open it directly in the browser, you will see an empty page.\n\n      You can add webfonts, meta tags, or analytics to this file.\n      The build step will place the bundled scripts into the <body> tag.\n\n      To begin the development, run `npm start` or `yarn start`.\n      To create a production bundle, use `npm run build` or `yarn build`.\n    -->\n  </body>\n</html>\n',
    },
    {
        fileName: 'manifest.json',
        filePath: 'public\\manifest.json',
        content: '{\n  "short_name": "React App",\n  "name": "Create React App Sample",\n  "icons": [\n    {\n      "src": "favicon.ico",\n      "sizes": "64x64 32x32 24x24 16x16",\n      "type": "image/x-icon"\n    },\n    {\n      "src": "logo192.png",\n      "type": "image/png",\n      "sizes": "192x192"\n    },\n    {\n      "src": "logo512.png",\n      "type": "image/png",\n      "sizes": "512x512"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}\n',
    },
    {
        fileName: 'robots.txt',
        filePath: 'public\\robots.txt',
        content: '# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow:\n',
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
       npm run start
       \`\`\`
    `,
    },
    {
        fileName: 'App.css',
        filePath: 'src\\App.css',
        content: '.App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n',
    },
    {
        fileName: 'App.js',
        filePath: 'src\\App.js',
        content: "import { BrowserRouter, Routes, Route } from 'react-router-dom';\nimport './App.css';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <BrowserRouter>\n        <Routes></Routes>\n      </BrowserRouter>\n    </div>\n  );\n}\n\nexport default App;\n",
    },
    {
        fileName: 'App.test.js',
        filePath: 'src\\App.test.js',
        content: "import { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders learn react link', () => {\n  render(<App />);\n  const linkElement = screen.getByText(/learn react/i);\n  expect(linkElement).toBeInTheDocument();\n});\n",
    },
    {
        fileName: 'index.css',
        filePath: 'src\\index.css',
        content: "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
    },
    {
        fileName: 'index.js',
        filePath: 'src\\index.js',
        content: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\nimport reportWebVitals from './reportWebVitals';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\nreportWebVitals();\n",
    },
    {
        fileName: 'reportWebVitals.js',
        filePath: 'src\\reportWebVitals.js',
        content: "const reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\nexport default reportWebVitals;\n",
    },
    {
        fileName: 'setupTests.js',
        filePath: 'src\\setupTests.js',
        content: "// jest-dom adds custom jest matchers for asserting on DOM nodes.\n// allows you to do things like:\n// expect(element).toHaveTextContent(/react/i)\n// learn more: https://github.com/testing-library/jest-dom\nimport '@testing-library/jest-dom';\n",
    },
    {
        fileName: 'DemoCompo.js',
        filePath: 'src\\SharedComponents\\DemoCompo.js',
        content: "import React from 'react';\r\n\r\nconst DemoCompo = () => {\r\n  return <div></div>;\r\n};\r\n\r\nexport default DemoCompo;\r\n",
    },
];
exports.default = pureReact;
