import {PopoverContent} from "@nexus-ds/popover";
import {FocusScope} from "@react-aria/focus";
import {forwardRef} from "@nexus-ds/system";
import {Menu, MenuProps} from "@nexus-ds/menu";

import {useDropdownContext} from "./dropdown-context";

export interface DropdownMenuProps extends Omit<MenuProps, "menuProps"> {}

const DropdownMenu = forwardRef<"ul", DropdownMenuProps>((props, ref) => {
  const {getMenuProps} = useDropdownContext();

  return (
    <PopoverContent>
      <FocusScope contain restoreFocus>
        <Menu {...getMenuProps(props, ref)} />
      </FocusScope>
    </PopoverContent>
  );
});

DropdownMenu.displayName = "nexusui.DropdownMenu";

export default DropdownMenu;
