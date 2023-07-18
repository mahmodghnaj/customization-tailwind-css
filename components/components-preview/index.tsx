import React, { ComponentProps, FC, RefObject, useMemo } from "react";
import SectionButtons from "./components/section-buttons";
import SectionHeader from "./components/section-header";
import SectionFooter from "./components/section-footer";
import SectionMenu from "./components/section-menu";
import SectionSemanticColors from "./components/section-semantic-colors";
import SectionBody from "./components/section-body";
import { contextValue, PreviewProvider } from "./preview-context";

interface PropsComponents extends ComponentProps<"div"> {
  element: RefObject<HTMLDivElement>;
}
const ComponentsPreview: FC<PropsComponents> = ({ element }) => {
  const contextValueMemoized: contextValue = useMemo(
    () => ({
      parentElement: element,
    }),
    [element]
  );

  return (
    <PreviewProvider value={contextValueMemoized}>
      <div className="hidden flex-col gap-6 xl:flex">
        <SectionMenu />
        <SectionButtons />
      </div>
      <div className="flex flex-grow flex-col gap-6">
        <SectionHeader />
        <SectionBody />
        <SectionFooter />
      </div>
      <SectionSemanticColors />
    </PreviewProvider>
  );
};

export default ComponentsPreview;
