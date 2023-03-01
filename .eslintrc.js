module.exports = {
	root: true,

	// ↓将vue文件转换成ESTree，交给eslint进行检查，主要是校验<template>中的内容
	parser: 'vue-eslint-parser',

	// ↓typescript转换成ESTree，交给eslint进行检查
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		browser: true,
		node: true,
		es6: true,
	},

	// 'off'-0 'warn'-1 'error'-2, 具体规则意思查看：https://eslint.bootcss.com/docs/rules/
	rules: {
		// eslint-plugin-vue 配置 使用 eslint 检测 template里的代码，这里我配置 2 个空格缩进
		'vue/html-indent': ['error', 'tab'],
		'vue/comment-directive': 'off',
		// ↓要求使用 const 声明那些声明后不再被修改的变量
		'prefer-const': 'error',
		// ↓强制 getter 和 setter 在对象中成对出现
		'accessor-pairs': 'error',
		// ↓强制箭头函数的箭头前后使用一致的空格
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		// ↓强制箭头函数的箭头前后使用一致的空格
		'block-spacing': ['error', 'always'],
		// ↓强制在代码块中使用一致的大括号风格
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true,
			},
		],
		camelcase: [
			0,
			{
				properties: 'always',
			},
		],
		'comma-dangle': [0],
		'comma-spacing': [
			2,
			{
				before: false,
				after: true,
			},
		],
		'comma-style': [2, 'last'],
		'constructor-super': 2,
		curly: [2, 'multi-line'],
		'dot-location': [2, 'property'],
		'eol-last': 2,
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'generator-star-spacing': [
			2,
			{
				before: true,
				after: true,
			},
		],
		'handle-callback-err': [2, '^(err|error)$'],
		// ↓强制使用一致的缩进
		indent: ['off', 'tab', { SwitchCase: 1 }],
		'jsx-quotes': [2, 'prefer-single'],
		'key-spacing': [
			2,
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			2,
			{
				before: true,
				after: true,
			},
		],
		'new-cap': [
			2,
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		'new-parens': 2,
		'no-array-constructor': 2,
		'no-caller': 2,
		'no-console': 'off',
		'no-class-assign': 2,
		'no-cond-assign': 2,
		'no-const-assign': 2,
		'no-control-regex': 0,
		'no-delete-var': 2,
		'no-dupe-args': 2,
		'no-dupe-class-members': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty-character-class': 2,
		'no-empty-pattern': 2,
		'no-eval': 2,
		'no-ex-assign': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': [2, 'functions'],
		'no-fallthrough': 2,
		'no-floating-decimal': 2,
		'no-func-assign': 2,
		'no-implied-eval': 2,
		'no-inner-declarations': [2, 'functions'],
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-iterator': 2,
		'no-label-var': 2,
		'no-labels': [
			2,
			{
				allowLoop: false,
				allowSwitch: false,
			},
		],
		'no-lone-blocks': 2,
		'no-mixed-spaces-and-tabs': 0,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-multiple-empty-lines': [
			2,
			{
				max: 1,
			},
		],
		'no-native-reassign': 2,
		'no-negated-in-lhs': 2,
		'no-new-object': 2,
		'no-new-require': 2,
		'no-new-symbol': 2,
		'no-new-wrappers': 2,
		'no-obj-calls': 2,
		'no-octal': 2,
		'no-octal-escape': 2,
		'no-path-concat': 2,
		'no-proto': 2,
		'no-redeclare': 2,
		'no-regex-spaces': 2,
		'no-return-assign': [2, 'except-parens'],
		'no-self-assign': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-shadow-restricted-names': 2,
		'no-spaced-func': 2,
		'no-sparse-arrays': 2,
		'no-this-before-super': 2,
		'no-throw-literal': 2,
		'no-trailing-spaces': 0,
		'no-undef': 0,
		'no-undef-init': 2,
		'no-unexpected-multiline': 2,
		'no-unmodified-loop-condition': 2,
		'no-unneeded-ternary': [
			2,
			{
				defaultAssignment: false,
			},
		],
		'no-unreachable': 2,
		'no-unsafe-finally': 2,
		'no-useless-call': 2,
		'no-useless-computed-key': 2,
		'no-useless-constructor': 2,
		'no-useless-escape': 0,
		'no-whitespace-before-property': 2,
		'no-with': 2,
		'one-var': [
			2,
			{
				initialized: 'never',
			},
		],
		'operator-linebreak': [
			2,
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before',
				},
			},
		],
		'padded-blocks': [2, 'never'],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		semi: [2, 'never'],
		'semi-spacing': [
			2,
			{
				before: false,
				after: true,
			},
		],
		'space-before-blocks': [2, 'always'],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': 2,
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': [
			2,
			'always',
			{
				markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','],
			},
		],
		'template-curly-spacing': [2, 'never'],
		'use-isnan': 2,
		'valid-typeof': 2,
		'wrap-iife': [2, 'any'],
		'yield-star-spacing': [2, 'both'],
		yoda: [2, 'never'],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'object-curly-spacing': [
			2,
			'always',
			{
				objectsInObjects: false,
			},
		],
		'array-bracket-spacing': [2, 'never'],
		// ↓<script setup>中变量在<template>是否有使用
		'vue/script-setup-uses-vars': 'error',
		// ↓禁止使用@ts-ignore来消除ESLint检查
		'@typescript-eslint/ban-ts-ignore': 'off',
		// ↓在函数和类方法上需要显式的返回类型
		'@typescript-eslint/explicit-function-return-type': 'off',
		// ↓禁止使用any类型
		'@typescript-eslint/no-explicit-any': 'off',
		// ↓除导入语句外，禁止使用require语句
		'@typescript-eslint/no-var-requires': 'off',
		// ↓禁止使用空函数
		'@typescript-eslint/no-empty-function': 'off',
		// ↓对自定义事件名称强制使用特定的大小写
		'vue/custom-event-name-casing': 'off',
		// ↓禁止定义前使用
		'no-use-before-define': 'off',
		// ↓在定义变量之前不允许使用变量
		'@typescript-eslint/no-use-before-define': 'off',
		// ↓禁止使用@ts-注解
		'@typescript-eslint/ban-ts-comment': 'off',
		// ↓禁止使用特定类型
		'@typescript-eslint/ban-types': 'off',
		// ↓禁止使用!后缀运算符进行非null断言
		'@typescript-eslint/no-non-null-assertion': 'off',
		// ↓在导出的函数和类的公共类方法上需要显式的返回值和参数类型
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// ↓禁止使用未使用的变量
		// '@typescript-eslint/no-unused-vars': [
		//   'error',
		//   {
		//     argsIgnorePattern: '^_',
		//     varsIgnorePattern: '^_',
		//   },
		// ],
		// ↓禁止使用未使用的变量
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
		// ↓在函数括号前需要或不允许有空格
		'space-before-function-paren': 'off',
		// ↓强制属性顺序
		'vue/attributes-order': 'off',
		// ↓强制每个组件应位于其自己的文件中
		'vue/one-component-per-file': 'off',
		// ↓在标签的右括号之前要求或不允许换行
		'vue/html-closing-bracket-newline': 'off',
		// ↓强制每行的最大属性数
		'vue/max-attributes-per-line': 'off',
		// ↓在多行元素的内容之前和之后需要换行
		'vue/multiline-html-element-content-newline': 'off',
		// ↓在单行元素的内容之前和之后需要换行
		'vue/singleline-html-element-content-newline': 'off',
		// ↓在模板中的自定义组件上实施属性命名样式
		'vue/attribute-hyphenation': 'off',
		// ↓需要参数的默认值
		'vue/require-default-prop': 'off',
		// ↓html的风格
		'vue/html-self-closing': [
			'off',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		// ↓绑定事件名字规范 https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
		'vue/v-on-event-hyphenation': [
			'error',
			'never',
			{
				autofix: true,
				ignore: [],
			},
		],
		'vue/multi-word-component-names': 'off',
	},

	extends: ['plugin:vue/vue3-recommended', 'plugin:vue/base'],

	plugins: [
		// 注意这里不能配置 html 选项，为什么？https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
		'vue',
	],

	globals: {
		defineProps: 'readonly',
	},
}
