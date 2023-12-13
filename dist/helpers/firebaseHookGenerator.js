"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseHookGenerator = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const common_1 = require("../interfaces/common");
const allAuthMethods = [
    {
        name: 'google',
        importFrom: 'GoogleAuthProvider',
        code: `
      const signInWithGoogle = async (usePopup = true) => {
        const provider = new GoogleAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      `,
        tsCode: `
      const signInWithGoogle = async (usePopup = true): Promise<void> => {
        const provider = new GoogleAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      `,
        export: 'signInWithGoogle',
    },
    {
        name: 'facebook',
        importFrom: 'FacebookAuthProvider',
        code: `
      const signInWithFacebook = async (usePopup = true) => {
        const provider = new FacebookAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      `,
        tsCode: `
      const signInWithFacebook = async (usePopup = true): Promise<void> => {
        const provider = new FacebookAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };`,
        export: 'signInWithFacebook',
    },
    {
        name: 'github',
        importFrom: 'GithubAuthProvider',
        code: `
      const signInWithGitHub = async (usePopup = true) => {
        const provider = new GithubAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      `,
        tsCode: `
      const signInWithGitHub = async (usePopup = true): Promise<void> => {
        const provider = new GithubAuthProvider();
        if (usePopup) {
          await signInWithPopup(auth, provider);
        } else {
          await signInWithRedirect(auth, provider);
        }
      };
      `,
        export: 'signInWithGitHub',
    },
    {
        name: 'email/password',
        importFrom: 'signInWithEmailAndPassword \n createUserWithEmailAndPassword',
        code: `
      const signInWithEmailAndPassword = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error signing in with email/password:", error);
        }
      };
      const signUpWithEmailAndPassword = async (email, password) => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
          console.error("Error signing up with email/password:", error);
        }
      };
      `,
        export: 'signInWithEmailAndPassword \n signUpWithEmailAndPassword',
    },
];
const generateUseFirebaseHookContent = (auths, technology) => {
    const authMethods = allAuthMethods.filter(single => auths.includes(single.name));
    if (!authMethods.length) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'cannot generate useFirebase content for empty methods');
    }
    const willKeepRedirect = auths.includes('google') ||
        auths.includes('facebook') ||
        auths.includes('github');
    const geneRateCode = authMethods.reduce((pre, current) => {
        return {
            allImports: pre.allImports.concat(current.importFrom + ',\n'),
            code: pre.code.concat(current.code + '\n'),
            tsCode: pre.tsCode.concat(current.tsCode + '\n'),
            allExport: pre.allExport.concat(current.export + ',\n'),
        };
    }, {
        allImports: '',
        code: '',
        tsCode: '',
        allExport: '',
    });
    const js = `
  import { useEffect, useState } from "react";
  import { 
    signInWithPopup,
    ${willKeepRedirect ? 'getRedirectResult,\n signInWithRedirect,' : ''} 
    ${geneRateCode.allImports}
    getAuth,
  } from "firebase/auth";
  import firebaseInit from "../firebase/firebase.init";
  const useFirebaseAuth = () => {
    firebaseInit();
    const [user, setUser] = useState(null); 
    const auth = getAuth();
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    ${geneRateCode.code}
   
    ${willKeepRedirect
        ? `useEffect(() => {
      const handleRedirectResult = async () => {
        try {
          const result = await getRedirectResult(auth);
          if (result?.user) {
            setUser(result?.user);
          }
        } catch (error) {
          console.error("Error handling redirect:", error);
        }
      };
  
      handleRedirectResult();
    }, [auth]);`
        : ''} 
    const signOut = () => {
      return auth.signOut();
    };
  
    return {
      user, 
      ${geneRateCode.allExport}
      signOut,
    };
  };
  
  export default useFirebaseAuth;
  `;
    const ts = `
    import { useEffect, useState } from "react";
    import {
      signInWithPopup,
      ${willKeepRedirect ? 'getRedirectResult,\n signInWithRedirect,' : ''} 
      ${geneRateCode.allImports}
      getAuth,
      User,
    } from "firebase/auth";
    import firebaseInit from "../firebase/firebase.init";
    
    interface AuthMethods {
      signInWithGoogle?: (usePopup?: boolean) => Promise<void>;
      signInWithFacebook?: (usePopup?: boolean) => Promise<void>;
      signInWithGitHub?: (usePopup?: boolean) => Promise<void>;
      signInWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
      signUpWithEmailAndPassword?: (email: string, password: string) => Promise<void>;
      signOut: () => Promise<void>;
    }
    
    const useFirebaseAuth = (): { user: User | null } & AuthMethods => {
      firebaseInit();
      const [user, setUser] = useState<User | null>(null);
      console.log(user);
      const auth = getAuth();
    
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            setUser(authUser);
          } else {
            setUser(null);
          }
        });
    
        return () => unsubscribe();
      }, [auth]); 
    
      
      ${geneRateCode.tsCode}
      
    
     ${willKeepRedirect
        ? ` useEffect(() => {
      const handleRedirectResult = async (): Promise<void> => {
        try {
          const result = await getRedirectResult(auth);
          if (result?.user) {
            setUser(result?.user);
          }
        } catch (error) {
          console.error("Error handling redirect:", error);
        }
      };
  
      handleRedirectResult();
    }, [auth]);`
        : ''}
    
     
    
      const signOut = async (): Promise<void> => {
        try {
          await auth.signOut();
        } catch (error) {
          console.error("Error signing out:", error);
        }
      };
    
      return {
        user, 
        ${geneRateCode.allExport}
        signOut,
      };
    };
    
    export default useFirebaseAuth;
  
  `;
    return technology === common_1.ILanguage.JavaScript ? js : ts;
};
exports.firebaseHookGenerator = {
    generateUseFirebaseHookContent,
};
