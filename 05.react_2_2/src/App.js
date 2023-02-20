import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// -------- Class Component-le state mentiqi:
// class App extends React.Component {
//   state = {
//     isBoxShow: true,
//     isBox2Show: false,
//   };

//   handleBtnClick = () => {
//     // console.log("hey");
//     this.setState({ isBoxShow: !this.state.isBoxShow });
//   };
//   handleBtn2Click = () => {
//     this.setState({ isBox2Show: !this.state.isBox2Show });
//   };

//   render() {
//     return (
//       <div className="my-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="row">
//                 <div className="col-6 mb-2">
//                   <button
//                     onClick={this.handleBtnClick}
//                     className="btn btn-outline-warning mb-2"
//                   >
//                     Toggle Box
//                   </button>

//                   {this.state.isBoxShow && <div className="box">Box 1</div>}
//                 </div>
//                 <div className="col-6 mb-2">
//                   <button
//                     onClick={this.handleBtn2Click}
//                     className="btn btn-outline-info mb-2"
//                   >
//                     Toggle Box2
//                   </button>
//                   {this.state.isBox2Show && (
//                     <div className="box box2">Box 2</div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// ------- Function Componentle state mentiqi:

const App = () => {
  const [isBoxShow, setIsBoxShow] = useState(true);
  const [isBox2Show, setIsBox2Show] = useState();
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setIsBoxShow(!isBoxShow);
  };

  const handleBtn2Click = () => {
    setIsBox2Show(!isBox2Show);
  };

  const handleIncreaseBtnClick = () => {
    setCount(count + 1);
  };

  const handleDecreaseBtnClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 mb-2">
                <button
                  onClick={handleBtnClick}
                  className="btn btn-outline-warning mb-2"
                >
                  Toggle Box
                </button>

                {isBoxShow && <div className="box">Box 1</div>}
              </div>
              <div className="col-6 mb-2">
                <button
                  onClick={handleBtn2Click}
                  className="btn btn-outline-info mb-2"
                >
                  Toggle Box2
                </button>
                {isBox2Show && <div className="box box2">Box 2</div>}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6 mb-2">
                <button
                  onClick={handleIncreaseBtnClick}
                  className="btn btn-outline-success mb-2 me-2"
                >
                  Increase
                </button>
                <button
                  onClick={handleDecreaseBtnClick}
                  className="btn btn-outline-danger mb-2"
                >
                  Decrease
                </button>
                <div className="box box3">
                  <span className="count">{count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
