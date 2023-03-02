import React, { useEffect, useState } from "react";
import API from "../api/api";
import { TitleP, SectionP, TableP } from "./PageElements";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const { data } = await API.get("posts");

      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <>
      <TitleP text="Posts" />
      <TableP items={posts} hasLink={true} />
      {/* <SectionP id="posts" classN="rounder-0" text={posts.length}></SectionP> */}
      <SectionP id="last_Section" text="Home Last Section" />
    </>
  );
};

export default Posts;
