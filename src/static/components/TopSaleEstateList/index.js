import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TopSaleEstateList from './TopSaleEstateList';
import { dataFetchTopCommunities } from '../../actions/data';


const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		isAuthenticated: state.auth.isAuthenticated,
		location: state.routing.location,
		topCommunities: {
			data: state.topCommunities.data,
			isFetching: state.topCommunities.isFetching,
		},
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dataFetchTopCommunities: bindActionCreators(dataFetchTopCommunities, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSaleEstateList);
