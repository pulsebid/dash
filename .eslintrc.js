module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
        // "plugin:prettier/recommended",
    ],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        // "vue/no-unused-vars": "error",
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
    },
};
