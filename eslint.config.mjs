import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // matiin strict any
      "@typescript-eslint/no-unused-vars": "off", // matiin unused vars
      "react/no-unescaped-entities": "off", // matiin ' vs &apos;
      "react-hooks/rules-of-hooks": "off", // matiin error hook
      "react-hooks/exhaustive-deps": "off", // matiin deps warning
      "@next/next/no-img-element": "off", // biarin pake <img>
      "@next/next/no-html-link-for-pages": "off", // biarin pake <a>
      "prefer-const": "off", // biarin pake let
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default eslintConfig;
