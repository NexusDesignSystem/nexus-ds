const App = `import {Card, CardBody} from "@nexus-ds/react";

export default function App() {
  return (
    <Card>
      <CardBody>
        <p>Design beautiful websites effortlessly, regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
