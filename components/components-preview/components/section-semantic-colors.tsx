import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";

const colors = [
  { type: "bg-primary", label: "primary" },
  { type: "bg-secondary", label: "secondary" },
  { type: "bg-accent", label: "accent" },
  { type: "bg-neutral", label: "neutral" },
  { type: "bg-primary-content", label: "Primary Content" },
  { type: "bg-secondary-content", label: "secondary content" },
  { type: "bg-accent-content", label: "accent content" },
  { type: "bg-neutral-content", label: "neutral content" },
  { type: "bg-base-100", label: "base 100" },
  { type: "bg-base-200", label: "base 200" },
  { type: "bg-base-300", label: "base 300" },
  { type: "bg-base-content", label: "base-content" },
  { type: "bg-info", label: "info" },
  { type: "bg-success", label: "success" },
  { type: "bg-warning", label: "warning" },
  { type: "bg-error", label: "error" },
  { type: "bg-info-content", label: "info content" },
  { type: "bg-success-content", label: "success content " },
  { type: "bg-warning-content", label: "warning content" },
  { type: "bg-error-content", label: "error content " },
];

const SectionSemanticColors = () => {
  const { parentElement } = usePreview();

  return (
    <>
      <div
        className="rounded-box bg-base-200 card hidden h-full w-80 shrink-0 xl:flex"
        style={{
          opacity: animateValue(parentElement.current, [12, 17], [0, 1]),
        }}
      >
        <div className="card-body">
          <h2 className="card-title mb-4 text-sm">Semantic colors</h2>
          <div className="grid grid-cols-4 gap-4">
            {colors.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div
                  className={`${item.type} rounded-btn aspect-square w-10`}
                />
                <div className="text-base-content/60 text-center text-[.8rem]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <a className="btn bg-block" data-sveltekit-preload-data="hover">
              Learn more about colors
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSemanticColors;
