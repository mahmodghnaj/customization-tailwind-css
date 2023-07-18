import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";

const SectionBody = () => {
  const { parentElement } = usePreview();
  return (
    <>
      <div
        className="rounded-box flex-grow flex-col px-6 pb-8 pt-16 text-center max-[1280px]:!transform-none"
        style={{
          transform: `scale(${animateValue(
            parentElement.current,
            [0, 10],
            [2, 1]
          )}) translateY(${animateValue(
            parentElement.current,
            [0, 10],
            [10, 0]
          )}%)`,
        }}
      >
        <h2 className="font-title text-[clamp(1.5rem,6vw,3rem)] font-black leading-none">
          Hello
        </h2>
        <p className="font-title font-light md:text-3xl lg:text-4xl">Hello</p>
        <div className="h-4" />
        <p className="text-base-content/60 mx-auto max-w-lg font-sans text-sm font-light">
          Hello
        </p>
        <div className="h-4" />
        <div>
          <a
            className="btn btn-wide btn-primary"
            data-sveltekit-preload-data="hover"
            href="/docs/themes/"
            // tabIndex={index == 0 ? 0 : -1}
          >
            sell all
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionBody;
