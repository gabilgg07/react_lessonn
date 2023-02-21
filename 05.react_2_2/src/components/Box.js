import { useState, useEffect } from "react";

const Box = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  //   useEffect(() => {
  //     console.log("fourth use effect: Box component mounted");
  //     return () => {
  //       console.log("Box component will unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    const getTimerNow = () => {
      let timerId = setInterval(
        () => setTime(new Date().toLocaleTimeString()),
        1000
      );

      return timerId;
    };
    let timer = getTimerNow();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`box ${props.classN}`}>
      {props.children}
      {props.hasTimer && (
        <p className="time">
          Time:
          <span className="current-time">
            <code>{time}</code>
          </span>
        </p>
      )}
    </div>
  );
};

export default Box;
