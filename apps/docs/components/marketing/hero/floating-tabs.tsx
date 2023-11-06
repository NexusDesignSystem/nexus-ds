"use client";

import {Tab, Tabs} from "@nexus-ds/react";

export const FloatingTabs: React.FC<{}> = () => {
  return (
    <Tabs
      aria-label="Floating tabs example"
      className=""
      classNames={{
        base: "absolute left-[170px] -top-[160px] h-10 animate-[levitate_17s_ease_infinite_1s]",
        tabList: "max-w-[250px] shadow-sm",
      }}
      radius="full"
      size="sm"
    >
      <Tab key="beyonder" title="Beyonder" />
      <Tab key="delta" title="Delta" />
      <Tab key="bee" title="BusyBee" />
    </Tabs>
  );
};
