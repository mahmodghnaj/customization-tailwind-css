import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";

export interface TypeInputs {
  type: string;
}
const inputs: TypeInputs[] = [
  {
    type: "",
  },
  {
    type: "toggle-primary",
  },
  {
    type: "toggle-secondary",
  },
  {
    type: "toggle-accent",
  },
];

const SectionFooter = () => {
  const { parentElement } = usePreview();
  return (
    <>
      <div
        className="card bg-base-200 hidden xl:flex"
        style={{
          opacity: animateValue(parentElement.current, [11, 16], [0, 1]),
        }}
      >
        <div className="card-body">
          <div className="flex h-full items-center justify-between gap-6">
            {inputs.map((item, index) => (
              <input
                key={index}
                tabIndex={-1}
                aria-label="toggle"
                defaultChecked
                type="checkbox"
                className={`toggle ${item.type} pointer-events-none`}
              />
            ))}
            {inputs.map((item, index) => (
              <input
                key={index}
                tabIndex={-1}
                aria-label="toggle"
                defaultChecked
                type="checkbox"
                className={`checkbox ${item.type} pointer-events-none`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFooter;
