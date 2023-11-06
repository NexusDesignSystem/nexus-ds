const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <Snippet>npm install @nexus-ds/react</Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
