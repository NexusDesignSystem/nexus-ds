import React, {useRef} from "react";
import {Meta} from "@storybook/react";
import {menuItem} from "@nexus-ds/theme";
import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@nexus-ds/shared-icons";
import {clsx} from "@nexus-ds/shared-utils";
import {Menu, MenuItem, MenuSection, MenuProps} from "@nexus-ds/menu";

import Sidebar from "../src/sidebar";

export default {
  title: "Components/Sidebar",
  component: Menu,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <div>
          <Sidebar>
            <Story />
          </Sidebar>
        </div>
      </div>
    ),
  ],
} as Meta<typeof Menu>;

const defaultProps = {
  ...menuItem.defaultVariants,
};

const Template = ({color, variant, ...args}: MenuProps) => (
  <Menu aria-label="Actions" color={color} variant={variant} onAction={alert} {...args}>
    <MenuItem key="new">New file</MenuItem>
    <MenuItem key="copy">Copy link</MenuItem>
    <MenuItem key="edit">Edit file</MenuItem>
    <MenuItem key="delete" className="text-danger" color="danger">
      Delete file
    </MenuItem>
  </Menu>
);

const DisabledKeysTemplate = ({color, variant, ...args}: MenuProps) => (
  <Menu
    aria-label="Actions"
    color={color}
    disabledKeys={["edit", "delete"]}
    variant={variant}
    onAction={alert}
    {...args}
  >
    <MenuItem key="new">New file</MenuItem>
    <MenuItem key="copy">Copy link</MenuItem>
    <MenuItem key="edit">Edit file</MenuItem>
    <MenuItem key="delete" className="text-danger" color="danger">
      Delete file
    </MenuItem>
  </Menu>
);

const SingleSelectionTemplate = ({color, variant, disableAnimation, ...args}: MenuProps) => {
  const [selected, setSelected] = React.useState<string | Set<React.Key>>(new Set(["text"]));
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";
  const myRef = useRef<HTMLDivElement>(null);

  return (
    <Menu
      disallowEmptySelection
      aria-label="Actions"
      color={color}
      selectedKeys={selected}
      selectionMode="single"
      variant={variant}
      onSelectionChange={setSelected}
      {...args}
    >
      <MenuItem key="text">Text</MenuItem>
      <MenuItem key="number">Number</MenuItem>
      <MenuItem key="date">Date</MenuItem>
      <MenuItem key="single_date">Single Date</MenuItem>
      <MenuItem key="iteration">Iteration</MenuItem>
    </Menu>
  );
};

//

const MultipleSelectionTemplate = ({color, variant, ...args}: MenuProps) => {
  const [selected, setSelected] = React.useState<string | Set<React.Key>>(new Set(["text"]));

  return (
    <Menu
      disallowEmptySelection
      aria-label="Actions"
      closeOnSelect={false}
      color={color}
      selectedKeys={selected}
      selectionMode="multiple"
      variant={variant}
      onSelectionChange={setSelected}
      {...args}
    >
      <MenuItem key="text">Text</MenuItem>
      <MenuItem key="number">Number</MenuItem>
      <MenuItem key="date">Date</MenuItem>
      <MenuItem key="single_date">Single Date</MenuItem>
      <MenuItem key="iteration">Iteration</MenuItem>
    </Menu>
  );
};

const WithShortcutTemplate = ({color, variant, ...args}) => (
  <Menu aria-label="Actions" color={color} variant={variant} onAction={alert} {...args}>
    <MenuItem key="new">New file</MenuItem>
    <MenuItem key="copy">Copy link</MenuItem>
    <MenuItem key="edit">Edit file</MenuItem>
    <MenuItem key="delete" className="text-danger" color="danger" shortcut="⌘⇧D">
      Delete file
    </MenuItem>
  </Menu>
);

