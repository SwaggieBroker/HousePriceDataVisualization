import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TopSoldEstateList from './TopSoldEstateList';
import { dataFetchTopCommunitiesSold } from '../../actions/data';


const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		isAuthenticated: state.auth.isAuthenticated,
		location: state.routing.location,
		topCommunitiesSold: {
			data: state.topCommunitiesSold.data,
			isFetching: state.topCommunitiesSold.isFetching,
		},
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		dataFetchTopCommunitiesSold: bindActionCreators(dataFetchTopCommunitiesSold, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSoldEstateList);
