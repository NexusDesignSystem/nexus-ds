const App = `import {Input} from "@nexus-ds/react";

export default function App() {
  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="bordered"
      placeholder="Enter your email"
      defaultValue="beyonder@nexus"
      onClear={() => console.log("input cleared")}
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
