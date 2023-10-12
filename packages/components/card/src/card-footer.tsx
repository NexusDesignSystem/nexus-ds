import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx} from "@nexus-ds/shared-utils";

import {useCardContext} from "./card-context";

export interface CardFooterProps extends HTMLnexusuiProps<"div"> {}

const CardFooter = forwardRef<"div", CardFooterProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const footerStyles = clsx(classNames?.footer, className);

  return (
    <Component ref={domRef} className={slots.footer?.({class: footerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardFooter.displayName = "nexusui.CardFooter";

export default CardFooter;
