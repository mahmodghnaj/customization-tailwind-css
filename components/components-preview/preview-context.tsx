import { createContext, ReactNode, RefObject, useContext } from "react";

export interface contextValue {
  parentElement: RefObject<HTMLDivElement>;
}
export interface PreviewContextProps {
  value: contextValue;
  children: ReactNode;
}

const PreviewContext = createContext<null | contextValue>(null);

export const PreviewProvider = ({ children, value }: PreviewContextProps) => {
  return (
    <PreviewContext.Provider value={value}> {children}</PreviewContext.Provider>
  );
};
export const usePreview = () => useContext(PreviewContext) as contextValue;
