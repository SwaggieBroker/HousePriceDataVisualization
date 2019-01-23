import { Menu, Icon } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authLogoutAndRedirect } from '../../actions/auth';


const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item
const MenuItemGroup = Menu.ItemGroup;

export default class SideBar extends React.Component {

  static propTypes = {
      location: PropTypes.shape({
          pathname: PropTypes.string
      }),
      isAuthenticated: PropTypes.bool.isRequired,
      dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
      location: undefined
  };

  selectKeysBasedOnRoute = (pathname) => {
    let res = [];

    switch(pathname) {
      case '/':
        res.push('1');
        break;
      case '/login':
        res.push('2');
        break;
      case '/protected':
        res.push('3');
        break;
      default:
        break;
    }

    return res;
  }

  logout = () => {
    this.props.dispatch(authLogoutAndRedirect());
  }

  render() {

    console.log(this.props);
    if (!this.props.location) return null;

    const { pathname } = this.props.location;

    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        selectedKeys={this.selectKeysBasedOnRoute(pathname)}
        defaultOpenKeys={['sub1', 'sub2']}
        mode="inline"
        theme="dark"
      >
        <MenuItem key="1"> <Link to="/"> Home </Link> </MenuItem>
        { !this.props.isAuthenticated ? <MenuItem key="2"> <Link to="/login"> Login </Link> </MenuItem> : null }
        { this.props.isAuthenticated ? <MenuItem key="3"> <Link to="/protected"> Protected View </Link> </MenuItem> : null }
        { this.props.isAuthenticated ? <MenuItem key="4" onClick={this.logout}> Log Out </MenuItem> : null }
      </Menu>
    );
  }
}
