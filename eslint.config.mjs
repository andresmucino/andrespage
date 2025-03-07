import vue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import parser from "vue-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    // "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        vue,
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.browser,
        },

        parser: parser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            parser: "@typescript-eslint/parser",
        },
    },

    rules: {
        "vue/no-multiple-template-root": "off",
    },
}];