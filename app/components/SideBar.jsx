import MemberProfile from "./MemberProfile.jsx";
import NavLinks from "./NavLinks";
import SideBarHeader from "./SideBarHeader.jsx";

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-base-300 py-12 grid grid-rows-[auto,1fr,auto]">
      <SideBarHeader />
      <NavLinks />
      <MemberProfile />
    </div>
  );
};
export default Sidebar;
