import React, { Component } from 'react';

import { connect } from 'react-redux';

import './RealDetail.css';

import * as actionTypes from '../../../store/actions/actionTypes';

class RealDetail extends Component {
    componentDidMount() {
        this.props.onGetTodo(parseInt(this.props.match.params.id));
    }

    render() {
        let title = ''; 
        let content = '';
        if (this.props.selectedTodo) {
            title = this.props.selectedTodo.title;
            content = this.props.selectedTodo.content;
        }
        return (
            <div className="RealDetail">
                <div className="row">
                    <div className="left">
                        Name:
                    </div>
                    <div className="right">
                        {title}
                    </div>
                </div>
                <div className="row">
                    <div className="left">
                        Content:
                    </div>
                    <div className="right">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
};


const mapStateToProps = state => {
    return {
        selectedTodo: state.td.selectedTodo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTodo: id =>
        dispatch({ type: actionTypes.GET_TODO, targetID: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealDetail);