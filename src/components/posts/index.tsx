import React, { useEffect } from "react";
import { PostCard } from "../";

import { useAppSelector, useAppDispatch } from "../../redux/index";
import { getPostsAction } from "../../redux/modules/posts/actions";
import { selectPosts } from "../../redux/modules/posts/selectors";
import styles from "./Posts.module.css";

const Posts: React.FC = () => {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  return (
    <div className={styles.list}>
      <div className={styles.value}>
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard title={post.title} thumbnail={post.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
