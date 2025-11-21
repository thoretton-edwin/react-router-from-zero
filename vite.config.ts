import tsconfigPaths from "vite-tsconfig-paths";
import {reactRouter} from "@react-router/dev/vite";
import {defineConfig} from "vitest/config";
import {process} from "std-env";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
    plugins: [tsconfigPaths(), !process.env.VITEST && reactRouter(), tailwindcss(),],
    test: {
        globals: true,
        setupFiles: './test-setup.ts',
        environment: "jsdom"
    }
})