const App = `import {Snippet} from "@nexus-ds/react";

export default function App() {
  return (
    <Snippet
      tooltipProps={{
        color: "foreground",
        content: "Copy this snippet",
        disableAnimation: true,
        placement: "right",
        closeDelay: 0
      }}
    >
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
