const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');

module.exports = function override(config, env) {
	const tsLoader = getLoader(
		config.module.rules,
		rule =>
			rule.loader &&
			typeof rule.loader === 'string' &&
			rule.loader.includes('ts-loader')
	);

	return config;
};
