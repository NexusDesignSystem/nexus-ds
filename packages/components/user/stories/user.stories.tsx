import React from "react";
import {Meta} from "@storybook/react";
import {Link} from "@nexus-ds/link";

import {User} from "../src";

export default {
  title: "Components/User",
  component: User,
} as Meta<typeof User>;

const url = "https://avatars.githubusercontent.com/u/30373425?v=4";

export const Default = {
  args: {
    name: "The Beyonder",
    avatarProps: {
      src: url,
    },
  },
};

export const isFocusable = {
  args: {
    name: "The Beyonder",
    isFocusable: true,
    avatarProps: {
      src: url,
    },
  },
};

export const WithDefaultAvatar = {
  args: {
    name: "The Beyonder",
    avatarProps: {
      name: "The Beyonder",
      getInitials: (name) =>
        name
          .split(" ")
          .map((n) => n[0])
          .join(""),
    },
  },
};

export const WithDescription = {
  args: {
    name: "The Beyonder",
    description: "Software Engineer",
    avatarProps: {
      src: url,
    },
  },
};

export const WithLinkDescription = {
  args: {
    name: "The Beyonder",
    description: (
      <Link href="https://twitter.com/jrgarciadev" size="sm">
        @jrgarciadev
      </Link>
    ),
    avatarProps: {
      src: url,
    },
  },
};
