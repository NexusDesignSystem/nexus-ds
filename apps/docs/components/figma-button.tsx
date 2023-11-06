"use client";

import {Button, Link} from "@nexus-ds/react";

import {trackEvent} from "@/utils/va";

export const FigmaButton = () => (
  <Button
    isExternal
    showAnchorIcon
    as={Link}
    className="max-w-fit text-current"
    color="default"
    href="https://www.figma.com/file/0NLPLVGCzq7aClK4ICDliH/NexusDesignSystem?type=design&node-id=467%3A3&mode=design&t=iUhUC8askcm2lR34-1"
    variant="bordered"
    onPress={() => {
      trackEvent("FigmaPage - Open Figma Link", {
        action: "click",
        category: "figma",
      });
    }}
  >
    Open in Figma
  </Button>
);
