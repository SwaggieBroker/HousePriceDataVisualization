import { connect } from 'react-redux';
import { compose } from 'redux';
import TopSaleEstateList from './TopSaleEstateList';


const mapStateToProps = (state, ownProps) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
		location: state.routing.location
	};
};

export default connect(mapStateToProps)(TopSaleEstateList);
