const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet variant="bordered">npm install @nexus-ds/react</Snippet>
      <Snippet variant="flat" color="warning">npm install @nexus-ds/react</Snippet>
      <Snippet variant="solid" color="primary">npm install @nexus-ds/react</Snippet>
      <Snippet variant="shadow" color="secondary">npm install @nexus-ds/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
