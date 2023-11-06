"use client";

import React from "react";
import {Link} from "@nexus-ds/react";

import {VercelIcon} from "@/components/icons";
import {trackEvent} from "@/utils/va";

export const VercelCallout: React.FC<unknown> = () => {
  return (
    <Link
      isExternal
      className="flex justify-end items-center gap-2 text-foreground"
      href="https://www.vercel.com/?utm_source=nexus-design-system&utm_campaign=oss"
      onClick={() => {
        trackEvent("VercelCallout", {
          name: "vercel callout",
          action: "click",
          category: "footer",
        });
      }}
    >
      <p className="font-normal">Deployed on</p>
      <VercelIcon className="text-black dark:text-white" height={18} />
    </Link>
  );
};
