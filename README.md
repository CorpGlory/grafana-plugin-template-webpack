# Webpack Template for Grafana plugins development

Grafana [plugin](http://docs.grafana.org/plugins/developing/development/)
[webpack](https://webpack.github.io) version

# Features

* Uses npm instead of bower
* Avoid using `/external` folder with libs’ sources (but you can, if you want)
* Smaller resulting bundle compared to Grunt build
* All webpack features available
* SASS support with separate styles for dark and light Grafana themes

# Build plugin

```
npm install
npm run build
```

# Styles
There are template SASS files at [src/css/](src/css) directory.
__Change ID of root div to ID of your plugin__ in [template.html](src/partials/template.html) and [SASS files](src/css) in order __to prevent CSS conflicts between plugins__.

If you don't need separate styles for for dark and light themes - follow comments in [module.js](src/module.js).

If you want to use CSS instead of SASS - just change files extensions at [src/css/](src/css) directory
and in [module.js](src/module.js).

# See also

* [TypeScript extension](https://github.com/CorpGlory/grafana-plugin-template-webpack-typescript)
* [Progress List plugin](https://github.com/CorpGlory/grafana-progress-list) - full plugin with assets, libs, etc based on this temlpate
