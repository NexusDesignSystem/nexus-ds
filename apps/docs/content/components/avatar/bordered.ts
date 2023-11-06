const App = `import {Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar isBordered src="https://i.pravatar.cc/150?img=33" />
      <Avatar isBordered src="https://i.pravatar.cc/150?img=40" />
      <Avatar isBordered src="https://i.pravatar.cc/150?img=27" />
      <Avatar isBordered src="https://i.pravatar.cc/150?img=20" />
      <Avatar isBordered src="https://i.pravatar.cc/150?img=23" />
      <Avatar isBordered src="https://i.pravatar.cc/150?img=31" />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
