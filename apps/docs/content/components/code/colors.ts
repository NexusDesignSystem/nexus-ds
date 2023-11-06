const App = `import {Code} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Code color="default">npm install @nexus-ds/react</Code>
      <Code color="primary">npm install @nexus-ds/react</Code>
      <Code color="secondary">npm install @nexus-ds/react</Code>
      <Code color="success">npm install @nexus-ds/react</Code>
      <Code color="warning">npm install @nexus-ds/react</Code>
      <Code color="danger">npm install @nexus-ds/react</Code>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
