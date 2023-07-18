import ComponentsPreview from "@/components/components-preview";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { themes } from "../lib/data";
import { animateValue } from "@/utilities/common/helper";

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <div className="h-[1000vh] " ref={sectionRef}>
        <div
          style={{ transform: "scale(0.90)" }}
          className="sticky top-0 bottom-0 mx-auto grid w-[calc(100%-2rem)]  max-w-[85rem] overflow-hidden rounded-2xl"
        >
          {themes.map((item, index) => (
            <div
              className="col-start-1  row-start-1 flex items-start min-h-[600px]"
              data-theme={item.id}
              style={
                index > 0
                  ? {
                      clipPath: `polygon(
                        ${animateValue(
                          sectionRef.current,
                          [0 + index * 7, 20 + index * 7],
                          [-180, 100]
                        )}% 0%,
                         0% 0%,
                         0% 100%,
                         ${animateValue(
                           sectionRef.current,
                           [0 + index * 7, 20 + index * 7],
                           [0, 100]
                         )}% 100%)`,
                    }
                  : {}
              }
              key={index}
            >
              <div
                className="border-base-200 flex w-full items-stretch justify-center gap-6 rounded-2xl border p-6 xl:h-[40rem] xl:justify-normal"
                style={
                  {
                    "--tw-border-opacity": animateValue(
                      sectionRef.current,
                      [10, 15],
                      [0, 1]
                    ),
                  } as CSSProperties
                }
              >
                <ComponentsPreview element={sectionRef} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
