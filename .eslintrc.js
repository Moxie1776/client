module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'max-len': ['warn', { code: 80 }],
    'no-console': 'off',
    'prettier/prettier': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    'vue/html-indent': ['warn', 2, { baseIndent: 1 }],
    'vue/multi-word-component-names': off,
  },
}
