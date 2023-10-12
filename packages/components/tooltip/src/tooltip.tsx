import {useMemo} from "react";
import {forwardRef} from "@nexus-ds/system";
import {OverlayContainer} from "@react-aria/overlays";
import {AnimatePresence, motion} from "framer-motion";
import {TRANSITION_VARIANTS} from "@nexus-ds/framer-transitions";
import {warn} from "@nexus-ds/shared-utils";
import {Children, cloneElement} from "react";
import {getTransformOrigins} from "@nexus-ds/aria-utils";

import {UseTooltipProps, useTooltip} from "./use-tooltip";

export interface TooltipProps extends Omit<UseTooltipProps, "disableTriggerFocus" | "backdrop"> {}

const Tooltip = forwardRef<"div", TooltipProps>((props, ref) => {
  const {
    Component,
    children,
    content,
    isOpen,
    portalContainer,
    placement,
    disableAnimation,
    motionProps,
    showArrow,
    getTriggerProps,
    getTooltipProps,
    getArrowProps,
  } = useTooltip({
    ...props,
    ref,
  });

  let trigger: React.ReactElement;

  const {className, ...otherTooltipProps} = getTooltipProps();

  try {
    /**
     * Ensure tooltip has only one child node
     */
    const child = Children.only(children) as React.ReactElement & {
      ref?: React.Ref<any>;
    };

    trigger = cloneElement(child, getTriggerProps(child.props, child.ref));
  } catch (error) {
    trigger = <span />;
    warn("Tooltip must have only one child node. Please, check your code.");
  }

  const arrowContent = useMemo(() => {
    if (!showArrow) return null;

    return <span {...getArrowProps()} />;
  }, [showArrow, getArrowProps]);

  const animatedContent = useMemo(() => {
    return (
      <div {...otherTooltipProps}>
        <motion.div
          animate="enter"
          exit="exit"
          initial="exit"
          style={{
            ...getTransformOrigins(placement),
          }}
          variants={TRANSITION_VARIANTS.scaleSpring}
          {...motionProps}
        >
          <Component className={className}>{content}</Component>
          {arrowContent}
        </motion.div>
      </div>
    );
  }, [otherTooltipProps, className, placement, motionProps, Component, content, arrowContent]);

  return (
    <>
      {trigger}
      {disableAnimation && isOpen ? (
        <OverlayContainer portalContainer={portalContainer}>
          <div {...otherTooltipProps}>
            <Component className={className}>{content}</Component>
            {arrowContent}
          </div>
        </OverlayContainer>
      ) : (
        <AnimatePresence>
          {isOpen ? (
            <OverlayContainer portalContainer={portalContainer}>{animatedContent}</OverlayContainer>
          ) : null}
        </AnimatePresence>
      )}
    </>
  );
});

Tooltip.displayName = "nexusui.Tooltip";

export default Tooltip;
