import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx} from "@nexus-ds/shared-utils";

import {useCardContext} from "./card-context";

const CardHeader = forwardRef<"div", HTMLnexusuiProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;
  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const headerStyles = clsx(classNames?.header, className);

  return (
    <Component ref={domRef} className={slots.header?.({class: headerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardHeader.displayName = "nexusui.CardHeader";

export default CardHeader;
