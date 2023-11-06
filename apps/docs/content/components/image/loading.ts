const App = `import {Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Image
      width={300}
      height={200}
      alt="Nexus Design System hero Image with delay"
      src="https://app.requestly.io/delay/5000/https://nexus-design-system.vecel.app/images/hero-card-complete.jpeg"
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
