const App = `import {Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar isDisabled src="https://i.pravatar.cc/150?img=33" />
      <Avatar isDisabled name=DeltaS />
      <Avatar isDisabled src="https://i.pravatar.cc/150?img=27" />
      <Avatar isDisabled name="Jane" />
      <Avatar isDisabled src="https://i.pravatar.cc/150?img=23" />
      <Avatar isDisabled name="Joe" />
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
