import { Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, createContext, useRef, useContext, createRef } from "react";
import { AppContextType } from "./app";

export const AppContext = createContext<AppContextType | {}>({});

export default function App({ Component, pageProps }: AppProps) {
  const greetingRef = useRef<any>();
  const introductionRef = useRef<any>()
  const experienceRef = useRef<any>()
  const portofolioRef = useRef<any>()
  const appRef = useRef<any>()

  const APP_CONTEXT: AppContextType = {
    greetingRef,
    introductionRef,
    experienceRef,
    portofolioRef
  };

  const handleScrolMain = () => {
    const sectionHeight : number = greetingRef.current.clientHeight + introductionRef.current.clientHeight + experienceRef.current.clientHeight 
    if(sectionHeight === Math.round( window.scrollY)){
      console.log('rechhhh')
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", handleScrolMain);
  }, []);

  return (
    <AppContext.Provider value={APP_CONTEXT}>
      <Navbar />
      <Component {...pageProps} />{" "}
    </AppContext.Provider>
  );
}
