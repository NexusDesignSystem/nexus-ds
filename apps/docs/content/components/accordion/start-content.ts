const App = `import {Accordion, AccordionItem, Avatar} from "@nexus-ds/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="https://i.pravatar.cc/150?img=33"
          />
        }
        subtitle="4 unread messages"
        title="Chung Miller"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Janelle Lenard"
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="https://i.pravatar.cc/150?img=27"
          />
        }
        subtitle="3 incompleted steps"
        title="Janelle Lenard"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Nanami Kento"
        startContent={
          <Avatar
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?img=23"
          />
        }
        subtitle={
          <p className="flex">
            2 issues to<p className="text-primary ml-1">fix now</p>
          </p>
        }
        title="Nanami Kento"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
