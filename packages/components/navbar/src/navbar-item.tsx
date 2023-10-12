import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx, dataAttr} from "@nexus-ds/shared-utils";

import {useNavbarContext} from "./navbar-context";

export interface NavbarItemProps extends HTMLnexusuiProps<"li"> {
  children?: React.ReactNode;
  /**
   * Whether the item is active or not.
   * @default false
   */
  isActive?: boolean;
}

const NavbarItem = forwardRef<"li", NavbarItemProps>((props, ref) => {
  const {as, className, children, isActive, ...otherProps} = props;

  const Component = as || "li";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = clsx(classNames?.item, className);

  return (
    <Component
      ref={domRef}
      className={slots.item?.({class: styles})}
      data-active={dataAttr(isActive)}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

NavbarItem.displayName = "nexusui.NavbarItem";

export default NavbarItem;
