/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/next.cjs')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};