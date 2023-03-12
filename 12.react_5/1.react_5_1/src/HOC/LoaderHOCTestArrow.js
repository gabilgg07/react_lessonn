import React, { useState } from "react";

const LoaderHOCTestArrow = (WrapperComponent, loadingMessage) => {
  const HOC = () => {
    const [loadingState, setLoadingState] = useState(false);

    const handleSetLoadingState = (b) => {
      setLoadingState(b);
    };

    return (
      <>
        {loadingState && <div>loading... {loadingMessage}</div>}
        <WrapperComponent setLoading={handleSetLoadingState} />
      </>
    );
  };

  return HOC;
};

export default LoaderHOCTestArrow;
