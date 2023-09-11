import { IContent } from '../interfaces/common';

const reactTsHooks: IContent[] = [
  {
    fileName: 'useCustomHook.ts',
    filePath: 'src\\hooks\\useCustomHook.ts',
    content: `import { useState } from "react";
  
  export default function useCustomHook(defaultValue: any) {
    const [value, setValue] = useState(defaultValue);
  
    function toggleValue(value: any) {
      console.log('Hello From Custom hook');
    }
  
    return [value, toggleValue];
  }`,
  },
  {
    fileName: 'useToggle.ts',
    filePath: 'src\\hooks\\useToggle.ts',
    content: `import { useState } from "react";
  
  export default function useToggle(defaultValue: boolean) {
    const [value, setValue] = useState<boolean>(defaultValue);
  
    function toggleValue(value: boolean | undefined) {
      setValue((currentValue: boolean) =>
        typeof value === "boolean" ? value : !currentValue
      );
    }
  
    return [value, toggleValue];
  }`,
  },
  {
    fileName: 'useTimeout.ts',
    filePath: 'src\\hooks\\useTimeout.ts',
    content: ` import { useEffect, useRef, useCallback } from "react";

    type TimeoutHandle = ReturnType<typeof setTimeout> | undefined;
    
    export default function useTimeout(
      callback: () => void,
      delay: number
    ): {
      reset: () => void;
      clear: () => void;
    } {
      const callbackRef = useRef(callback);
      const timeoutRef = useRef<TimeoutHandle>();
    
      useEffect(() => {
        callbackRef.current = callback;
      }, [callback]);
    
      const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
      }, [delay]);
    
      const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
      }, []);
    
      useEffect(() => {
        set();
        return clear;
      }, [delay, set, clear]);
    
      const reset = useCallback(() => {
        clear();
        set();
      }, [clear, set]);
    
      return { reset, clear };
    }`,
  },
  {
    fileName: 'useDebounce.ts',
    filePath: 'src\\hooks\\useDebounce.ts',
    content: `import { useEffect } from "react";
    import useTimeout from "./useTimeout";
    
    export default function useDebounce(
      callback: () => void,
      delay: number,
      dependencies: any[]
    ) {
      const { reset, clear } = useTimeout(callback, delay);
      useEffect(reset, [...dependencies, reset]);
      useEffect(clear, []);
    }`,
  },
  {
    fileName: 'useUpdateEffect.ts',
    filePath: 'src\\hooks\\useUpdateEffect.ts',
    content: `import { useEffect, useRef } from "react";
  
  export default function useUpdateEffect(callback: () => void, dependencies: any[]) {
    const firstRenderRef = useRef(true);
  
    useEffect(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
        return;
      }
      return callback();
    }, dependencies);
  }`,
  },
  {
    fileName: 'useArray.ts',
    filePath: 'src\\hooks\\useArray.ts',
    content: `import { useState } from "react";
  
  export default function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState<T[]>(defaultValue);
  
    function push(element: T) {
      setArray((a: T[]) => [...a, element]);
    }
  
    function filter(callback: (element: T) => boolean) {
      setArray((a: T[]) => a.filter(callback));
    }
  
    function update(index: number, newElement: T) {
      setArray((a: T[]) => [
        ...a.slice(0, index),
        newElement,
        ...a.slice(index + 1, a.length),
      ]);
    }
  
    function remove(index: number) {
      setArray((a: T[]) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    }
  
    function clear() {
      setArray([]);
    }
  
    return { array, set: setArray, push, filter, update, remove, clear };
  }`,
  },
  {
    fileName: 'usePrevious.ts',
    filePath: 'src\\hooks\\usePrevious.ts',
    content: `import { useRef } from "react";
  
  export default function usePrevious<T>(value: T): T | undefined {
    const currentRef = useRef(value);
    const previousRef = useRef<T | undefined>();
  
    if (currentRef.current !== value) {
      previousRef.current = currentRef.current;
      currentRef.current = value;
    }
  
    return previousRef.current;
  }`,
  },
  {
    fileName: 'useStateWithHistory.ts',
    filePath: 'src\\hooks\\useStateWithHistory.ts',
    content: `import { useCallback, useRef, useState } from "react";

    export default function useStateWithHistory<T>(
      defaultValue: T,
      { capacity = 10 }: { capacity?: number } = {}
    ) {
      const [value, setValue] = useState<T>(defaultValue);
      const historyRef = useRef<T[]>([value]);
      const pointerRef = useRef<number>(0);
    
      const set = useCallback(
        (v: T | ((currentValue: T) => T)) => {
          const resolvedValue = typeof v === "function" ? (v as (currentValue: T) => T)(value) : v;
          if (historyRef.current[pointerRef.current] !== resolvedValue) {
            if (pointerRef.current < historyRef.current.length - 1) {
              historyRef.current.splice(pointerRef.current + 1);
            }
            historyRef.current.push(resolvedValue);
    
            while (historyRef.current.length > capacity) {
              historyRef.current.shift();
            }
            pointerRef.current = historyRef.current.length - 1;
          }
          setValue(resolvedValue);
        },
        [capacity, value]
      );
    
      const back = useCallback(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current]);
      }, []);
    
      const forward = useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
      }, []);
    
      const go = useCallback(
        (index: number) => {
          if (index < 0 || index > historyRef.current.length - 1) return;
          pointerRef.current = index;
          setValue(historyRef.current[pointerRef.current]);
        },
        []
      );
    
      return [
        value,
        set,
        {
          history: historyRef.current,
          pointer: pointerRef.current,
          back,
          forward,
          go,
        },
      ];
    }`,
  },
  {
    fileName: 'useStorage.ts',
    filePath: 'src\\hooks\\useStorage.ts',
    content: ` import { useCallback, useState, useEffect } from "react";

    export function useLocalStorage<T>(
      key: string,
      defaultValue: T | (() => T)
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      return useStorage(key, defaultValue, window.localStorage);
    }
    
    export function useSessionStorage<T>(
      key: string,
      defaultValue: T | (() => T)
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      return useStorage(key, defaultValue, window.sessionStorage);
    }
    
    function useStorage<T>(
      key: string,
      defaultValue: T | (() => T),
      storageObject: Storage
    ): [
      T | undefined,
      React.Dispatch<React.SetStateAction<T | undefined>>,
      () => void
    ] {
      const [value, setValue] = useState<T | undefined>(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);
    
        if (typeof defaultValue === "function") {
          return (defaultValue as () => T)();
        } else {
          return defaultValue;
        }
      });
    
      useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
      }, [key, value, storageObject]);
    
      const remove = useCallback(() => {
        setValue(undefined);
      }, []);
    
      return [value, setValue, remove];
    }
    `,
  },
  {
    fileName: 'useFetch.ts',
    filePath: 'src\\hooks\\useFetch.ts',
    content: `import useAsync from "./useAsync";
  
  const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
  };
  
  export default function useFetch<T>(
    url: string,
    options: RequestInit = {},
    dependencies: any[] = []
  ) {
    return useAsync<T>(() => {
      return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
        if (res.ok) return res.json();
        return res.json().then(json => Promise.reject(json));
      });
    }, dependencies);
  }`,
  },
  {
    fileName: 'useEventListener.ts',
    filePath: 'src\\hooks\\useEventListener.ts',
    content: `import { useEffect, useRef } from "react";
  
  export default function useEventListener(
    eventType: string,
    callback: (event: Event) => void,
    element: EventTarget | null = window
  ) {
    const callbackRef = useRef<(event: Event) => void>(callback);
  
    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (element == null) return;
      const handler = (e: Event) => callbackRef.current(e);
      element.addEventListener(eventType, handler);
  
      return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
  }`,
  },
  {
    fileName: 'useOnScreen.ts',
    filePath: 'src\\hooks\\useOnScreen.ts',
    content: `import { useEffect, useState } from "react";
  
  export default function useOnScreen(
    ref: React.RefObject<Element>,
    rootMargin: string = "0px"
  ) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (ref.current == null) return;
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { rootMargin }
      );
      observer.observe(ref.current);
      return () => {
        if (ref.current == null) return;
        observer.unobserve(ref.current);
      };
    }, [ref.current, rootMargin]);
  
    return isVisible;
  }`,
  },
  {
    fileName: 'useWindowSize.ts',
    filePath: 'src\\hooks\\useWindowSize.ts',
    content: `import { useState } from "react";
  import useEventListener from "./useEventListener";
  
  export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });
  
    return windowSize;
  }`,
  },
  {
    fileName: 'useAsync.ts',
    filePath: 'src\\hooks\\useAsync.ts',
    content: `import { useState, useEffect, useCallback } from "react";
  
  export default function useAsync<T>(
    asyncFunction: () => Promise<T>,
    dependencies: any[] = []
  ) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [value, setValue] = useState<T | null>(null);
  
    const execute = useCallback(() => {
      setLoading(true);
      setError(null);
      setValue(null);
  
      return asyncFunction()
        .then(response => setValue(response))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, [asyncFunction]);
  
    useEffect(() => {
      execute();
    }, [execute, ...dependencies]);
  
    return { loading, error, value, execute };
  }`,
  },
];

export default reactTsHooks;
