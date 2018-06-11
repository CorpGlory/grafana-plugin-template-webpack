///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import React from 'react';
import coreModule from 'app/core/core_module';


export interface SimplePanelProps {
  value?: string;
  a: number;
  onClicked: () => void;
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
      <div onClick={this.props.onClicked}>Hello 
        value='{this.props.value}' 
        a='{this.props.a}' 
        from react! ({this.state.counter}...)</div>
    );
  }
}


// Same as react2AngularDirective in Grafana Core
coreModule.directive( 'simpleReactPanel', [
  'reactDirective',
  reactDirective => {
    return reactDirective(SimpleReactPanel, ['value', 'a', 'onClicked']);
  },
]);


