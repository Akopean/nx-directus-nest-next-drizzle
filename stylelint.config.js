module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-tailwindcss'],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'no-empty-source': null,
  },
  ignoreFiles: ['dist/**', 'node_modules/**'],
};
