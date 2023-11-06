const App = `import {Textarea} from "@nexus-ds/react";

export default function App() {
  return (
    <Textarea
      isReadOnly
      label="Description"
      variant="bordered"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="Nexus Design System is a React UI library that provides a set of accessible, reusable, and beautiful components."
      className="max-w-xs"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
