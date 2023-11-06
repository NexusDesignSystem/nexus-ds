export const getFileEntry = (theme: string) => `
import React from "react";
import ReactDOM from "react-dom/client";
import { NexusUIProvider } from "@nexus-ds/react";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NexusUIProvider>
      <div className="w-screen h-screen ${theme} text-foreground bg-background p-8 flex items-start justify-center">
        <App />
      </div>  
    </NexusUIProvider>
  </React.StrictMode>
);`;

export const tailwindConfig = `const { nexusui } = require("@nexus-ds/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@nexus-ds/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nexusui()],
};`;

export const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

export const stylesConfig = `@tailwind base;
@tailwind components;
@tailwind utilities;`;
