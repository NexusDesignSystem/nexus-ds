import type {ListboxItemProps, ListboxSectionProps} from "@nexus-ds/listbox";

import {ListboxItem, ListboxSection} from "@nexus-ds/listbox";

import Select from "./select";

// export types
export type {SelectProps} from "./select";
export type {ListboxItemProps as SelectItemProps};
export type {ListboxSectionProps as SelectSectionProps};
export type {SelectedItemProps, SelectedItems} from "./use-select";

// export hooks
export {useSelect} from "./use-select";

// export component
export {Select, ListboxItem as SelectItem, ListboxSection as SelectSection};
