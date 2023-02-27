import { useState, useCallback, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Table,
} from "react-bootstrap";
import API from "./api/api";

import { useCopyClipboard, useMobileDecect } from "./hooks/hooks";
import ModalPortal from "./components/ModalPortal";
import User from "./components/User";
import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [copyItems, setCopyItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [alboms, setAlboms] = useState([]);

  const [copyClipboard, isCopied] = useCopyClipboard();
  const [isMobile] = useMobileDecect();

  //#region Functions:

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleCopyBtnClick = () => {
    if (term.trim().length < 1) return;
    copyClipboard(term);
    setCopyItems([...copyItems, term]);
    setTerm("");
  };

  const handleTermKeyDown = (e) => {
    if (term.trim().length < 1) return;
    if (e.key === "Enter") {
      copyClipboard(term);
      setCopyItems([...copyItems, term]);
      setTerm("");
    }
  };

  const handleListItemBtnClick = (e) => {
    copyClipboard(e.target.innerText);
  };

  const handleClearBtnClick = useCallback(() => {
    setCopyItems([]);
  }, []);

  const handleGetUserAgentBtnClick = () => {
    console.log(navigator.userAgent);
  };

  //#endregion

  // Api-la islemek

  useEffect(() => {
    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));
    };

    fetchUsers();

    const fetchPostsAsync = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      const items = data.filter((el) => el.userId === 1);

      setPosts(items);
    };

    fetchPostsAsync();

    const axsiosAlboms = async () => {
      // const { data } = await axios.get(
      //   "https://jsonplaceholder.typicode.com/albums"
      // );
      const { data } = await API.get("albums");

      setAlboms(data.filter((albom) => albom.userId === 1));
    };

    axsiosAlboms();
  }, []);

  return (
    <section id="main" className="my-5">
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className="text-center mb-2 text-secondary">
              {isMobile ? "Mobile" : "Not Mobile"}
            </h1>
            <div className="form-box">
              <Form.Group>
                <Form.Control
                  type="text"
                  name="term"
                  value={term}
                  onChange={handleTermChange}
                  onKeyDown={handleTermKeyDown}
                  className="mb-3"
                />
              </Form.Group>
              <div className="btn-box d-flex justify-content-sm-between flex-column flex-sm-row">
                <Button onClick={handleCopyBtnClick} className="mb-2 mb-sm-0">
                  {isCopied ? "Copied" : "Copy"}
                </Button>
                <Button
                  variant="info"
                  onClick={handleGetUserAgentBtnClick}
                  className="mb-2 mb-sm-0"
                >
                  GetUserAgent
                </Button>
                <Button
                  variant="outline-warning"
                  onClick={handleClearBtnClick}
                  className="mb-2 mb-sm-0"
                >
                  Clear List
                </Button>
              </div>
            </div>
            <div className="copied-list mt-4">
              <h2 className="text-info">Copied Text list:</h2>
              <ListGroup>
                {Boolean(copyItems.length) &&
                  copyItems.map((item, i) => (
                    <ListGroup.Item
                      key={i}
                      action
                      onClick={handleListItemBtnClick}
                    >
                      {item}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg={6}>
            <Table striped bordered hover size="sm">
              <caption> ---- Users ----</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Web Site</th>
                </tr>
              </thead>
              <tbody>
                {Boolean(users.length) &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.website}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Col>
          <Col lg={12}>
            <h2 className="text-success mt-3">Users:</h2>
            <Row>
              {Boolean(users.length) &&
                users.map((user) => <User key={user.id} user={user} />)}
            </Row>
          </Col>
          <Col lg={6}>
            <h2 className="text-secondary mt-3">User 1 Posts:</h2>
            <ListGroup>
              {Boolean(posts.length) &&
                posts.map((post) => (
                  <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          <Col lg={6}>
            <h2 className="text-primary mt-3">User 1 Alboms:</h2>
            <ListGroup>
              {Boolean(alboms.length) &&
                alboms.map((albom) => (
                  <ListGroup.Item key={albom.id}>{albom.title}</ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>

      <ModalPortal />
    </section>
  );
}

export default App;
