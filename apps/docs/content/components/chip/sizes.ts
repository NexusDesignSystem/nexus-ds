const App = `import {Chip} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-4">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
