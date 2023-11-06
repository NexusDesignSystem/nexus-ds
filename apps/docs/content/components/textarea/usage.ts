const App = `import {Textarea} from "@nexus-ds/react";

export default function App() {
  return (
    <Textarea
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
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
