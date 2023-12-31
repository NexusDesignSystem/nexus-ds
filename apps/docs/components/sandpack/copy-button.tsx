import React from "react";
import {useSandpack} from "@codesandbox/sandpack-react";
import {Tooltip, Button} from "@nexus-ds/react";
import {useClipboard} from "@nexus-ds/use-clipboard";

import {trackEvent} from "@/utils/va";
import {CopyLinearIcon} from "@/components/icons";

export const CopyButton = () => {
  const {copy, copied} = useClipboard();

  const {sandpack} = useSandpack();

  const copyHandler = () => {
    const code = sandpack.files[sandpack.activeFile].code;

    copy(code);

    trackEvent("CopyButton - Sandpack", {
      name: "sandpack - copy code",
      action: "press",
      category: "docs",
      data: sandpack.activeFile,
    });
  };

  return (
    <Tooltip
      className="text-xs px-2"
      closeDelay={0}
      content={copied ? "Copied!" : "Copy"}
      radius="md"
    >
      <Button isIconOnly size="sm" title="Copy Code" variant="light" onClick={copyHandler}>
        <CopyLinearIcon className="text-white dark:text-zinc-500" height={16} width={16} />
      </Button>
    </Tooltip>
  );
};
