import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SideBar from './components/SideBar';
import { Layout } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { authLogoutAndRedirect } from './actions/auth';
import './styles/main.scss';

const { Content, Sider } = Layout;

class App extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        children: PropTypes.shape().isRequired,
        dispatch: PropTypes.func.isRequired,
        location: PropTypes.shape({
            pathname: PropTypes.string
        })
    };

    static defaultProps = {
        location: undefined
    };

    logout = () => {
        this.props.dispatch(authLogoutAndRedirect());
    };

    render() {
        return (
            <div className="app">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider>
                        <SideBar />
                    </Sider>

                    <Content>
                        <div>
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        location: state.routing.location
    };
};

export default connect(mapStateToProps)(App);
export { App as AppNotConnected };
