const App = `import { Progress } from "@nexus-ds/react";

export default function App() {
  return (
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
