module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-acme2`
  extends: ["acme2"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
