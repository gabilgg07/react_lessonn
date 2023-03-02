import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/api";
import { TitleP, SectionP } from "./PageElements";
import { Container } from "react-bootstrap";
import Tilt from "./Tilt";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const { data } = await API.get(`posts/${id}`);
      setPost(data);
    };

    getPost();
  }, [id]);

  useEffect(() => {
    const getUser = async (id) => {
      const { data } = await API.get(`users/${id}`);
      setUser(data);
    };

    if (Object.keys(post).length > 0) {
      getUser(post.userId);
    }
  }, [post]);

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <>
      <TitleP text="Post Details" />
      {/* {Boolean(post) && (
        <Container>
          <Card className="my_card">
            <Card.Header>{post.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {post.body} </p>
                {Boolean(user) && (
                  <footer className="blockquote-footer">
                    User name: <cite title="Source Title">{user.name}</cite>
                  </footer>
                )}
              </blockquote>
            </Card.Body>
          </Card>
        </Container>
      )} */}
      {Boolean(post) && (
        <Container>
          <div className="glass-container">
            <div className="glass-card">
              <div className="glass-content">
                <h2>{post.id}</h2>
                {Boolean(user) && <h3>{user.name}</h3>}
                <p>{post.body}</p>
                <Link to="/posts">Go Back</Link>
              </div>
            </div>
          </div>
        </Container>
      )}
      <Tilt />
      <SectionP id="last_Section" text="Home Last Section" />
    </>
  );
};

export default PostDetail;
