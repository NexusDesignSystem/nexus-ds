const App = `import {Kbd} from "@nexus-ds/react";

export default function App() {
  return (
    <Kbd keys={["command"]}>K</Kbd>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
