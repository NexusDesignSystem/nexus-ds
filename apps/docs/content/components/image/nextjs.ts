const App = `import {Image} from "@nexus-ds/react";
import NextImage from "next/image";

export default function App() {
  return (
    <Image
      as={NextImage}
      width={300}
      height={200}
      src="https://nexus-design-system.vecel.app/images/hero-card-complete.jpeg"
      alt="Nexus Design System hero Image"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
