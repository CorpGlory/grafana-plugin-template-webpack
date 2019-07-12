# Webpack Template for Grafana plugins development

Grafana [plugin](http://docs.grafana.org/plugins/developing/development/)
[webpack](https://webpack.github.io) version

# Features

* Uses npm instead of bower
* Avoid using `/external` folder with libs’ sources (but you can, if you want)
* Smaller resulting bundle compared to Grunt build
* All webpack features available
* SASS support with separate styles for dark and light Grafana themes
* Debugging with [vscode-chrome-debug](https://github.com/Microsoft/vscode-chrome-debug)

# Build plugin

```
npm install
npm run build
```

# Styles
There are template SASS files at [src/css/](src/css).

__Change root tag__ in [SASS files](src/css) __to default Grafana tag (see example below) with ID of your plugin__ in order __to prevent CSS conflicts between plugins__.

Root tag example: panel-plugin-_grafana-plugin-template-webpack_ (where _grafana-plugin-template-webpack_ is ID of your plugin).

If you don't need separate styles for for dark and light themes - follow comments in [module.js](src/module.js).

If you want to use CSS instead of SASS - just change files extensions at [src/css/](src/css) and in [module.js](src/module.js).

# See also

* [TypeScript extension](https://github.com/CorpGlory/grafana-plugin-template-webpack-typescript)
* [Progress List plugin](https://github.com/CorpGlory/grafana-progress-list) - full plugin with assets, libs, etc based on this temlpate


## About CorpGlory Inc.
The project developed by [CorpGlory Inc.](https://corpglory.com/), a company which provides high quality software development, data visualization, Grafana and monitoring consulting.
