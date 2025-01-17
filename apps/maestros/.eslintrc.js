/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@repo/lint/next.js')],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: `./tsconfig.json`,
  },
  plugins: ['@typescript-eslint'],
};
