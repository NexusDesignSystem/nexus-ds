import type {AriaTabPanelProps} from "@react-aria/tabs";

import {forwardRef, HTMLnexusuiProps} from "@nexus-ds/system";
import {useDOMRef} from "@nexus-ds/react-utils";
import {clsx} from "@nexus-ds/shared-utils";
import {mergeProps} from "@react-aria/utils";
import {useTabPanel} from "@react-aria/tabs";
import {useFocusRing} from "@react-aria/focus";

import {ValuesType} from "./use-tabs";

interface Props extends HTMLnexusuiProps<"div"> {
  /**
   * The tab list state.
   */
  state: ValuesType["state"];
  /**
   * Component slots classes
   */
  slots: ValuesType["slots"];
  /**
   * User custom classnames
   */
  classNames?: ValuesType["classNames"];
}

export type TabPanelProps = Props & AriaTabPanelProps;

/**
 * @internal
 */
const TabPanel = forwardRef<"div", TabPanelProps>((props, ref) => {
  const {as, state, className, slots, classNames, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {tabPanelProps} = useTabPanel(props, state, domRef);
  const {focusProps, isFocused, isFocusVisible} = useFocusRing();

  const selectedItem = state.selectedItem;

  const content = selectedItem?.props?.children;

  const tabPanelStyles = clsx(classNames?.panel, className, selectedItem?.props?.className);

  if (!content) {
    return null;
  }

  return (
    <Component
      ref={domRef}
      data-focus={isFocused}
      data-focus-visible={isFocusVisible}
      {...mergeProps(tabPanelProps, focusProps, otherProps)}
      className={slots.panel?.({class: tabPanelStyles})}
      data-slot="panel"
    >
      {content}
    </Component>
  );
});

TabPanel.displayName = "nexusui.TabPanel";

export default TabPanel;
