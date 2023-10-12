import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx} from "@nexus-ds/shared-utils";

import {useNavbarContext} from "./navbar-context";

export interface NavbarContentProps extends HTMLnexusuiProps<"ul"> {
  /**
   * The content of the Navbar.Content. It is usually the `NavbarItem`,
   */
  children?: React.ReactNode | React.ReactNode[];
  /**
   * The justify of the content
   * @default start
   */
  justify?: "start" | "end" | "center";
}

const NavbarContent = forwardRef<"ul", NavbarContentProps>((props, ref) => {
  const {as, className, children, justify = "start", ...otherProps} = props;

  const Component = as || "ul";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useNavbarContext();

  const styles = clsx(classNames?.content, className);

  return (
    <Component
      ref={domRef}
      className={slots.content?.({class: styles})}
      data-justify={justify}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

NavbarContent.displayName = "nexusui.NavbarContent";

export default NavbarContent;
