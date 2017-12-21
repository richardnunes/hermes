import React, { Component } from "react";
import PropTypes from "prop-types";
import InputPreview from "./components/InputPreview";
import { connect } from "react-redux";
import { setMessage } from "./actions/message";

class App extends Component {

    _onChange = value => this.props.dispatch(setMessage(value));

    render() {
        const { message } = this.props.messageReducer;

        return (
            <InputPreview value={ message } onChange={ this._onChange } />
        );
    }
}

App.propTypes = {
    messageReducer: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default connect(state => state)(App);
