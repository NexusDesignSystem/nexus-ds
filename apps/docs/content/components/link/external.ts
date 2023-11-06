const App = `import {Link} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Link isExternal href="https://github.com/NexusDesignSystem/nexus-ds">
        External Link
      </Link>
      <Link
        isExternal
        href="https://github.com/NexusDesignSystem/nexus-ds"
        showAnchorIcon
      >
        External Link Anchor
      </Link>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
