export {Section as BaseSection} from "@react-stately/collections";
import {SectionProps as BaseSectionProps} from "@react-types/shared";
import {HTMLnexusuiProps, As} from "@nexus-ds/system";

/**
 * A modified version of the SectionProps from @react-types/shared, with the addition of the nexusui props.
 *
 */
export type SectionProps<Type extends As = "div", T extends object = {}> = BaseSectionProps<T> &
  HTMLnexusuiProps<Type>;
