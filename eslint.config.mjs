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
    rules: {
      // React Rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // We're using TypeScript
      "react/jsx-props-no-spreading": "warn",
      "react/no-unused-prop-types": "warn",
      "react/require-default-props": "off",
      "react/jsx-no-useless-fragment": "warn",

      // TypeScript Rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
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

      // Import Rules
      "import/prefer-default-export": "off",
      "import/no-default-export": "off",

      // General Rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-unused-vars": "off", // Using TypeScript's checker instead
      "no-underscore-dangle": "off",
      "no-use-before-define": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      camelcase: "warn",
      "spaced-comment": "warn",
      "no-duplicate-imports": "error",

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",

      // Accessibility Rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",

      // Add this to disable function call argument wrapping
      "function-call-argument-newline": ["error", "consistent"],
      "function-paren-newline": ["error", "consistent"],

      // Add this to disable prettier formatting rules
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
