const App = `import {Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar src="https://i.pravatar.cc/150?img=33" />
      <Avatar name="Max" />
      <Avatar src="https://i.pravatar.cc/150?img=27" />
      <Avatar name="Kenny" />
      <Avatar src="https://i.pravatar.cc/150?img=23" />
      <Avatar name="Kanishk" />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
