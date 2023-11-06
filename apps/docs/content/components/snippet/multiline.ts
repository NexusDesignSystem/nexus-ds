const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <Snippet>
      <span>npm install @nexus-ds/react</span>
      <span>yarn add @nexus-ds/react</span>
      <span>pnpm add @nexus-ds/react</span>
    </Snippet>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
