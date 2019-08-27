import React, { Component } from 'react';

import Modal from "../Burger/Modal/Modal";

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {
    state = {
      error: null,

    };

    requestInterceptor = () => {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
    };

    responseInterceptor = () => {
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    };

    UNSAFE_componentWillMount() {
     this.requestInterceptor();
     this.responseInterceptor();
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
          <>
            <Modal
                show={this.state.error}
                hide={this.errorConfirmedHandler}>
              {this.state.error ? this.state.error.message : null}
            </Modal>
            <WrappedComponent {...this.props} />
          </>
      );
    }
  }
}

export default withErrorHandler;