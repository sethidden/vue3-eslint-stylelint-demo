module.exports = {
  "*.{js,ts,vue}": "eslint",
  // ".{js,ts,vue}": "eslint --fix", // you can use this instead. autofixes lint issues if possible. commit will fail only if lint error/warning has to be fixed manually
  // ".{js,ts,vue}": "eslint --fix --max-warnings 0",  // prevent comitting if there's even one warning + autofix

  "*.vue": "stylelint",
  // "*.{vue,css}": "stylelint", // add 'css' to stylelint regular styles. preprocessors (sass, less) need extra configuration not covered here
}
