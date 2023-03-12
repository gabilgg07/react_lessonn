import React from "react";

const LoaderHOC = (WrapperComponent, loadingMessage) => {
  return class HOC extends React.Component {
    state = {
      loading: false,
    };

    setLoadingState = (b) => {
      this.setState({ loading: b });
    };

    render() {
      return (
        <>
          {this.state.loading && <div>loading... {loadingMessage}</div>}
          <WrapperComponent setLoading={this.setLoadingState} />
        </>
      );
    }
  };
};

export default LoaderHOC;
