import type {ScrollShadowVariantProps} from "@nexus-ds/theme";

import {HTMLnexusuiProps, mapPropsVariants, PropGetter} from "@nexus-ds/system";
import {scrollShadow} from "@nexus-ds/theme";
import {ReactRef, useDOMRef} from "@nexus-ds/react-utils";
import {useDataScrollOverflow} from "@nexus-ds/use-data-scroll-overflow";
import {useMemo} from "react";

interface Props extends HTMLnexusuiProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The shadow size in pixels.
   * @default 40
   */
  size?: number;
  /**
   * The scroll offset to show the shadow.
   * @default 0
   */
  offset?: number;
  /**
   * Whether the shadow is enabled.
   * @default true
   */
  isEnabled?: boolean;
}

export type UseScrollShadowProps = Props & ScrollShadowVariantProps;

export function useScrollShadow(originalProps: UseScrollShadowProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, scrollShadow.variantKeys);

  const {
    ref,
    as,
    children,
    className,
    size = 40,
    offset = 0,
    isEnabled = true,
    style,
    ...otherProps
  } = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  useDataScrollOverflow({
    domRef,
    offset,
    isEnabled,
    overflowCheck: originalProps.orientation ?? "vertical",
  });

  const styles = useMemo(
    () =>
      scrollShadow({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getBaseProps: PropGetter = (props = {}) => ({
    ref: domRef,
    className: styles,
    "data-orientation": originalProps.orientation ?? "vertical",
    style: {
      "--scroll-shadow-size": `${size}px`,
      ...style,
      ...props.style,
    },
    ...otherProps,
    ...props,
  });

  return {Component, styles, domRef, children, getBaseProps};
}

export type UseScrollShadowReturn = ReturnType<typeof useScrollShadow>;
