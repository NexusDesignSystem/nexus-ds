const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet size="sm">npm install @nexus-ds/react</Snippet>
      <Snippet size="md">npm install @nexus-ds/react</Snippet>
      <Snippet size="lg">npm install @nexus-ds/react</Snippet>
    </div>  
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
