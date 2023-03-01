module.exports = {
  printWidth: 200,
  vueIndentScriptAndStyle: true, // vue文件script和style标签缩进
  quoteProps: 'as-needed',
  trailingComma: 'all', // 对象末尾添加逗号 es5|none|all
  jsxSingleQuote: false, // jsx使用单引号
  arrowParens: 'always', // 箭头函数的参数总是加括号‘always’|‘avoid’
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'auto',

  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: true,
  // 使用分号, 默认true
  semi: false,
  // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 对象中的空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // JSX标签闭合位置 默认false
  // false: <div
  //          className=""
  //          style={{}}
  //       >
  // true: <div
  //          className=""
  //          style={{}} >
  jsxBracketSameLine: false,
}
