module.exports = {
  root: true,
  env: { node: true },
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    // https://github.com/vuejs/eslint-plugin-vue/blob/44ff0e02cd0fd08b8cd7dee0127dbb5590446323/docs/user-guide/README.md#conflict-with-prettier
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "warn",
  },
};
