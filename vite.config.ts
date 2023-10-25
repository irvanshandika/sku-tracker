import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: fileURLToPath(new URL("./", import.meta.url)) },
      { find: "@components", replacement: fileURLToPath(new URL("./components", import.meta.url)) },
      { find: "@images", replacement: fileURLToPath(new URL("./components/images", import.meta.url)) },
      { find: "@icons", replacement: fileURLToPath(new URL("./components/icons", import.meta.url)) },
    ],
  },
});
