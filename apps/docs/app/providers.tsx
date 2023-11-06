"use client";

import * as React from "react";
import {NexusUIProvider} from "@nexus-ds/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ThemeProviderProps} from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({children, themeProps}: ProvidersProps) {
  return (
    <NexusUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NexusUIProvider>
  );
}