const WithStartContentTemplate = ({color, variant, disableAnimation, ...args}: MenuProps) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu
      aria-label="Actions"
      color={color}
      disableAnimation={disableAnimation}
      variant={variant}
      onAction={alert}
      {...args}
    >
      <MenuItem key="new" startContent={<AddNoteBulkIcon className={iconClasses} />}>
        New file
      </MenuItem>
      <MenuItem key="copy" startContent={<CopyDocumentBulkIcon className={iconClasses} />}>
        Copy link
      </MenuItem>
      <MenuItem key="edit" startContent={<EditDocumentBulkIcon className={iconClasses} />}>
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        color="danger"
        startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithEndContentTemplate = ({color, variant, disableAnimation, ...args}) => {
  const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Menu
      aria-label="Actions"
      color={color}
      disableAnimation={disableAnimation}
      variant={variant}
      onAction={alert}
      {...args}
    >
      <MenuItem key="new" endContent={<AddNoteBulkIcon className={iconClasses} />}>
        New file
      </MenuItem>
      <MenuItem key="copy" endContent={<CopyDocumentBulkIcon className={iconClasses} />}>
        Copy link
      </MenuItem>
      <MenuItem key="edit" endContent={<EditDocumentBulkIcon className={iconClasses} />}>
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        color="danger"
        endContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithDescriptionTemplate = ({color, variant, disableAnimation, ...args}) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu
      aria-label="Actions"
      color={color}
      disableAnimation={disableAnimation}
      variant={variant}
      onAction={alert}
      {...args}
    >
      <MenuItem
        key="new"
        description="Create a new file"
        startContent={<AddNoteBulkIcon className={iconClasses} />}
      >
        New file
      </MenuItem>
      <MenuItem
        key="copy"
        description="Copy the file link"
        startContent={<CopyDocumentBulkIcon className={iconClasses} />}
      >
        Copy link
      </MenuItem>
      <MenuItem
        key="edit"
        description="Allows you to edit the file"
        startContent={<EditDocumentBulkIcon className={iconClasses} />}
      >
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        color="danger"
        description="Permanently delete the file"
        startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithSectionsTemplate = ({color, variant, disableAnimation, ...args}) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu
      aria-label="Actions"
      closeOnSelect={false}
      color={color}
      disableAnimation={disableAnimation}
      variant={variant}
      onAction={alert}
      {...args}
    >
      <MenuSection title="Actions">
        <MenuItem
          key="new"
          description="Create a new file"
          startContent={<AddNoteBulkIcon className={iconClasses} />}
        >
          New file
        </MenuItem>
        <MenuItem
          key="copy"
          description="Copy the file link"
          startContent={<CopyDocumentBulkIcon className={iconClasses} />}
        >
          Copy link
        </MenuItem>
        <MenuItem
          key="edit"
          description="Allows you to edit the file"
          startContent={<EditDocumentBulkIcon className={iconClasses} />}
        >
          Edit file
        </MenuItem>
      </MenuSection>
      <MenuSection title="Danger zone">
        <MenuItem
          key="delete"
          className="text-danger"
          color="danger"
          description="Permanently delete the file"
          startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
        >
          Delete file
        </MenuItem>
      </MenuSection>
    </Menu>
  );
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const DisabledKeys = {
  render: DisabledKeysTemplate,

  args: {
    ...defaultProps,
  },
};

export const SingleSelection = {
  render: SingleSelectionTemplate,

  args: {
    ...defaultProps,
  },
};

export const MultipleSelection = {
  render: MultipleSelectionTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithShortcut = {
  render: WithShortcutTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithStartContent = {
  render: WithStartContentTemplate,

  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
  },
};

export const WithEndContent = {
  render: WithEndContentTemplate,

  args: {
    ...defaultProps,
    variant: "faded",
    color: "success",
  },
};

export const WithDescription = {
  render: WithDescriptionTemplate,

  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]",
  },
};

export const WithSections = {
  render: WithSectionsTemplate,

  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    className: "min-w-[240px]",
  },
};