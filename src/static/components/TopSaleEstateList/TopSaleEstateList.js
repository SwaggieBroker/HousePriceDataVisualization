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
      dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
      location: undefined
  };

  render() {
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];

    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    );
  }
}
