import React, { useEffect } from "react";
import LoaderHOCTestArrow from "../HOC/LoaderHOCTestArrow";

const TestLodArrowHoc = (props) => {
  useEffect(() => {
    props.setLoading(true);

    // eslint-disable-next-line
  }, []);

  return <div>Test Arrow Lod</div>;
};

export default LoaderHOCTestArrow(
  TestLodArrowHoc,
  "Zehmet olmasa Test Lod Arrow yuklemesini gozleyin"
);
