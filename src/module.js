import { PanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

class Ctrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

  link(scope, element) {
    
  }
  
}

Ctrl.template = "<div>Hello from <b>Template Plugin</b></div>";

export { Ctrl as PanelCtrl }
