import {Tabs, Tab, Snippet} from "@nexus-ds/react";

import Codeblock from "./codeblock";

import {YarnIcon, NpmSmallIcon, PnpmIcon} from "@/components/icons";
import {trackEvent} from "@/utils/va";

type PackageManagerName = "npm" | "yarn" | "pnpm";

type PackageManager = {
  icon: JSX.Element;
  name: PackageManagerName;
};

const packageManagers: PackageManager[] = [
  {
    name: "npm",
    icon: <NpmSmallIcon className="text-[#E53E3E]" />,
  },
  {
    name: "yarn",
    icon: <YarnIcon className="text-[#2C8EBB]" />,
  },
  {
    name: "pnpm",
    icon: <PnpmIcon className="text-[#F69220]" />,
  },
];

export interface PackageManagersProps {
  commands: Partial<Record<PackageManagerName, React.Key>>;
}

export const PackageManagers = ({commands}: PackageManagersProps) => {
  return (
    <Tabs
      aria-label="Nexus Design System installation commands"
      classNames={{
        base: "group mt-4",
        tabList: "h-10",
      }}
      variant="underlined"
      onSelectionChange={(tabKey) => {
        trackEvent("PackageManagers - Selection", {
          name: tabKey as string,
          action: "tabChange",
          category: "docs",
          data: commands[tabKey as unknown as PackageManagerName] ?? "",
        });
      }}
    >
      {packageManagers.map(({name, icon}) => {
        if (!commands[name]) return null;

        return (
          <Tab
            key={name}
            title={
              <div className="flex items-center space-x-2">
                {icon}
                <span>{name}</span>
              </div>
            }
          >
            <Snippet
              disableTooltip
              fullWidth
              hideSymbol
              classNames={{
                base: "bg-code-background text-code-foreground",
                pre: "font-light text-base",
                copyButton: "text-lg text-zinc-500 mr-2",
              }}
              onCopy={() => {
                trackEvent("PackageManagers - Copy", {
                  name,
                  action: "copyScript",
                  category: "docs",
                  data: commands[name] ?? "",
                });
              }}
            >
              <Codeblock removeIndent codeString={commands[name] as string} language="bash" />
            </Snippet>
          </Tab>
        );
      })}
    </Tabs>
  );
};
