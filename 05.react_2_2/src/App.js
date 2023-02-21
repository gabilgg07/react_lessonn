import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Box from "./components/Box";

// -------- Class Component-le state mentiqi:

export class App2 extends React.Component {
  state = {
    isBoxShow: true,
    isBox2Show: false,
    date: "",
  };

  handleBtnClick = () => {
    // console.log("hey");
    this.setState({ isBoxShow: !this.state.isBoxShow });
  };
  handleBtn2Click = () => {
    this.setState({ isBox2Show: !this.state.isBox2Show });
  };

  componentDidMount() {
    // C Component yarananda
  }

  componentDidUpdate() {
    // C Component deyisende
  }

  componentWillUnmount() {
    // C Component silinende
  }

  render() {
    return (
      <div className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6 mb-2">
                  <button
                    onClick={this.handleBtnClick}
                    className="btn btn-outline-warning mb-2"
                  >
                    Toggle Box
                  </button>

                  {this.state.isBoxShow && <div className="box">Box 1</div>}
                </div>
                <div className="col-6 mb-2">
                  <button
                    onClick={this.handleBtn2Click}
                    className="btn btn-outline-info mb-2"
                  >
                    Toggle Box2
                  </button>
                  {this.state.isBox2Show && (
                    <div className="box box2">Box 2</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ------- Function Componentle state mentiqi:

let countLi = 0;

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

export const App3 = () => {
  const [isBoxShow, setIsBoxShow] = useState(true);
  const [isBox2Show, setIsBox2Show] = useState();
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  let [ul, setUl] = useState("");

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

  const handleGetTimeBtnClick = () => {
    let li = `<li class="time-list-item"><span class="count-li">${(++countLi)
      .toString()
      .padStart(2, "0")}. </span> <code>${getCurrentTime(true)}</code></li>`;
    setUl(ul + li);
    getElemThis();
  };

  function getElemThis() {
    let box = document.querySelector(".box4");
    setTimeout(() => {
      box.scrollTo(0, box.scrollHeight);

      // asagida ki da isleyir
      // box.scrollTop = box.scrollHeight;
    }, 0);
  }

  const handleResetBtnClick = () => {
    setUl((ul = ""));
  };
  const handleHardResetBtnClick = () => {
    setUl((ul = ""));
    countLi = 0;
  };

  setInterval(() => {
    setCurrentTime(getCurrentTime());
  }, 1000);

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
              <div className="col-6 mb-2">
                <button
                  onClick={handleGetTimeBtnClick}
                  className="btn btn-outline-success mb-2 me-2"
                >
                  GetTime
                </button>
                <button
                  onClick={handleResetBtnClick}
                  className="btn btn-outline-info mb-2 me-2"
                >
                  Reset
                </button>
                <button
                  onClick={handleHardResetBtnClick}
                  className="btn btn-outline-danger mb-2 me-2"
                >
                  Hard Reset
                </button>
                <div className="box box4">
                  <p className="center-item w-100 p-0 m-0">
                    {getCurrentDate()}
                  </p>
                  <p className="time">
                    Time:{" "}
                    <span className="current-time">
                      <code>{currentTime}</code>
                    </span>
                  </p>
                  <ul
                    className="time-list"
                    dangerouslySetInnerHTML={{ __html: ul }}
                  ></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isBoxShow, setIsBoxShow] = useState(true);
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date().toLocaleTimeString());

  // her effectde ise dusur:mount,upload,unmount
  // useEffect(() => {
  //   console.log("first use effect");
  // });

  // mount zamani ise dusur
  // useEffect(() => {
  //   console.log("second use effect");
  // }, []);

  // mount ve gonderilmis state-lerin
  // update-i zamani ise dusur
  // useEffect(() => {
  //   console.log("third use effect");
  // }, [count]);

  useEffect(() => {
    return () => {
      console.log("fourth use effect");
    };
  }, []);

  const handleBtnClick = () => {
    setIsBoxShow(!isBoxShow);
  };

  // altdaki 2 funksiyanin handleCountClick funksiyasi evezleyir

  // const handleIncreaseBtnClick = () => {
  //   setCount(count + 1);
  // };

  // const handleDecreaseBtnClick = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  const handleCountClick = (type, e) => {
    console.log(type);
    console.log(e);
    if (type === "increase") {
      setCount(count + 1);
    } else {
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  // let timerId;
  // const getTimeNow = () => {
  //   timerId = setInterval(() => {
  //     setDate(new Date().toLocaleTimeString());
  //   }, 1000);
  // };

  // useEffect(() => {
  //   getTimeNow();

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-2">
            <div className="box-wrapper">
              <div className="box-btn">
                <button
                  onClick={handleBtnClick}
                  className="btn btn-outline-warning mb-2"
                >
                  Toggle Box
                </button>
              </div>
              {isBoxShow && <Box>Box</Box>}
            </div>
          </div>
          <div className="col-lg-3 mb-2">
            <div className="box-wrapper">
              <Box classN="box2">
                <span className="count">{count}</span>
              </Box>
              {/* <div className="box box2">
                <span className="count">{count}</span>
              </div> */}
              <div className="box-btn">
                <button
                  onClick={(e) => handleCountClick("increase", e)}
                  className="btn btn-outline-success my-2 me-2"
                >
                  Increase
                </button>
                <button
                  onClick={(e) => handleCountClick("decrease", e)}
                  className="btn btn-outline-danger my-2"
                >
                  Decrease
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-2">
            <div className="box-wrapper">
              <Box classN="box3" hasTimer={true}>
                <p className="center-item w-100 p-0 m-0">{getCurrentDate()}</p>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

function getCurrentTime(ms = false) {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  if (ms) {
    const mSeconds = String(now.getMilliseconds()).padStart(3, "0");
    return `${hours}:${minutes}:${seconds}.${mSeconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  return `${day} ${months[month]}, ${year}`;
}
