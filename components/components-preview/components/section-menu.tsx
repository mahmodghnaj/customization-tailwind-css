import { animateValue } from "@/utilities/common/helper";
import { usePreview } from "../preview-context";
import App from "../../../assets/svg/app.svg";
import Line from "../../../assets/svg/line.svg";
import Love from "../../../assets/svg/love.svg";
import Chat from "../../../assets/svg/chat.svg";
import Person from "../../../assets/svg/person.svg";
import Box from "../../../assets/svg/box.svg";
import { ReactNode } from "react";

export interface TypeOptions {
  icon: ReactNode;
  label?: string;
  classMenu?: string;
  classBtn?: string;
}
const options: TypeOptions[] = [
  {
    icon: <App />,
    classMenu: "menu-title",
  },
  {
    icon: <Line />,
    classBtn: "active",
    label: "Dashboard",
  },
  {
    icon: <Love />,
    label: "Notifications",
  },
  {
    icon: <Chat />,
    label: "Messages",
  },
  {
    icon: <Person />,
    label: "People",
  },
  {
    icon: <Box />,
    label: "Products",
  },
];
const SectionMenu = () => {
  const menuOptions2 = options.slice(1);
  const { parentElement } = usePreview();
  return (
    <>
      <div className="flex gap-6">
        <div
          className="rounded-box bg-base-200 h-full shrink-0"
          style={{
            opacity: animateValue(parentElement.current, [16, 21], [0, 1]),
          }}
        >
          <ul className="menu menu-md">
            {options.map((item, index) => (
              <li key={index} className={item.classMenu}>
                <button className={item.classBtn}>{item.icon}</button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-box bg-base-200 h-full w-60 shrink-0"
          style={{
            opacity: animateValue(parentElement.current, [14, 19], [0, 1]),
          }}
        >
          <ul className="menu menu-md">
            <li className="menu-title">Admin Panel</li>
            {menuOptions2.map((item, index) => (
              <li key={index} className={item.classMenu}>
                <button tabIndex={-1} className={item.classBtn}>
                  {item.icon}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SectionMenu;
