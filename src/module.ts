///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import { PanelCtrl } from 'app/plugins/sdk';

import "./css/panel.base.scss";

// Remove next imports if you don't need separate styles for light and dark themes
import "./css/panel.dark.scss";
import "./css/panel.light.scss";

class Ctrl extends PanelCtrl {
  static templateUrl = 'partials/module.html';

  // Internal values
  _panelPath: string;
  pluginId: string; // actuall defined in parent

  constructor($scope, $injector) {
    super($scope, $injector);
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
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }
}

export { Ctrl as PanelCtrl };
