# Webpack/Typescript Template for Grafana plugins development

[![CircleCI](https://circleci.com/gh/ryantxu/grafana-plugin-template-webpack/tree/master.svg?style=svg)](https://circleci.com/gh/ryantxu/grafana-plugin-template-webpack/tree/master)

[![Dependancy Status](https://david-dm.org/ryantxu/grafana-plugin-template-webpack.svg)




Fork from [CorpGlory](https://github.com/CorpGlory/grafana-plugin-template-webpack)


# Changes

* typescript
* webpack 4
* Copies README
* Automatically puts the version & date in plugin.json
* Adds tslint & prettier
* includes an editor page
* simple [circleci](https://circleci.com/gh/ryantxu/grafana-plugin-template-webpack) config
* react component


# TODO
* icon
* tests

# Wishlist
* simple tests & circleci verification
* 'release' script.  'dist' is ignored... but release script should make a branch add dist and remove the .gitignore... then tag it?
    * pull requests with dist included are really annoying


# Build plugin

```
yarn install
yarn build
```


## Credits

Forked from [CorpGlory Team](http://corpglory.com/)
