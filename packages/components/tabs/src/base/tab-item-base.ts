import {BaseItem, ItemProps} from "@nexus-ds/aria-utils";
import {ReactNode} from "react";
interface Props<T extends object = {}> extends Omit<ItemProps<"button", T>, "children" | "title"> {
  /**
   * The content of the component.
   */
  children?: ReactNode | null;
  /**
   * The title of the component.
   */
  title?: ReactNode | null;
  /**
   *  A string representation of the item's contents. Use this when the title is not readable.
   *  This will be used as native `title` attribute.
   * */
  titleValue?: string;
}

export type TabItemProps<T extends object = {}> = Props<T>;

const TabItemBase = BaseItem as <T extends object>(props: TabItemProps<T>) => JSX.Element;

export default TabItemBase;
