import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './SplitScreen.scss';

class SplitScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { leftPane, rightPane, totalNumber } = this.props;
        return (
            <div className="row">
                <div className="left-to-right col-md-6">
                    {leftPane}
                </div>
                <div className="counter">
                    <h1 className="counter-text">{totalNumber}</h1>
                </div>
                <div className="col-md-6">
                    {rightPane}
                </div>
            </div>
        );
    }
}

SplitScreen.defaultProps = {
    leftPane: {},
    rightPane: {},
    totalNumber: 0,
};

SplitScreen.propTypes = {
    leftPane: PropTypes.object,
    rightPane: PropTypes.object,
    totalNumber: PropTypes.number,
};

export default SplitScreen;
