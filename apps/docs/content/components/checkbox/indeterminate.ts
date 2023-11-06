const App = `import {Checkbox} from "@nexus-ds/react";

export default function App() {
  return (
    <Checkbox isIndeterminate>Option</Checkbox>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
