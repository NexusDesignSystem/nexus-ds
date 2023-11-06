const App = `import {Badge, Avatar} from "@nexus-ds/react";

export default function App() {
  return (
    <div className="flex gap-3 items-center">
      <Badge content="5" color="default">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge content="5" color="primary">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?img=40"
        />
      </Badge>
      <Badge content="5" color="secondary">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
        />
      </Badge>
      <Badge content="5" color="success">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?img=20"
        />
      </Badge>
      <Badge content="5" color="warning">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?img=31"
        />
      </Badge>
      <Badge content="5" color="danger">
        <Avatar
          radius="md"
          src="https://i.pravatar.cc/150?img=33"
        />
      </Badge>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
