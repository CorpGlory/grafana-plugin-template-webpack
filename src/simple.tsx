///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import React from 'react';

import { react2AngularDirective } from 'app/core/utils/react2angular';

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

react2AngularDirective('simpleReactPanel', SimpleReactPanel, ['name']);