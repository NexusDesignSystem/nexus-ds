const App = `import {Chip} from "@nexus-ds/react";

export default function App() {
  return (
    <Chip isDisabled color="primary">Chip</Chip>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
