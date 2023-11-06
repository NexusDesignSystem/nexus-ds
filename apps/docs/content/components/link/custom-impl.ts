const App = `import {forwardRef} from "react";
import {LinkIcon} from "@nexus-ds/shared-icons";
import {linkAnchorClasses} from "@nexus-ds/theme";

import {useLink} from "@nexus-ds/react";

const MyLink = forwardRef((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

MyLink.displayName = "MyLink";

export default MyLink;`;

const AppTs = `import {forwardRef} from "react";
import {LinkIcon} from "@nexus-ds/shared-icons";
import {linkAnchorClasses} from "@nexus-ds/theme";

import {LinkProps, useLink} from "@nexus-ds/react";

export interface MyLinkProps extends LinkProps {}

const MyLink = forwardRef<HTMLAnchorElement, MyLinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

MyLink.displayName = "MyLink";

export default MyLink;`;

const react = {
  "/App.jsx": App,
};

const reactTs = {
  "/App.tsx": AppTs,
};

export default {
  ...react,
  ...reactTs,
};
