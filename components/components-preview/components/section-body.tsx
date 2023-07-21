import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";

const SectionBody = () => {
  const { parentElement } = usePreview();
  return (
    <>
      <div
        className="rounded-box flex-grow flex-col px-6 pb-8 pt-8 text-center max-[1280px]:!transform-none"
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
        <h2 className="font-title  text-[clamp(1.5rem,6vw,3rem)] font-black leading-none">
          Customization
        </h2>
        <p className="font-title capitalize font-light md:text-3xl lg:text-4xl">
          By Tailwind Css with zero effort
        </p>
        <div
          className="pt-1 flex justify-center"
          style={{
            opacity: animateValue(parentElement.current, [15, 20], [1, 0]),
          }}
        >
          <div className="animate-bounce flex items-center ">
            <p className="mr-2">please scroll down</p>
            <div className=" bg-white p-2 w-7 h-7 ring-1 ring-slate-900/5  shadow-md rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
        <p className="text-base-content/60 mx-auto max-w-lg font-sans text-sm font-light">
          Repository guiding developers to effortlessly design stunning web
          interfaces. It offers Multai themes, Varbias CSS integration, and
          class hooks for enhanced functionality. With step-by-step guides and
          practical examples, users can create unique and responsive designs
          with ease. Experience hassle-free customization and stand out with
          minimal effort and maximum creativity.
        </p>
        <div className="h-4" />
        <div>
          <a
            className="btn btn-wide btn-primary"
            href="https://github.com/mahmodghnaj/customization-tailwind-css"
            target="_blank"
          >
            show source
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionBody;
