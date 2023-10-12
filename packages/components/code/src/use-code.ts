import type {CodeVariantProps} from "@nexus-ds/theme";
import type {HTMLnexusuiProps, PropGetter} from "@nexus-ds/system-rsc";

import {code} from "@nexus-ds/theme";
import {mapPropsVariants} from "@nexus-ds/system-rsc";
import {ReactRef} from "@nexus-ds/react-utils";
import {useMemo} from "react";

export interface UseCodeProps extends HTMLnexusuiProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
