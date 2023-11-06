const App = `import {Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Image
      isBlurred
      width={240}
      src="https://nexus-design-system.vecel.app/images/album-cover.png"
      alt="Nexus Design System Album Cover"
      classNames="m-5"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
