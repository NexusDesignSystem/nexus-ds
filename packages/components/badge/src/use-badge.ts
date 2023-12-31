import type {BadgeSlots, BadgeVariantProps, SlotsToClasses} from "@nexus-ds/theme";
import type {ReactNode} from "react";
import type {HTMLnexusuiProps, PropGetter} from "@nexus-ds/system-rsc";

import {badge} from "@nexus-ds/theme";
import {mapPropsVariants} from "@nexus-ds/system-rsc";
import {clsx} from "@nexus-ds/shared-utils";
import {ReactRef} from "@nexus-ds/react-utils";
import {useMemo} from "react";

interface Props extends HTMLnexusuiProps<"span", "content"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLSpanElement | null>;
  /**
   * The children of the badge.
   */
  children: ReactNode;
  /**
   * The content of the badge. The badge will be rendered relative to its children.
   */
  content?: string | number | ReactNode;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Badge classNames={{
   *    base:"base-classes", // wrapper
   *    badge: "badge-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<BadgeSlots>;
}

export type UseBadgeProps = Props & BadgeVariantProps;

export function useBadge(originalProps: UseBadgeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, badge.variantKeys);

  const {as, children, className, content, classNames, ...otherProps} = props;

  const Component = as || "span";

  const isOneChar = useMemo(
    () => String(content)?.length === 1 || originalProps?.isOneChar,
    [content, originalProps?.isOneChar],
  );

  const isDot = useMemo(() => String(content)?.length === 0, [content]);

  const baseStyles = clsx(classNames?.badge, className);

  const slots = useMemo(
    () =>
      badge({
        ...variantProps,
        isOneChar,
        isDot,
      }),
    [...Object.values(variantProps), isOneChar, isDot],
  );

  const getBadgeProps: PropGetter = () => {
    return {
      className: slots.badge({class: baseStyles}),
      "data-invisible": originalProps.isInvisible,
      ...otherProps,
    };
  };

  return {
    Component,
    children,
    content,
    slots,
    classNames,
    disableAnimation: originalProps?.disableAnimation,
    isInvisible: originalProps?.isInvisible,
    getBadgeProps,
  };
}

export type UseBadgeReturn = ReturnType<typeof useBadge>;
