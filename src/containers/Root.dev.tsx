import * as React from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { ConnectedRouter } from 'react-router-redux';
import Routes from './Routes';

export default class Root extends React.Component<any, any> {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Routes />
            <DevTools />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
