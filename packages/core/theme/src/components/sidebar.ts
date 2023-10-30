import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Sidebar **Tailwind Variants** component
 *
 * @example
 * ```jsx
 * const {
 *   base,
 *   wrapper,
 *   item,
 *   subItem,
 *   toggle,
 *   toggleIcon,
 *   content,
 * } = sidebar({...})
 *
 * <div className={base()}>
 *   <div className={wrapper()}>
 *     <button className={toggle()}>
 *       <span className={toggleIcon()} aria-hidden="true" />
 *     </button>
 *     <ul className={content()}>
 *       <li className={item()}>Item 1</li>
 *       <li className={item()}>Item 2</li>
 *       <li className={item()}>
 *         Submenu
 *         <ul className={content()}>
 *           <li className={subItem()}>Subitem 1</li>
 *           <li className={subItem()}>Subitem 2</li>
 *         </ul>
 *       </li>
 *     </ul>
 *   </div>
 * </div>
 * ```
 */
const sidebar = tv({
  slots: {
    base: ["flex", "h-screen", "bg-gray-800"],
    wrapper: ["flex", "flex-col", "h-full"],
    item: ["text-white", "py-2", "px-4", "hover:bg-gray-700"],
    subItem: ["text-gray-300", "py-2", "px-6", "hover:bg-gray-700"],
    toggle: [
      "group",
      "py-2",
      "px-4",
      "bg-gray-700",
      "text-white",
      "focus:outline-none",
      "focus:bg-gray-600",
      "focus-visible:border",
      "focus-visible:border-white",
    ],
    toggleIcon: [
      "w-6",
      "h-6",
      "pointer-events-none",
      "text-white",
      "group-data-[pressed=true]:opacity-70",
      "transition-opacity",
      "before:content-['']",
      "before:block",
      "before:h-px",
      "before:w-6",
      "before:bg-current",
      "before:transition-transform",
      "before:duration-150",
      "before:-translate-y-1",
      "before:rotate-0",
      "group-data-[open=true]:before:translate-y-px",
      "group-data-[open=true]:before:rotate-45",
      "after:content-['']",
      "after:block",
      "after:h-px",
      "after:w-6",
      "after:bg-current",
      "after:transition-transform",
      "after:duration-150",
      "after:translate-y-1",
      "after:rotate-0",
      "group-data-[open=true]:after:translate-y-0",
      "group-data-[open=true]:after:-rotate-45",
    ],
    content: ["flex-grow", "overflow-y-auto"],
  },
  variants: {
    position: {
      static: {
        base: "static",
      },
      fixed: {
        base: "fixed",
      },
    },
    hideOnScroll: {
      true: {
        base: ["sticky", "top-0"],
      },
    },
    isBordered: {
      true: {
        base: ["border-r", "border-gray-700"],
      },
    },
    isBlurred: {
      false: {
        base: "bg-gray-800",
      },
      true: {
        base: ["backdrop-blur-lg", "backdrop-saturate-150", "bg-gray-800/70"],
      },
    },
  },
  defaultVariants: {
    position: "fixed",
    isBlurred: true,
  },
});

export type SidebarVariantProps = VariantProps<typeof sidebar>;
export type SidebarSlots = keyof ReturnType<typeof sidebar>;

export {sidebar};
