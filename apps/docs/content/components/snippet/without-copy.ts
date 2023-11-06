const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <Snippet hideCopyButton color="primary" variant="solid">
      npm install @nexus-ds/react
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
