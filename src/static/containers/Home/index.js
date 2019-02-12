import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import './style.scss';
import customLogo from './images/logo.jpg';

import TopSaleEstateList from "../../components/TopSaleEstateList";
import TopSoldEstateList from "../../components/TopSoldEstateList";
import TrendLineChart from "../../components/TrendLineChart";

const Search = Input.Search;

class HomeView extends React.Component {
    static propTypes = {
        statusText: PropTypes.string,
        userName: PropTypes.string,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        statusText: '',
        userName: ''
    };

    goToProtected = () => {
        this.props.dispatch(push('/protected'));
    };

    render() {
        return (
            <div className="container">
                <div className="margin-top-medium text-center">

                    <img className="page-logo margin-bottom-medium"
                        src={customLogo}
                        alt="customLogo"
                    />

                </div>
                <div className="text-center">
                    <h1>二手房交易数据分析</h1>
                    <h4>Hello, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="margin-top-medium text-center">
                    <p>Attempt to access some <a onClick={this.goToProtected}><b>protected content</b></a>.</p>
                </div>
                <div className="margin-top-medium">
                    {this.props.statusText ?
                        <div className="alert alert-info">
                            {this.props.statusText}
                        </div>
                        :
                        null
                    }
                </div>

                <div>
                    <Search
                      placeholder="搜索你感兴趣的房产"
                      enterButton="Search"
                      size="large"
                      onSearch={value => console.log(value)}
                    />
                </div>

                <div>
                    <section>
                        <h3> 全市在售房量前十小区 </h3>
                        <TopSaleEstateList />
                    </section>

                    <section>
                        <h3> 全市已售房量前十小区 </h3>
                        <TopSoldEstateList />
                    </section>

                    <section>
                        <h3> 全市二手房价格趋势 </h3>
                        <TrendLineChart />
                    </section>

                    <section>
                        <h3> 全市二手房交易量趋势 </h3>
                        <TrendLineChart />
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
