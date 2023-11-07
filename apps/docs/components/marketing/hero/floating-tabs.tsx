"use client";

import {Tabs, Tab, Chip} from "@nexus-ds/react";

export const FloatingTabs: React.FC<{}> = () => {
  return (
    <Tabs
      aria-label="Floating tabs example"
      className=""
      classNames={{
        base: "absolute left-[170px] -top-[160px] h-10 animate-[levitate_17s_ease_infinite_1s]",
        tabList: "max-w-[350px] shadow-sm",
      }}
      radius="full"
      size="md"
      color="primary"
    >
      <Tab 
      key="beyonder" 
      title={
            <div className="flex items-center space-x-2">
              <span>Beyonder</span>
              <Chip size="sm" variant="flat" className="text-10px">7</Chip>
            </div>
          } 
      />
      <Tab key="delta" title={
            <div className="flex items-center space-x-2">
              <span>Delta</span>
              <Chip size="sm" variant="flat" className="text-10px">2</Chip>
            </div>
          } />
      <Tab key="bee" title={
            <div className="flex items-center space-x-2">
              <span>BusyBee</span>
              <Chip size="sm" variant="flat" className="text-10px">3</Chip>
            </div>
          } />
    </Tabs>
  );
};
