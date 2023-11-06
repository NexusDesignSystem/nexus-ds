const App = `import { Link, Button } from "@nexus-ds/react";

export default function App() {
  return (
    <Button
      href="https://github.com/NexusDesignSystem/nexus-ds"
      as={Link}
      color="primary"
      showAnchorIcon
      variant="solid"
    >
      Button Link
    </Button>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
