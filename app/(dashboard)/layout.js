import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./../components/SideBar";

export default function ({ children }) {
  return (
    <div class="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <div>{children}</div>
        <label
          for="my-drawer-2"
          class="drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
