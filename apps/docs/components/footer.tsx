"use client";

import dynamic from "next/dynamic";
import {usePathname} from "next/navigation";

import {siteConfig} from "@/config/site";

const Link = dynamic(() => import("@nexus-ds/react").then((mod) => mod.Link));

export const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("/examples")) {
    return null;
  }

  return (
    <footer className="container mx-auto max-w-7xl pb-12 px-12">
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm text-default-400">
          Created&nbsp;by&nbsp;
          <Link isExternal className="text-sm">
            Euclid Labs @KJSCE
          </Link>
        </p>
      </div>
    </footer>
  );
};
