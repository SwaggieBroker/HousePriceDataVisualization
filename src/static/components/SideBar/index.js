import { connect } from 'react-redux';
import { compose } from 'redux';
import SideBar from './SideBar';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		location: state.routing.location
	};
};

export default connect(mapStateToProps)(SideBar);
