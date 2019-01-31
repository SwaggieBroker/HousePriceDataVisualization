import { List, Avatar, Icon } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// should fetch top sale estate list according to props
export default class TopSaleEstateList extends React.Component {

  static propTypes = {
      location: PropTypes.shape({
          pathname: PropTypes.string
      }),
      isAuthenticated: PropTypes.bool.isRequired,
      dataFetchTopCommunities: PropTypes.func.isRequired,
      topCommunities: PropTypes.shape({
        data: PropTypes.array,
        isFetching: PropTypes.bool,
      }),  
    };

  static defaultProps = {
      location: undefined,
      topCommunities: {
        data: null,
        isFetching: false,
      },
  };

  componentDidMount() {
    this.props.dataFetchTopCommunities();
  }

  render() {
    const { topCommunities } = this.props;
    if (!topCommunities.data || topCommunities.isFetching) {
      return (<div> Loading top communities ... </div>);
    }
    console.log(topCommunities);
    return (
      <List
        itemLayout="horizontal"
        dataSource={topCommunities.data}
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
