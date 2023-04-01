import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import API from "../api/api";
import CustomCard from "./CustomCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await API.get("/posts");
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <Container>
      <div className="page">
        <hr />
        <h1 className="text-center mt-4 text-warning">Posts</h1>
        <hr />
        <div className="my-2">
          <Row>
            {posts.map((post) => (
              <Col lg={3} key={post.id}>
                <CustomCard post={post} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Posts;
