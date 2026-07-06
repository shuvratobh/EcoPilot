import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",

      // ── React ───────────────────────────────────────────────────────
      "react/no-unescaped-entities": "off",

      // ── Imports ─────────────────────────────────────────────────────
      "import/no-duplicates": "error",

      // ── General ─────────────────────────────────────────────────────
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  {
    // Relax rules for config files
    files: ["*.config.ts", "*.config.js", "vitest.config.ts", "playwright.config.ts"],
    rules: {
      "no-console": "off",
    },
  },
];

export default eslintConfig;
