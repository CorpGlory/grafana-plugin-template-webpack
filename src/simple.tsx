///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import React from 'react';
import coreModule from 'app/core/core_module';


export interface SimplePanelProps {
  name: string;
  a: number;
}

export interface SimplePanelState {
  counter: number;
}
  
export class SimpleReactPanel extends React.Component<SimplePanelProps,SimplePanelState> {
  
  constructor(props) {
    super(props);
    console.log( 'CONSTRUCTOR', this.props );
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log( 'RENDER', this.props, this.state );
    return (
      <div>Hello name='{this.props.name}' A='{this.props.a}' from react! ({this.state.counter}...)</div>
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


