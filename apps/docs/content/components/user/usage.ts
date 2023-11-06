const App = `import {User} from "@nexus-ds/react";

export default function App() {
  return (
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?img=23"
      }}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
