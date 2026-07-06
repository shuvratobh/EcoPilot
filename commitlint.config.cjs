module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",     // New feature
        "fix",      // Bug fix
        "docs",     // Documentation change
        "style",    // Formatting (no code logic change)
        "refactor", // Refactoring (no feature/fix)
        "test",     // Adding/updating tests
        "chore",    // Build process, dependencies
        "perf",     // Performance improvement
        "ci",       // CI/CD changes
        "revert",   // Reverting a commit
        "wip",      // Work in progress (not for main)
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "header-max-length": [2, "always", 100],
  },
};
