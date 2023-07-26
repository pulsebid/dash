module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
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
