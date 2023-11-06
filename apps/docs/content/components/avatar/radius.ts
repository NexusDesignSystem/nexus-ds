const App = `import {Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar isBordered radius="full" src="https://i.pravatar.cc/150?img=31" />
      <Avatar isBordered radius="lg" src="https://i.pravatar.cc/150?img=20" />
      <Avatar isBordered radius="md" src="https://i.pravatar.cc/150?img=27" />
      <Avatar isBordered radius="sm" src="https://i.pravatar.cc/150?img=40" />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
