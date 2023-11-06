const App = `import {Code} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Code size="sm">npm install @nexus-ds/react</Code>
      <Code size="md">npm install @nexus-ds/react</Code>
      <Code size="lg">npm install @nexus-ds/react</Code>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
