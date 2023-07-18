import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";
import Home from "../../../assets/svg/home.svg";
import Image from "next/image";

const SectionHeader = () => {
  const { parentElement } = usePreview();
  return (
    <>
      <div
        className="navbar bg-base-200 rounded-box hidden xl:flex"
        style={{
          opacity: animateValue(parentElement.current, [13, 18], [0, 1]),
        }}
      >
        <div className="grow">
          <button
            tabIndex={-1}
            className="btn btn-ghost btn-circle avatar"
            aria-label="tailwindcss avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                width="40"
                height="40"
                alt="Person"
                src="/person.jpeg"
                aria-label="Image"
                className="rounded-full"
              />
            </div>
          </button>
        </div>
        <ul className="menu menu-sm menu-horizontal rounded-box">
          <li>
            <button tabIndex={-1}>
              <Home className="h-5 w-5 mb-1" />
              Inbox
              <span className="badge badge-sm">99+</span>
            </button>
          </li>
          <li>
            <button tabIndex={-1}>
              Update
              <span className="badge badge-sm badge-warning">NEW</span>
            </button>
          </li>
          <li>
            <button tabIndex={-1}>
              Stats
              <span className="badge badge-xs badge-info" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionHeader;
