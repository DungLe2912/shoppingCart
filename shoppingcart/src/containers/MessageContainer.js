import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MessageTypes from '../constants/Messages';
import * as actions from '../actions/index';
import Message from '../components/message';
class MessageContainer extends Component {

    render() {
       var {message}=this.props;
        return (
           <Message message={message}>

           </Message>
        );
    }
    

}

const mapStateToProps = (state) => {
    return {
        message:state.Message
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
