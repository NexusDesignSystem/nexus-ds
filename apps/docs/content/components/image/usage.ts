const App = `import {Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Image
      width={300}
      alt="Nexus Design System hero Image"
      src="https://nexus-design-system.vecel.app/images/hero-card-complete.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
