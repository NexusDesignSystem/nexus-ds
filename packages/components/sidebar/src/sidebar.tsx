import React, {ReactNode} from "react";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
  return (
    <div className="fixed top-0 left-0 h-full w-68 bg-gray-800 text-white p-4">
      <div className="h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
