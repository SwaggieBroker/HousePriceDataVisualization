import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import routes from '../../routes';
import DevTools from './DevTools';
import App from '../../app';


export default class Root extends React.Component {
    static propTypes = {
        store: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired
    };

    render() {
        return (
            <div>
                <Provider store={this.props.store}>
                    <div>
                        <ConnectedRouter history={this.props.history}>
                            <App children={routes}></App>
                        </ConnectedRouter>
                        <DevTools />
                    </div>
                </Provider>
            </div>
        );
    }
}
