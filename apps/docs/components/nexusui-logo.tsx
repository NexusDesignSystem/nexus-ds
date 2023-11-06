import React from "react";
import {clsx} from "@nexus-ds/shared-utils";

import {IconSvgProps} from "@/types";
import {dataAttr} from "@/utils";
export interface LogoProps extends IconSvgProps {
  auto?: boolean;
  small?: boolean;
  fill?: string;
  className?: string;
}

export const SmallLogo: React.FC<LogoProps> = ({
  auto,
  size,
  width,
  height,
  className,
  ...props
}) => (
  <img
    src="packages\storybook\public\dark-logo.png"
  />
);

export const LargeLogo: React.FC<LogoProps> = ({auto, className, ...props}) => (
  <img
  src="packages\storybook\public\light-logo.png"
  />
);

export const NexusLogo: React.FC<LogoProps> = ({auto, small, ...props}) => {
  if (auto) {
    return (
      <div>
        <SmallLogo auto={auto} {...props} />
        <LargeLogo auto={auto} {...props} />
      </div>
    );
  }

  if (small) {
    return <SmallLogo {...props} />;
  }

  return <LargeLogo auto={auto} {...props} />;
};
