import {CloseFilledIcon} from "@nexus-ds/shared-icons";
import {useMemo} from "react";
import {forwardRef} from "@nexus-ds/system";

import {UseInputProps, useInput} from "./use-input";

export interface InputProps extends Omit<UseInputProps, "isLabelPlaceholder" | "isMultiline"> {}

const Input = forwardRef<"input", InputProps>((props, ref) => {
  const {
    Component,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    labelPlacement,
    hasPlaceholder,
    hasHelper,
    isLabelOutside,
    isLabelOutsideAsPlaceholder,
    shouldLabelBeOutside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
  } = useInput({...props, ref});

  const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

  const end = useMemo(() => {
    if (isClearable) {
      return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [isClearable, getClearButtonProps]);

  const helperWrapper = useMemo(() => {
    if (!hasHelper) return null;

    return (
      <div {...getHelperWrapperProps()}>
        {errorMessage ? (
          <div {...getErrorMessageProps()}>{errorMessage}</div>
        ) : description ? (
          <div {...getDescriptionProps()}>{description}</div>
        ) : null}
      </div>
    );
  }, [
    hasHelper,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps,
  ]);

  const innerWrapper = useMemo(() => {
    if (startContent || end) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
          {end}
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, end, getInputProps, getInnerWrapperProps]);

  const mainWrapper = useMemo(() => {
    if (shouldLabelBeOutside) {
      return (
        <div {...getMainWrapperProps()}>
          <div {...getInputWrapperProps()}>
            {isLabelOutsideAsPlaceholder ? labelContent : null}
            {innerWrapper}
          </div>
          {helperWrapper}
        </div>
      );
    }

    return (
      <>
        <div {...getInputWrapperProps()}>
          {labelContent}
          {innerWrapper}
        </div>
        {helperWrapper}
      </>
    );
  }, [
    labelPlacement,
    helperWrapper,
    shouldLabelBeOutside,
    isLabelOutsideAsPlaceholder,
    hasPlaceholder,
    labelContent,
    innerWrapper,
    errorMessage,
    description,
    getMainWrapperProps,
    getInputWrapperProps,
    getErrorMessageProps,
    getDescriptionProps,
  ]);

  return (
    <Component {...getBaseProps()}>
      {isLabelOutside ? labelContent : null}
      {mainWrapper}
    </Component>
  );
});

Input.displayName = "nexusui.Input";

export default Input;
