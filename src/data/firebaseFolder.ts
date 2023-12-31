import { IContent } from '../interfaces/common';

const jsFolder: IContent[] = [
  {
    fileName: 'firebase.config.js',
    filePath: 'src\\firebase\\firebase.config.js',
    content: `const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
        appId: process.env.REACT_APP_APP_ID,
      };
      export default firebaseConfig;`,
  },
  {
    fileName: 'firebase.init.js',
    filePath: 'src\\firebase\\firebase.init.js',
    content: `import { initializeApp } from "firebase/app";
      import firebaseConfig from "./firebase.config";
      
      const firebaseInit = () => {
        initializeApp(firebaseConfig);
      };
      
      export default firebaseInit;`,
  },
];
const tsFolder: IContent[] = [
  {
    fileName: 'firebase.config.ts',
    filePath: 'src\\firebase\\firebase.config.ts',
    content: `const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
        appId: process.env.REACT_APP_APP_ID,
      };
      export default firebaseConfig;`,
  },
  {
    fileName: 'firebase.init.ts',
    filePath: 'src\\firebase\\firebase.init.ts',
    content: `import { initializeApp } from "firebase/app";
      import firebaseConfig from "./firebase.config";
      
      const firebaseInit = () => {
        initializeApp(firebaseConfig);
      };
      
      export default firebaseInit;`,
  },
];
export const firebaseFolder = {
  jsFolder,
  tsFolder,
};
