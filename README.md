# Webpack Template for Grafana plugins development

Grafana [plugin](http://docs.grafana.org/plugins/developing/development/)
[webpack](https://webpack.github.io) version

# Features

* Uses npm instead of bower
* Avoid using `/external` folder with libs’ sources (but you can, if you want)
* Smaller resulting bundle compared to Grunt build
* All webpack features available

# Build plugin

```
npm install
npm run build
```

# See also

* [TypeScript extension](https://github.com/CorpGlory/grafana-plugin-template-webpack-typescript)
* [Progress List plugin](https://github.com/CorpGlory/grafana-progress-list) - full plugin with assets, libs, etc based on this temlpate
