const App = `import {Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="https://i.pravatar.cc/150?img=33" className="w-6 h-6 text-tiny"  />
      <Avatar src="https://i.pravatar.cc/150?img=40" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=27" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=20" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=31" className="w-20 h-20 text-large" />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
