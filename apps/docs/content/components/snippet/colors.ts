const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <Snippet color="default">npm install @nexus-ds/react</Snippet>
      <Snippet color="primary">npm install @nexus-ds/react</Snippet>
      <Snippet color="secondary">npm install @nexus-ds/react</Snippet>
      <Snippet color="success">npm install @nexus-ds/react</Snippet>
      <Snippet color="warning">npm install @nexus-ds/react</Snippet>
      <Snippet color="danger">npm install @nexus-ds/react</Snippet>
    </div> 
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
