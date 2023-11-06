const App = `import {Input} from "@nexus-ds/react";

export default function App() {
  return (
    <Input
      type="email"
      label="Email"
      variant="bordered"
      defaultValue="beyonder@nexus"
      isInvalid={true}
      errorMessage="Please enter a valid email"
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
