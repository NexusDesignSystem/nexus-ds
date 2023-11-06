const App = `import {User, Link} from "@nexus-ds/react";

export default function App() {
  return (
    <User   
      name="Junior Garcia"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          @jrgarciadev
        </Link>
      )}
      avatarProps={{
        src: "https://avatars.githubusercontent.com/u/87353374?v=4"
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
