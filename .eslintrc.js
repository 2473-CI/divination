
// .eslintrc.js 配置
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended', // eslint
    'plugin:prettier/recommended', // plugin-prettier
    'plugin:vue/vue3-recommended',  // plugin-vue
  ],
  parserOptions: {
    parser: '@babel/eslint-parser', // 解析器
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // rules: { //也可设置一个prettier验证规则
  //  'prettier/prettier': 'error', // Runs Prettier as an ESLint rule and reports differences
  //   },
  rules: {
    'space-before-function-paren': ['error', 'never'],
    semi: 0, // 结尾不要分号
  },
}
