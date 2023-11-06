const App = `import {Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Image
      isZoomed
      width={240}
      alt="Nexus Design System Fruit Image with Zoom"
      src="https://nexus-design-system.vecel.app/images/fruit-1.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
