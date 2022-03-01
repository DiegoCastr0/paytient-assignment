import React, { useEffect } from "react";
import { PostCard } from "../";

import { useAppSelector, useAppDispatch } from "store";
import { getPostsAction } from "store/modules/posts/actions";
import {
  selectPosts,
  selectErrorPosts,
  selectFetchingPosts,
} from "store/modules/posts/selectors";
import styles from "./Posts.module.css";
import { LoadingSpinner } from "components/shared";

const Posts: React.FC = () => {
  const posts = useAppSelector(selectPosts);
  const isError = useAppSelector(selectErrorPosts);
  const isLoading = useAppSelector(selectFetchingPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
    // According to react-redux docs is safe to add dispatch to the dependency array
  }, [dispatch]);

  if (isError) {
    return <div>Something went wrong. Please, try again later</div>;
  }

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsList}>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            thumbnail={post.thumbnail}
            ups={post.ups}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
