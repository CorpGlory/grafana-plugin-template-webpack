///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import React from 'react';
import coreModule from 'app/core/core_module';


export interface SimplePanelProps {
  name: string;
}

export interface SimplePanelState {
  counter: number;
}
  
export class SimpleReactPanel extends React.Component<SimplePanelProps,SimplePanelState> {
  
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>Hello from react!</div>
    );
  }
}


// Same as react2AngularDirective in Grafana Core
coreModule.directive( 'simpleReactPanel', [
  'reactDirective',
  reactDirective => {
    return reactDirective(SimpleReactPanel, ['name']);
  },
]);


