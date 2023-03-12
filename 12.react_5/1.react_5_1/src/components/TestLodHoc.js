import React, { useEffect } from "react";
import LoaderHOC from "../HOC/LoaderHOC";

const TestLodHoc = (props) => {
  useEffect(() => {
    props.setLoading(true);
    console.log(props);
    // eslint-disable-next-line
  }, []);

  return <div>Test</div>;
};

export default LoaderHOC(TestLodHoc, "Zehmet olmasa Test yuklemesini gozleyin");
