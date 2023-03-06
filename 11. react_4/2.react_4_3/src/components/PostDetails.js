import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import API from "../api/api";
import { useParams, useLocation } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();
  let location = useLocation();

  console.log(location);

  const useQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  const queryS = useQueryParams();

  if (Boolean(queryS.get("page"))) {
    console.log(queryS.get("page"));
  }

  useEffect(() => {
    const getPost = async () => {
      const { data } = await API.get(`/posts/${id}`);
      setPost(data);
    };

    getPost();
  }, [id]);

  return (
    <Container>
      <div className="page">
        <hr />
        <h1 className="text-center mt-4 text-warning">Post Details</h1>
        <hr />
        <Card className="my-4">
          <Card.Body className="custom_card_body">
            <Card.Title>{post.title}</Card.Title>
            <br />
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default PostDetails;
