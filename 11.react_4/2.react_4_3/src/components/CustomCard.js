import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import API from "../api/api";
import { Link } from "react-router-dom";

const CustomCard = ({ post }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await API.get(`/users/${post.userId}`);
      setUser(data);
    };

    getUser();
  }, [post.userId]);

  return (
    <Card className="mb-4">
      <Card.Body className="custom_card_body">
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.title}</Card.Subtitle>
        <Card.Text>{post.body}</Card.Text>
        <Link to={`/posts/${post.id}`}>Read More ...</Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
