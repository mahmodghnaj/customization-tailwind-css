import { animateValue } from "@/utilities/common/helper";
import classNames from "classnames";
import { usePreview } from "../preview-context";

export interface TypeBtn {
  type: string;
  label: String;
}
const buttons: TypeBtn[] = [
  {
    type: "btn-neutral",
    label: "Neutral",
  },
  {
    type: "btn-primary",
    label: "Primary",
  },
  {
    type: "btn-secondary",
    label: "Secondary",
  },
  {
    type: "btn-accent",
    label: "Accent",
  },
  {
    type: "btn-info",
    label: "Info",
  },
  {
    type: "btn-success",
    label: "Success",
  },
  {
    type: "btn-warning",
    label: "Warning",
  },
  {
    type: "btn-error",
    label: "Error",
  },
];

const SectionButtons = () => {
  const { parentElement } = usePreview();
  return (
    <>
      <div
        aria-hidden="true"
        className="rounded-box bg-base-200 grid grow grid-cols-2 gap-4 p-6"
        style={{
          opacity: animateValue(parentElement.current, [15, 20], [0, 1]),
        }}
      >
        {buttons.map((item, index) => (
          <button
            key={index}
            tabIndex={-1}
            aria-label="button"
            className={classNames({ [`btn ${item.type}`]: true })}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};
export default SectionButtons;
