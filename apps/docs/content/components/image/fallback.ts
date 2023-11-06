const App = `import {Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Image
      width={300}
      height={200}
      src="https://via.placeholder.com/300x200"
      fallbackSrc="https://via.placeholder.com/300x200"
      alt="Nexus Design System Image with fallback"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
