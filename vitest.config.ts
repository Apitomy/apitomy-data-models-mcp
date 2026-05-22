import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    resolve: {
        alias: {
            "@apitomy/data-models": path.resolve(
                __dirname,
                "node_modules/@apitomy/data-models/dist/index.js",
            ),
        },
    },
    test: {
        include: ["test/**/*.test.ts"],
        globals: true,
    },
});
