import React, { Component } from "react";
import PropTypes from "prop-types";
import InputPreview from "../components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "../actions/message";
import { Link } from "react-router-dom";

class Home extends Component {

    _onChange = value => this.props.dispatch(setMessage(value));

    render() {
        const { message } = this.props.messageReducer;

        return (
            <div>
                <InputPreview value={ message } onChange={ this._onChange } />
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
}

Home.propTypes = {
    messageReducer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(Home);
