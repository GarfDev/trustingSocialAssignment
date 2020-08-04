module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  jsxBracketSameLine: true,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'flow',
      },
    },
  ],
};
