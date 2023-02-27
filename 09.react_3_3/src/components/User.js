import React, { useState } from "react";
import Post from "./Post";
import { Card, Col, ListGroup } from "react-bootstrap";

const User = (props) => {
  const [posts, setPosts] = useState([]);

  const handleCardClick = (e) => {
    document.querySelectorAll(".my_card").forEach((card) => {
      card.classList.remove("active");
      card.parentElement.classList.remove("col-md-12");
      card.parentElement.classList.add("col-md-3");
    });

    e.currentTarget.classList.add("active");
    e.currentTarget.parentElement.classList.remove("col-md-3");
    e.currentTarget.parentElement.classList.add("col-md-12");

    const fetchPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.filter((p) => p.userId === props.user.id));
        });
    };
    fetchPosts();
  };

  return (
    <Col md={3} className="my-2 slow_col">
      <Card onClick={handleCardClick} className="my_card">
        <Card.Body>
          <Card.Title>{props.user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.user.username}
          </Card.Subtitle>
          <Card.Text>
            <strong className="text-warning">Email:</strong> {props.user.email}
            <br />
            <strong className="text-warning">Website:</strong>{" "}
            {props.user.website}
          </Card.Text>
          {
            <ListGroup>
              {Boolean(posts.length) &&
                posts.map((post) => <Post key={post.id} post={post} />)}
            </ListGroup>
          }
        </Card.Body>
      </Card>
    </Col>
  );
};

export default User;
