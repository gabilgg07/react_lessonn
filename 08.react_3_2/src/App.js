import "./App.css";
// import { useRef, useState, useEffect } from "react";
// import { useState, useCallback } from "react";
import { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
// import Items from "./components/Items";

//#region USEREF HOOK
// function App() {
//   const refNum = useRef(0);
//   const refFirstname = useRef(null);
//   const [num, setNum] = useState(0);
//   const [firstname, setFirstname] = useState("");

//   const handleBtnClick = () => {
//     setNum(num + 1);
//     refNum.current += 1;

//     setTimeout(() => {
//       console.log(`state is - ${num} /// ref is - ${refNum.current}`);
//     }, 1000);
//   };

//   const handleChangeFirstname = (e) => {
//     setFirstname(e.target.value);
//   };

//   useEffect(() => {
//     refFirstname.current.focus();
//     console.log(refFirstname.current.offsetHeight);
//   }, []);

//   return (
//     <Container>
//       <Row>
//         <Col lg={6}>
//           <Button onClick={handleBtnClick} className="mt-5 mb-2">
//             Increment
//           </Button>
//           <Form.Group>
//             <Form.Control
//               ref={refFirstname}
//               type="number"
//               name="firstname"
//               className="mb-2"
//               placeholder="write number"
//               value={firstname}
//               onChange={handleChangeFirstname}
//             ></Form.Control>
//           </Form.Group>
//           <div className="list-group">
//             <p className="list-group-item m-0">
//               <strong className="text-warning">state:</strong> {num}{" "}
//             </p>
//             <p className="list-group-item">
//               <strong className="text-info">ref:</strong> {refNum.current}
//             </p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

//#endregion

//#region USECALLBACK HOOK

// const App = () => {
//   const [num, setNum] = useState(1);
//   const [darkTheme, setDarkTheme] = useState(false);

//   // const getItems = () => {
//   //   return [num, num + 1, num + 2];
//   // };

//   const getItems = useCallback(
//     (inc) => {
//       return [num + inc, num + inc + 1, num + inc + 2];
//     },
//     [num]
//   );

//   const handleToggleBtnClick = () => {
//     setDarkTheme(!darkTheme);
//   };

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={6}>
//           <div
//             className={(darkTheme ? "dark" : "light") + " p-4 border rounded"}
//           >
//             <div className="form-box">
//               <Form.Control
//                 type="number"
//                 name="number"
//                 className="my-2"
//                 value={num}
//                 onChange={(e) =>
//                   setNum(parseInt(e.target.value ? e.target.value : 0))
//                 }
//               />
//             </div>
//             <Button onClick={handleToggleBtnClick} className="mb-2">
//               Toggle Theme
//             </Button>
//             <ListGroup>
//               <Items getItems={getItems} />
//             </ListGroup>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

//#endregion

//#region USEMEMO HOOK

function getDoubleNum(n) {
  for (let i = 0; i < 100000000; i++) {}
  // console.log(n * 2);
  return n * 2;
}

const App = () => {
  const [num, setNum] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  // const getItems = useCallback(
  //   (inc) => {
  //     return [num + inc, num + inc + 1, num + inc + 2];
  //   },
  //   [num]
  // );

  const doubleNum = useMemo(() => {
    return getDoubleNum(num);
  }, [num]);

  const handleToggleBtnClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <div
            className={(darkTheme ? "dark" : "light") + " p-4 border rounded"}
          >
            <div className="form-box">
              <Form.Control
                type="number"
                name="number"
                className="my-2"
                value={num}
                onChange={(e) =>
                  setNum(parseInt(e.target.value ? e.target.value : 0))
                }
              />
            </div>
            <Button onClick={handleToggleBtnClick} className="mb-2">
              Toggle Theme
            </Button>
            <ListGroup>
              <ListGroupItem>{doubleNum}</ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

//#endregion

export default App;
