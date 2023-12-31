const App = `import {Textarea} from "@nexus-ds/react";

export default function App() {
  return (
    <Textarea
      isInvalid={true}
      variant="bordered"
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      defaultValue="Nexus Design System is a React UI library with..."
      errorMessage="The description should be at least 255 characters long."
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
