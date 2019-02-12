import { List, Avatar, Icon } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// should fetch top Sold estate list according to props
export default class TopSoldEstateList extends React.Component {

  static propTypes = {
      location: PropTypes.shape({
          pathname: PropTypes.string
      }),
      isAuthenticated: PropTypes.bool.isRequired,
      dataFetchTopCommunitiesSold: PropTypes.func.isRequired,
      topCommunitiesSold: PropTypes.shape({
        data: PropTypes.array,
        isFetching: PropTypes.bool,
      }),  
    };

  static defaultProps = {
      location: undefined,
      topCommunitiesSold: {
        data: null,
        isFetching: false,
      },
  };

  componentDidMount() {
    this.props.dataFetchTopCommunitiesSold();
  }

  render() {
    const { topCommunitiesSold } = this.props;
    if (!topCommunitiesSold.data || topCommunitiesSold.isFetching) {
      return (<div> Loading top communities ... </div>);
    }
    console.log(topCommunitiesSold);
    return (
      <List
        itemLayout="horizontal"
        dataSource={topCommunitiesSold.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.community}</a>}
            />
            {item.count}
          </List.Item>
        )}
      />
    );
  }
}
