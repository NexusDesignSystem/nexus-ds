const App = `import {Switch} from "@nexus-ds/react";

export default function App() {
  return (
    <Switch defaultSelected aria-label="Automatic updates"/>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
