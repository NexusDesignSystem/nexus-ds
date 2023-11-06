const App = `import {Avatar, AvatarGroup} from "@nexus-ds/react";

export default function App() {
  return (
    <AvatarGroup isBordered isDisabled>
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
