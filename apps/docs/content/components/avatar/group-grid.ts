const App = `import {Avatar, AvatarGroup} from "@nexus-ds/react";

export default function App() {
  return (
    <AvatarGroup isBordered isGrid max={7}>
      <Avatar src="https://i.pravatar.cc/150?img=33" />
      <Avatar src="https://i.pravatar.cc/150?img=40" />
      <Avatar src="https://i.pravatar.cc/150?img=27" />
      <Avatar src="https://i.pravatar.cc/150?img=20" />
      <Avatar src="https://i.pravatar.cc/150?img=31" />
      <Avatar src="https://i.pravatar.cc/150?img=23" />
      <Avatar src="https://i.pravatar.cc/300?u=a042581f4f29026707d" />
      <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026710d" />
      <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026712d" />
    </AvatarGroup>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
