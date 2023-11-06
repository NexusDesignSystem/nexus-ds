const App = `import {Input} from "@nexus-ds/react";

export default function App() {
  return (
    <Input
      isReadOnly
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="beyonder@nexus"
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
