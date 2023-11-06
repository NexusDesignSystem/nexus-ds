const App = `import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nexus-ds/react";

export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt=" logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/141403672?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Nexus Design System</p>
          <p className="text-small text-default-500">Nexus Design</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Design beautiful websites effortlessly, regardless of your design experience.</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/NexusDesignSystem/nexus-ds"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
