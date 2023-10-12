import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx, dataAttr} from "@nexus-ds/shared-utils";

import {useNavbarContext} from "./navbar-context";

export interface NavbarMenuItemProps extends HTMLnexusuiProps<"li"> {
  children?: React.ReactNode;
}

const NavbarMenuItem = forwardRef<"li", NavbarMenuItemProps>((props, ref) => {
  const {className, children, ...otherProps} = props;

  const domRef = useDOMRef(ref);

  const {slots, isMenuOpen, classNames} = useNavbarContext();

  const styles = clsx(classNames?.menuItem, className);

  return (
    <li
      ref={domRef}
      className={slots.menuItem?.({class: styles})}
      data-open={dataAttr(isMenuOpen)}
      {...otherProps}
    >
      {children}
    </li>
  );
});

NavbarMenuItem.displayName = "nexusui.NavbarMenuItem";

export default NavbarMenuItem;
