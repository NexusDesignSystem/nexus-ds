const App = `import {Avatar, AvatarGroup} from "@nexus-ds/react";

export default function App() {
  return (
    <AvatarGroup
      isBordered
      max={3}
      total={10}
      renderCount={(count) => (
        <p className="text-small text-foreground font-medium ml-2">+{count} others</p>
      )}
    >
      <Avatar src="https://i.pravatar.cc/150?img=33" />
      <Avatar src="https://i.pravatar.cc/150?img=40" />
      <Avatar src="https://i.pravatar.cc/150?img=27" />
      <Avatar src="https://i.pravatar.cc/150?img=20" />
      <Avatar src="https://i.pravatar.cc/150?img=23" />
      <Avatar src="https://i.pravatar.cc/150?img=31" />
    </AvatarGroup>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
