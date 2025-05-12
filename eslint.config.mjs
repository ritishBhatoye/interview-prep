import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: ["unused-imports"],
    rules: {
      // ✅ React Rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "warn",
      "react/no-unused-prop-types": "warn",
      "react/require-default-props": "off",
      "react/jsx-no-useless-fragment": "warn",

      // ✅ React Hooks Rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ✅ TypeScript Rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/no-shadow": ["error"],

      // ✅ Unused Imports & Variables
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // ✅ Import Rules
      "import/prefer-default-export": "off",
      "import/no-default-export": "off",

      // ✅ General Rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-underscore-dangle": "off",
      "no-use-before-define": "off",
      "no-shadow": "off",
      camelcase: "warn",
      "spaced-comment": "warn",
      "no-duplicate-imports": "error",

      // ✅ Next.js specific
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",

      // ✅ A11y
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",

      // ✅ Function Formatting
      "function-call-argument-newline": ["error", "consistent"],
      "function-paren-newline": ["error", "consistent"],

      // ✅ Prettier Custom Overrides
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          singleQuote: false,
          trailingComma: "none",
          bracketSpacing: true,
          arrowParens: "avoid",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
