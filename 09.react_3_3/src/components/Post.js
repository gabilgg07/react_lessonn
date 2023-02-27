import React from "react";
import { ListGroup } from "react-bootstrap";

const Post = ({ post }) => {
  return <ListGroup.Item>{post.title}</ListGroup.Item>;
};

export default Post;
