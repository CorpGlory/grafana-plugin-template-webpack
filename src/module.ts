///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { PanelCtrl } from 'app/plugins/sdk';

// Loads the react component
import './simple';

import './css/panel.base.scss';

// Remove next imports if you don't need separate styles for light and dark themes
import './css/panel.dark.scss';
import './css/panel.light.scss';

class Ctrl extends PanelCtrl {
  static templateUrl = 'partials/module.html';

  // Internal values
  _panelPath: string;


  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
  }

  clickedInReact(data) {
    console.log( 'Message from react', data );
  }

  onInitEditMode() {
    this.addEditorTab('Editor', this.panelPath + 'partials/editor.html', 1);
    this.editorTabIndex = 1;
    console.log('OPEN editor!');
  }

  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    // window.System.import(this.panelPath + "css/panel.base.css!");
    // // Remove next lines if you don't need separate styles for light and dark themes
    // if (grafanaBootData.user.lightTheme) {
    //   window.System.import(this.panelPath + "css/panel.light.css!");
    // } else {
    //   window.System.import(this.panelPath + "css/panel.dark.css!");
    // }
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `public/plugins/${this.pluginId}/`;  // what if root is different?
    }
    return this._panelPath;
  }
}

export { Ctrl as PanelCtrl };
