const App = `import {Button} from "@nexus-ds/react";

export default function App() {
  return (
    <Button color="primary">
      Button
    </Button>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
