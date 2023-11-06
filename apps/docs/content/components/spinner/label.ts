const App = `import {Spinner} from "@nexus-ds/react";

export default function App() {
  return (
    <Spinner label="Loading..." color="warning" />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
