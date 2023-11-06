export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nexus Design System",
  description: "Design beautiful websites effortlessly, regardless of your design experience.",
  siteUrl: "https://nexus-design-system.vecel.app",
  creator: "@getnexus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexus-design-system.vecel.app",
    siteName: "NexusDS",
    description: "Beautiful, fast and modern React UI Library",
    images: [
      {
        url: "https://storybook-nexus.vercel.app/dark-logo.png",
        width: 1200,
        height: 630,
        alt: "NexusDS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusDS - Beautiful, fast and modern React UI Library",
    description: "Design beautiful websites effortlessly, regardless of your design experience.",
    image: "https://storybook-nexus.vercel.app/dark-logo.png",
    creator: "@nexusdesignsys",
  },
  links: {
    github: "https://github.com/NexusDesignSystem/nexus-ds",
    docs: "https://nexus-design-system.vecel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
