module.exports = function override(config) {
  // remove source-map-loader
  config.module.rules = config.module.rules.filter(
    (rule) => !(rule.use && rule.use.includes("source-map-loader"))
  );
  return config;
};
