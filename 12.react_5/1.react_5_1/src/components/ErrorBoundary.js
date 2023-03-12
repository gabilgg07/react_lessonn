import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // static getDrivedStateFromError(){

  // }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something goes wrong!!!</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
