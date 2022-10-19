module.exports = {
  // extends: ["@commitlint/config-conventional"], // 原始的changeLog规范
  extends: ["cz"], // 启用自定义规范
  // rules: {
  //   "type-enum": [
  //     2,
  //     "always",
  //     [
  //       "feat",
  //       "upd",
  //       "del",
  //       "fix",
  //       "refactor",
  //       "test",
  //       "perf",
  //       "docs",
  //       "style",
  //       "revert",
  //     ],
  //   ],
  //   "subject-full-stop": [0, "never"],
  //   "subject-case": [0, "never"],
  // },
};
